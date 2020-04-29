
(function () {
	var moduleName = 'angularUtils.directives.dirPagination';
	var templatePath = 'directives/pagination/dirPagination.tpl.html';
	var module;
	try {
		module = angular.module(moduleName);
	} catch (err) {
		module = angular.module(moduleName, []);
	}
	module.directive('dirPaginate', ['$compile', '$parse', '$timeout', 'paginationService', function ($compile, $parse, $timeout, paginationService) {
				return {
					terminal: true,
					multiElement: true,
					priority: 5000,
					compile: function dirPaginationCompileFn(tElement, tAttrs) {
						if (tElement[0].hasAttribute('dir-paginate-start') || tElement[0].hasAttribute('data-dir-paginate-start')) {
							tAttrs.$set('ngRepeatStart', tAttrs.dirPaginate);
							tElement.eq(tElement.length - 1).attr('ng-repeat-end', true);
						} else {
							tAttrs.$set('ngRepeat', tAttrs.dirPaginate);
						}
						var expression = tAttrs.dirPaginate;
						var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						var filterPattern = /\|\s*itemsPerPage\s*:[^|]*/;
						if (match[2].match(filterPattern) === null) {
							throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
						}
						var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
						var collectionGetter = $parse(itemsPerPageFilterRemoved);
						return function dirPaginationLinkFn(scope, element, attrs) {
							var paginationId;
							var compiled = $compile(element, false, 5000);
							paginationId = attrs.paginationId || '__default';
							paginationService.registerInstance(paginationId);
							var currentPageGetter;
							if (attrs.currentPage) {
								currentPageGetter = $parse(attrs.currentPage);
							} else {
								var defaultCurrentPage = paginationId + '__currentPage';
								scope[defaultCurrentPage] = 1;
								currentPageGetter = $parse(defaultCurrentPage);
							}
							paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);
							if (typeof attrs.totalItems !== 'undefined') {
								paginationService.setAsyncModeTrue(paginationId);
								scope.$watch(function () {
									return $parse(attrs.totalItems)(scope);
								}, function (result) {
									if (0 <= result) {
										paginationService.setCollectionLength(paginationId, result);
									}
								});
							} else {
								scope.$watchCollection(function () {
									return collectionGetter(scope);
								}, function (collection) {
									if (collection) {
										paginationService.setCollectionLength(paginationId, collection.length);
									}
								});
							}
							compiled(scope);
						};
					}
				};
			}
		]);
	module.directive('dirPaginationControls', ['paginationService', function (paginationService) {
				var numberRegex = /^\d+$/;
				function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
					var pages = [];
					var totalPages = Math.ceil(collectionLength / rowsPerPage);
					var halfWay = Math.ceil(paginationRange / 2);
					var position;
					if (currentPage <= halfWay) {
						position = 'start';
					} else if (totalPages - halfWay < currentPage) {
						position = 'end';
					} else {
						position = 'middle';
					}
					var ellipsesNeeded = paginationRange < totalPages;
					var i = 1;
					while (i <= totalPages && i <= paginationRange) {
						var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);
						var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
						var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
						if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
							pages.push('...');
						} else {
							pages.push(pageNumber);
						}
						i++;
					}
					return pages;
				}
				function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
					var halfWay = Math.ceil(paginationRange / 2);
					if (i === paginationRange) {
						return totalPages;
					} else if (i === 1) {
						return i;
					} else if (paginationRange < totalPages) {
						if (totalPages - halfWay < currentPage) {
							return totalPages - paginationRange + i;
						} else if (halfWay < currentPage) {
							return currentPage - halfWay + i;
						} else {
							return i;
						}
					} else {
						return i;
					}
				}
				return {
					restrict: 'AE',
					templateUrl: function (elem, attrs) {
						return attrs.templateUrl || templatePath;
					},
					scope: {
						maxSize: '=?',
						onPageChange: '&?'
					},
					link: function (scope, element, attrs) {
						var paginationId;
						paginationId = attrs.paginationId || '__default';
						if (!scope.maxSize) {
							scope.maxSize = 9;
						}
						scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
						scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;
						if (!paginationService.isRegistered(paginationId)) {
							var idMessage = (paginationId !== '__default') ? ' (id: ' + paginationId + ') ' : ' ';
							throw 'pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive.';
						}
						var paginationRange = Math.max(scope.maxSize, 5);
						scope.pages = [];
						scope.pagination = {
							last: 1,
							current: 1
						};
						scope.$watch(function () {
							return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
						}, function (length) {
							if (0 < length) {
								generatePagination();
							}
						});
						scope.$watch(function () {
							return paginationService.getCurrentPage(paginationId);
						}, function (currentPage, previousPage) {
							if (currentPage != previousPage) {
								goToPage(currentPage);
							}
						});
						scope.setCurrent = function (num) {
							if (isValidPageNumber(num)) {
								paginationService.setCurrentPage(paginationId, num);
							}
						};
						function goToPage(num) {
							if (isValidPageNumber(num)) {
								scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
								scope.pagination.current = num;
								if (scope.onPageChange) {
									scope.onPageChange({
										newPageNumber: num
									});
								}
							}
						}
						function generatePagination() {
							scope.pages = generatePagesArray(1, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
							scope.pagination.current = parseInt(paginationService.getCurrentPage(paginationId));
							scope.pagination.last = scope.pages[scope.pages.length - 1];
							if (scope.pagination.last < scope.pagination.current) {
								scope.setCurrent(scope.pagination.last);
							}
						}
						function isValidPageNumber(num) {
							return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
						}
					}
				};
			}
		]);
	module.filter('itemsPerPage', ['paginationService', function (paginationService) {
				return function (collection, itemsPerPage, paginationId) {
					if (typeof(paginationId) === 'undefined') {
						paginationId = '__default';
					}
					if (!paginationService.isRegistered(paginationId)) {
						throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
					}
					var end;
					var start;
					if (collection instanceof Array) {
						itemsPerPage = parseInt(itemsPerPage) || 9999999999;
						if (paginationService.isAsyncMode(paginationId)) {
							start = 0;
						} else {
							start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
						}
						end = start + itemsPerPage;
						paginationService.setItemsPerPage(paginationId, itemsPerPage);
						return collection.slice(start, end);
					} else {
						return collection;
					}
				};
			}
		]);
	module.service('paginationService', function () {
		var instances = {};
		var lastRegisteredInstance;
		this.registerInstance = function (instanceId) {
			if (typeof instances[instanceId] === 'undefined') {
				instances[instanceId] = {
					asyncMode: false
				};
				lastRegisteredInstance = instanceId;
			}
		};
		this.isRegistered = function (instanceId) {
			return (typeof instances[instanceId] !== 'undefined');
		};
		this.getLastInstanceId = function () {
			return lastRegisteredInstance;
		};
		this.setCurrentPageParser = function (instanceId, val, scope) {
			instances[instanceId].currentPageParser = val;
			instances[instanceId].context = scope;
		};
		this.setCurrentPage = function (instanceId, val) {
			instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
		};
		this.getCurrentPage = function (instanceId) {
			return instances[instanceId].currentPageParser(instances[instanceId].context);
		};
		this.setItemsPerPage = function (instanceId, val) {
			instances[instanceId].itemsPerPage = val;
		};
		this.getItemsPerPage = function (instanceId) {
			return instances[instanceId].itemsPerPage;
		};
		this.setCollectionLength = function (instanceId, val) {
			instances[instanceId].collectionLength = val;
		};
		this.getCollectionLength = function (instanceId) {
			return instances[instanceId].collectionLength;
		};
		this.setAsyncModeTrue = function (instanceId) {
			instances[instanceId].asyncMode = true;
		};
		this.isAsyncMode = function (instanceId) {
			return instances[instanceId].asyncMode;
		};
	});
})();
(function (window, angular, undefined) {
	'use strict';
	var ngRouteModule = angular.module('ngRoute', ['ng']).provider('$route', $RouteProvider);
	function $RouteProvider() {
		function inherit(parent, extra) {
			return angular.extend(new(angular.extend(function () {}, {
						prototype: parent
					}))(), extra);
		}
		var routes = {};
		this.when = function (path, route) {
			routes[path] = angular.extend({
					reloadOnSearch: true
				}, route, path && pathRegExp(path, route));
			if (path) {
				var redirectPath = (path[path.length - 1] == '/') ? path.substr(0, path.length - 1) : path + '/';
				routes[redirectPath] = angular.extend({
						redirectTo: path
					}, pathRegExp(redirectPath, route));
			}
			return this;
		};
		function pathRegExp(path, opts) {
			var insensitive = opts.caseInsensitiveMatch,
			ret = {
				originalPath: path,
				regexp: path
			},
			keys = ret.keys = [];
			path = path.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (_, slash, key, option) {
					var optional = option === '?' ? option : null;
					var star = option === '*' ? option : null;
					keys.push({
						name: key,
						optional: !!optional
					});
					slash = slash || '';
					return ''
					 + (optional ? '' : slash)
					 + '(?:'
					 + (optional ? slash : '')
					 + (star && '(.+?)' || '([^/]+)')
					 + (optional || '')
					 + ')'
					 + (optional || '');
				}).replace(/([\/$\*])/g, '\\$1');
			ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
			return ret;
		}
		this.otherwise = function (params) {
			this.when(null, params);
			return this;
		};
		this.$get = ['$rootScope', '$location', '$routeParams', '$q', '$injector', '$http', '$templateCache', '$sce', function ($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {
				var forceReload = false,
				$route = {
					routes: routes,
					reload: function () {
						forceReload = true;
						$rootScope.$evalAsync(updateRoute);
					}
				};
				$rootScope.$on('$locationChangeSuccess', updateRoute);
				return $route;
				function switchRouteMatcher(on, route) {
					var keys = route.keys,
					params = {};
					if (!route.regexp)
						return null;
					var m = route.regexp.exec(on);
					if (!m)
						return null;
					for (var i = 1, len = m.length; i < len; ++i) {
						var key = keys[i - 1];
						var val = m[i];
						if (key && val) {
							params[key.name] = val;
						}
					}
					return params;
				}
				function updateRoute() {
					var next = parseRoute(),
					last = $route.current;
					if (next && last && next.$$route === last.$$route && angular.equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
						last.params = next.params;
						angular.copy(last.params, $routeParams);
						$rootScope.$broadcast('$routeUpdate', last);
					} else if (next || last) {
						forceReload = false;
						$rootScope.$broadcast('$routeChangeStart', next, last);
						$route.current = next;
						if (next) {
							if (next.redirectTo) {
								if (angular.isString(next.redirectTo)) {
									$location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace();
								} else {
									$location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace();
								}
							}
						}
						$q.when(next).then(function () {
							if (next) {
								var locals = angular.extend({}, next.resolve),
								template,
								templateUrl;
								angular.forEach(locals, function (value, key) {
									locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value);
								});
								if (angular.isDefined(template = next.template)) {
									if (angular.isFunction(template)) {
										template = template(next.params);
									}
								} else if (angular.isDefined(templateUrl = next.templateUrl)) {
									if (angular.isFunction(templateUrl)) {
										templateUrl = templateUrl(next.params);
									}
									templateUrl = $sce.getTrustedResourceUrl(templateUrl);
									if (angular.isDefined(templateUrl)) {
										next.loadedTemplateUrl = templateUrl;
										template = $http.get(templateUrl, {
												cache: $templateCache
											}).then(function (response) {
												return response.data;
											});
									}
								}
								if (angular.isDefined(template)) {
									locals['$template'] = template;
								}
								return $q.all(locals);
							}
						}).then(function (locals) {
							if (next == $route.current) {
								if (next) {
									next.locals = locals;
									angular.copy(next.params, $routeParams);
								}
								$rootScope.$broadcast('$routeChangeSuccess', next, last);
							}
						}, function (error) {
							if (next == $route.current) {
								$rootScope.$broadcast('$routeChangeError', next, last, error);
							}
						});
					}
				}
				function parseRoute() {
					var params,
					match;
					angular.forEach(routes, function (route, path) {
						if (!match && (params = switchRouteMatcher($location.path(), route))) {
							match = inherit(route, {
									params: angular.extend({}, $location.search(), params),
									pathParams: params
								});
							match.$$route = route;
						}
					});
					return match || routes[null] && inherit(routes[null], {
						params: {},
						pathParams: {}
					});
				}
				function interpolate(string, params) {
					var result = [];
					angular.forEach((string || '').split(':'), function (segment, i) {
						if (i === 0) {
							result.push(segment);
						} else {
							var segmentMatch = segment.match(/(\w+)(.*)/);
							var key = segmentMatch[1];
							result.push(params[key]);
							result.push(segmentMatch[2] || '');
							delete params[key];
						}
					});
					return result.join('');
				}
			}
		];
	}
	ngRouteModule.provider('$routeParams', $RouteParamsProvider);
	function $RouteParamsProvider() {
		this.$get = function () {
			return {};
		};
	}
	ngRouteModule.directive('ngView', ngViewFactory);
	ngRouteModule.directive('ngView', ngViewFillContentFactory);
	ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
	function ngViewFactory($route, $anchorScroll, $animate) {
		return {
			restrict: 'ECA',
			terminal: true,
			priority: 400,
			transclude: 'element',
			link: function (scope, $element, attr, ctrl, $transclude) {
				var currentScope,
				currentElement,
				previousElement,
				autoScrollExp = attr.autoscroll,
				onloadExp = attr.onload || '';
				scope.$on('$routeChangeSuccess', update);
				update();
				function cleanupLastView() {
					if (previousElement) {
						previousElement.remove();
						previousElement = null;
					}
					if (currentScope) {
						currentScope.$destroy();
						currentScope = null;
					}
					if (currentElement) {
						$animate.leave(currentElement, function () {
							previousElement = null;
						});
						previousElement = currentElement;
						currentElement = null;
					}
				}
				function update() {
					var locals = $route.current && $route.current.locals,
					template = locals && locals.$template;
					if (angular.isDefined(template)) {
						var newScope = scope.$new();
						var current = $route.current;
						var clone = $transclude(newScope, function (clone) {
								$animate.enter(clone, null, currentElement || $element, function onNgViewEnter() {
									if (angular.isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
										$anchorScroll();
									}
								});
								cleanupLastView();
							});
						currentElement = clone;
						currentScope = current.scope = newScope;
						currentScope.$emit('$viewContentLoaded');
						currentScope.$eval(onloadExp);
					} else {
						cleanupLastView();
					}
				}
			}
		};
	}
	ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
	function ngViewFillContentFactory($compile, $controller, $route) {
		return {
			restrict: 'ECA',
			priority: -400,
			link: function (scope, $element) {
				var current = $route.current,
				locals = current.locals;
				$element.html(locals.$template);
				var link = $compile($element.contents());
				if (current.controller) {
					locals.$scope = scope;
					var controller = $controller(current.controller, locals);
					if (current.controllerAs) {
						scope[current.controllerAs] = controller;
					}
					$element.data('$ngControllerController', controller);
					$element.children().data('$ngControllerController', controller);
				}
				link(scope);
			}
		};
	}
})(window, window.angular);