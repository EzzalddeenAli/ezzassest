OraSchool.config(function($routeProvider,$locationProvider) {

    $routeProvider.when('/', {
        //templateUrl : 'assets/templates/req.html',
       // controller  : 'reqController',
	   templateUrl : 'assets/templates/home.html?jd=5dg5ff',
        controller  : 'dashboardController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/req/:reqId', {
        templateUrl : 'assets/templates/req.html?jd=5dg5ffddff',
        controller  : 'reqController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/conditions', {
        templateUrl : 'assets/templates/conditions.html?jd=5dg5ff',
        controller  : 'dashboardController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/pay', {
        templateUrl : 'assets/templates/pay.html?jd=5dg5ff',
        controller  : 'payController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/req', {
        templateUrl : 'assets/templates/req.html?jd=5dg5ff',
        controller  : 'reqController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/help', {
        templateUrl : 'assets/templates/news.html?jd=5dg5ff',
        controller  : 'dashboardController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/results', {
        templateUrl : 'assets/templates/results.html?jd=5dg5ff',
        controller  : 'resultsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    .when('/dormitories', {
        templateUrl : 'assets/templates/dormitories.html?jd=5dg5ff',
        controller  : 'dormitoriesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

   

    .when('/transport_vehicles', {
        templateUrl : 'assets/templates/transport_vehicles.html',
        controller  : 'transport_vehicles',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/transport_members', {
        templateUrl : 'assets/templates/transportation.html',
        controller  : 'transport_members',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/settings', {
        templateUrl : 'assets/templates/settings.html',
        controller  : 'settingsController',
        methodName: 'settings',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/terms', {
        templateUrl : 'assets/templates/settings.html',
        controller  : 'settingsController',
        methodName: 'terms',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/media', {
        templateUrl : 'assets/templates/media.html',
        controller  : 'mediaController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/static', {
        templateUrl : 'assets/templates/static.html',
        controller  : 'staticController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/static/:pageId', {
        templateUrl: 'assets/templates/static.html',
        controller: 'staticController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/attendanceStats', {
        templateUrl : 'assets/templates/attendanceStats.html',
        controller  : 'attendanceStatsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/polls', {
        templateUrl : 'assets/templates/polls.html',
        controller  : 'pollsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/mailsmsTemplates', {
        templateUrl : 'assets/templates/mailsmsTemplates.html',
        controller  : 'mailsmsTemplatesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/feeType', {
        templateUrl : 'assets/templates/feeType.html',
        controller  : 'feeTypeController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/feeGroup', {
        templateUrl : 'assets/templates/feeGroup.html',
        controller  : 'feeGroupController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/feeAllocation', {
        templateUrl : 'assets/templates/feeAllocation.html',
        controller  : 'feeAllocationController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/feeDiscount', {
        templateUrl : 'assets/templates/fee_discount.html',
        controller  : 'feeDiscountController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })


    .when('/invoices', {
        templateUrl : 'assets/templates/invoices.html',
        controller  : 'invoicesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/invoices/due', {
        templateUrl : 'assets/templates/invoices.html',
        controller  : 'invoicesController',
        methodName: 'dueinvoices',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/expenses', {
        templateUrl : 'assets/templates/expenses.html',
        controller  : 'expensesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/expensesCat', {
        templateUrl : 'assets/templates/expensesCat.html',
        controller  : 'expensesCatController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/incomes', {
        templateUrl : 'assets/templates/incomes.html',
        controller  : 'incomesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/incomesCat', {
        templateUrl : 'assets/templates/incomesCat.html',
        controller  : 'incomesCatController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/languages', {
        templateUrl : 'assets/templates/languages.html',
        controller  : 'languagesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/upgrade', {
        templateUrl : 'assets/templates/upgrade.html',
        controller  : 'upgradeController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/promotion', {
        templateUrl : 'assets/templates/promotion.html',
        controller  : 'promotionController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/academicYear', {
        templateUrl : 'assets/templates/academicYear.html',
        controller  : 'academicYearController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/reports', {
        templateUrl : 'assets/templates/reports.html',
        controller  : 'reportsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/vacation', {
        templateUrl : 'assets/templates/vacation.html',
        controller  : 'vacationController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/vacation/approve', {
        templateUrl : 'assets/templates/vacation.html',
        controller  : 'vacationController',
        methodName  : 'approve',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/vacation/mine', {
        templateUrl : 'assets/templates/vacation.html',
        controller  : 'vacationController',
        methodName  : 'mine',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/mobileNotif', {
        templateUrl : 'assets/templates/mobileNotif.html',
        controller  : 'mobileNotifController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/dbexports', {
        templateUrl : 'assets/templates/dbexports.html',
        controller  : 'dbexportsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/frontend/pages', {
        templateUrl : 'assets/templates/frontend_pages.html',
        controller  : 'frontend_pagesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/payroll/salary_base', {
        templateUrl : 'assets/templates/payroll_salary.html',
        controller  : 'payroll_salaryController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/payroll/hourly_base', {
        templateUrl : 'assets/templates/payroll_hourly.html',
        controller  : 'payroll_hourlyController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/payroll/users_salary', {
        templateUrl : 'assets/templates/users_salary.html',
        controller  : 'users_salaryController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/payroll/dopayment', {
        templateUrl : 'assets/templates/payroll_make_pay.html',
        controller  : 'payroll_make_payController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/frontend/settings', {
        templateUrl : 'assets/templates/frontend_settings.html',
        controller  : 'frontend_settingsController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/roles', {
        templateUrl : 'assets/templates/roles.html',
        controller  : 'rolesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    
    .when('/wel_office_cat', {
        templateUrl : 'assets/templates/wel_office_cat.html',
        controller  : 'wel_office_cat',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })
    
    .when('/visitors', {
        templateUrl : 'assets/templates/visitors.html',
        controller  : 'visitors',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/visitors/:viewId', {
        templateUrl : 'assets/templates/visitors.html',
        controller  : 'visitors',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/phone_calls', {
        templateUrl : 'assets/templates/phone_calls.html',
        controller  : 'phone_calls',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/postal', {
        templateUrl : 'assets/templates/postal.html',
        controller  : 'postal',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })


    .when('/con_mess', {
        templateUrl : 'assets/templates/con_mess.html',
        controller  : 'con_mess',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/con_mess/:viewId', {
        templateUrl : 'assets/templates/con_mess.html',
        controller  : 'con_mess',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/departments', {
        templateUrl : 'assets/templates/departments.html',
        controller  : 'departments',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/designations', {
        templateUrl : 'assets/templates/designations.html',
        controller  : 'designations',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/enquiries', {
        templateUrl : 'assets/templates/enquiries.html',
        controller  : 'enquiries',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })


    .when('/enquiries/:viewId', {
        templateUrl : 'assets/templates/enquiries.html',
        controller  : 'enquiries',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/complaints', {
        templateUrl : 'assets/templates/complaints.html',
        controller  : 'complaints',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })


    .when('/complaints/:viewId', {
        templateUrl : 'assets/templates/complaints.html',
        controller  : 'complaints',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/inv_cat', {
        templateUrl : 'assets/templates/inv_cat.html',
        controller  : 'inv_cat',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/suppliers', {
        templateUrl : 'assets/templates/suppliers.html',
        controller  : 'suppliers',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/stores', {
        templateUrl : 'assets/templates/stores.html',
        controller  : 'stocksstores',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/items_code', {
        templateUrl : 'assets/templates/items_code.html',
        controller  : 'items_code',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/items_stock', {
        templateUrl : 'assets/templates/items_stock.html',
        controller  : 'items_stock',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .when('/inv_issue', {
        templateUrl : 'assets/templates/inv_issue.html',
        controller  : 'inv_issue',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })


    .when('/certificates', {
        templateUrl : 'assets/templates/certificates.html',
        controller  : 'certificatesController',
        resolve: {
            essentialData: function(srvLibrary) {
                return srvLibrary.getEssentials();
            }
        }
    })

    .otherwise({
        redirectTo:'/'
    });

});

OraSchool.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

OraSchool.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        angular.forEach(file, function(value, key) {
            fd.append(key, value);
        });
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);


OraSchool.factory('dataFactory', function($http) {
    var myService = {
        httpRequest: function(url,method,params,dataPost,upload) {
            var passParameters = {};
            passParameters.url = url;

            if (typeof method == 'undefined'){
                passParameters.method = 'GET';
            }else{
                passParameters.method = method;
            }

            if (typeof params != 'undefined'){
                passParameters.params = params;
            }

            if (typeof dataPost != 'undefined'){
                passParameters.data = dataPost;
            }
            
            if (typeof upload != 'undefined'){
                var fd = new FormData();

                angular.forEach(dataPost, function(value, key) {
                    if(typeof value == 'object' && upload.indexOf(key) == -1 ){
                        value = JSON.stringify(value);
                    }
                    fd.append(key, value);
                });

                passParameters.data = fd;

                passParameters.transformRequest = angular.identity;
                passParameters.headers = {'Content-Type': undefined};
            }        

            var promise = $http(passParameters).then(function (response) {
                if(typeof response.data == 'string' && response.data != 1){
                    if(response.data.substr('loginMark')){
                        location.reload();
                        return;
                    }
                    $.toast({
                        heading: 'خطاء',
                        text: response.data,
                        position: 'top-right',
                        loaderBg:'#ff6849',
                        icon: 'error',
                        hideAfter: 3000,
                        stack: 6
                    });
					 showHideLoad(true);
                    return false;
                }
                if(response.data.jsMessage){
                    $.toast({
                        heading: response.data.jsTitle,
                        text: response.data.jsMessage,
                        position: 'top-right',
                        loaderBg:'#ff6849',
                        icon: 'info',
                        hideAfter: 3000,
                        stack: 6
                    });
					
                }
                return response.data;
            },function(response){
                if(response.data.substr('loginMark')){
                    location.reload();
                    return;
                }
                $.toast({
                    heading: 'خطاء',
                    text: 'حدث خطاء للاسف.',
                    position: 'top-right',
                    loaderBg:'#ff6849',
                    icon: 'error',
                    hideAfter: 3000,
                    stack: 6
                });
				 showHideLoad(true);
            });
            return promise;
        }
    };
    return myService;
});

OraSchool.directive('carouselInit', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                $('.carousel').carousel()
            };
        }
    };
});

OraSchool.directive('mobileNumber', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs,ngModel) {
            var telInput = $(element);
            
            if( $("#countryVal").val() != undefined ){
                var countryVal = $("#countryVal").val();
            }else{
                var countryVal = $rootScope.dashboardData.country;
            }

            telInput.intlTelInput({utilsScript: jQuery('#utilsScript').val(),nationalMode: false,initialCountry:countryVal});

            scope.$watch(attrs.ngModel, function(value) {
                telInput.intlTelInput("setNumber",element.val());
            });

            scope.$watch(attrs.ngModel, function(value) {
                if(value == "" || typeof value === "undefined"){
                    ngModel.$setValidity(attrs.ngModel, true);
                    return;
                }
                if (telInput.intlTelInput("isValidNumber")) {
                    ngModel.$setValidity(attrs.ngModel, true);
                } else {
                    ngModel.$setValidity(attrs.ngModel, false);
                }
            });
        }
    };
});
OraSchool.directive('checklistModel', ['$parse', '$compile', function($parse, $compile) {
    // contains
    function contains(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    return true;
                }
            }
        }
        return false;
    }

    // add
    function add(arr, item, comparator) {
        arr = angular.isArray(arr) ? arr : [];
        if(!contains(arr, item, comparator)) {
            arr.push(item);
        }
        return arr;
    }

    // remove
    function remove(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        return arr;
    }

    // http://stackoverflow.com/a/19228302/1458162
    function postLinkFn(scope, elem, attrs) {
        // exclude recursion, but still keep the model
        var checklistModel = attrs.checklistModel;
        attrs.$set("checklistModel", null);
        // compile with `ng-model` pointing to `checked`
        $compile(elem)(scope);
        attrs.$set("checklistModel", checklistModel);

        // getter for original model
        var checklistModelGetter = $parse(checklistModel);
        var checklistChange = $parse(attrs.checklistChange);
        var checklistBeforeChange = $parse(attrs.checklistBeforeChange);
        var ngModelGetter = $parse(attrs.ngModel);



        var comparator = angular.equals;

        if (attrs.hasOwnProperty('checklistComparator')){
            if (attrs.checklistComparator[0] == '.') {
                var comparatorExpression = attrs.checklistComparator.substring(1);
                comparator = function (a, b) {
                    return a[comparatorExpression] === b[comparatorExpression];
                };

            } else {
                comparator = $parse(attrs.checklistComparator)(scope.$parent);
            }
        }

        // watch UI checked change
        var unbindModel = scope.$watch(attrs.ngModel, function(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                ngModelGetter.assign(scope, contains(checklistModelGetter(scope.$parent), getChecklistValue(), comparator));
                return;
            }

            setValueInChecklistModel(getChecklistValue(), newValue);

            if (checklistChange) {
                checklistChange(scope);
            }
        });

        // watches for value change of checklistValue
        var unbindCheckListValue = scope.$watch(getChecklistValue, function(newValue, oldValue) {
            if( newValue != oldValue && angular.isDefined(oldValue) && scope[attrs.ngModel] === true ) {
                var current = checklistModelGetter(scope.$parent);
                checklistModelGetter.assign(scope.$parent, remove(current, oldValue, comparator));
                checklistModelGetter.assign(scope.$parent, add(current, newValue, comparator));
            }
        }, true);

        var unbindDestroy = scope.$on('$destroy', destroy);

        function destroy() {
            unbindModel();
            unbindCheckListValue();
            unbindDestroy();
        }

        function getChecklistValue() {
            return attrs.checklistValue ? $parse(attrs.checklistValue)(scope.$parent) : attrs.value;
        }

        function setValueInChecklistModel(value, checked) {
            var current = checklistModelGetter(scope.$parent);
            if (angular.isFunction(checklistModelGetter.assign)) {
                if (checked === true) {
                    checklistModelGetter.assign(scope.$parent, add(current, value, comparator));
                } else {
                    checklistModelGetter.assign(scope.$parent, remove(current, value, comparator));
                }
            }

        }

        // declare one function to be used for both $watch functions
        function setChecked(newArr, oldArr) {
            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                setValueInChecklistModel(getChecklistValue(), ngModelGetter(scope));
                return;
            }
            ngModelGetter.assign(scope, contains(newArr, getChecklistValue(), comparator));
        }

        // watch original model change
        // use the faster $watchCollection method if it's available
        if (angular.isFunction(scope.$parent.$watchCollection)) {
            scope.$parent.$watchCollection(checklistModel, setChecked);
        } else {
            scope.$parent.$watch(checklistModel, setChecked, true);
        }
    }

    return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        scope: true,
        compile: function(tElement, tAttrs) {

            if (!tAttrs.checklistValue && !tAttrs.value) {
                throw 'You should provide `value` or `checklist-value`.';
            }

            // by default ngModel is 'checked', so we set it if not specified
            if (!tAttrs.ngModel) {
                // local scope var storing individual checkbox model
                tAttrs.$set("ngModel", "checked");
            }

            return postLinkFn;
        }
    };
}]);
OraSchool.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
OraSchool.directive('chatBox', function($parse, $timeout){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                $('#chat-box').slimScroll({
                    height: '500px',alwaysVisible: true,start : "bottom"
                });
            };
        }
    };
});
OraSchool.directive('scrollBox', function($parse, $timeout){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                $('#'+attrs.id).slimScroll({
                    height: attrs.height,alwaysVisible: true,start : "bottom"
                });
            };
        }
    };
});
OraSchool.directive('invoceDougnuts', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                var doughnutChart = echarts.init(document.getElementById('m-piechart'));
                // specify chart configuration item and data
                option = {
                    tooltip: {
                        trigger: 'item'
                        , formatter: "{a} <br/>{b} : {c} ({d}%)"
                    }
                    , legend: {
                        orient: 'horizontal'
                        , x: 'center'
                        , show: false
                        , y: 'bottom'
                        , data: ['80', '60', '20', '140']
                    }
                    , toolbox: {
                        show: false
                        , feature: {
                            dataView: {
                                show: true
                                , readOnly: false
                            }
                            , magicType: {
                                show: false
                                , type: ['pie', 'funnel']
                                , option: {
                                    funnel: {
                                        x: '25%'
                                        , width: '50%'
                                        , funnelAlign: 'center'
                                        , max: 1548
                                    }
                                }
                            }
                            , restore: {
                                show: true
                            }
                            , saveAsImage: {
                                show: true
                            }
                        }
                    }
                    , color: ["#745af2", "#f62d51"]
                    , calculable: true
                    , series: [
                        {
                            name: 'Invoices'
                            , type: 'pie'
                            , radius: ['70%', '90%']
                            , itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    }
                                    , labelLine: {
                                        show: false
                                    }
                                }
                                , emphasis: {
                                    label: {
                                        show: true
                                        , position: 'center'
                                        , textStyle: {
                                            fontSize: '30'
                                            , fontWeight: 'bold'
                                        }
                                    }
                                }
                            }
                            , data: [
                                {
                                    value: $rootScope.dashboardData.stats.invoices, name: 'التنسيقات'
                                }
                                , {
                                    value: $rootScope.dashboardData.stats.dueInvoices, name: 'التنسيقات'
                                }
                                ]
                            }
                        ]
                };
                // use configuration item and data specified to show chart
                doughnutChart.setOption(option, true), $(function () {
                    function resize() {
                        setTimeout(function () {
                            doughnutChart.resize()
                        }, 100)
                    }
                    $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
                });
            };
        }
    };
});
OraSchool.directive('colorbox', function() {
    return {
        restrict: 'AC',
        link: function (scope, element, attrs) {
            var itemsVars = {transition:'elastic',title:attrs.title,rel:'gallery',scalePhotos:true};
            if(attrs.youtube){
                itemsVars['iframe'] = true;
                itemsVars['innerWidth'] = 640;
                itemsVars['innerHeight'] = 390;
            }
            if(attrs.vimeo){
                itemsVars['iframe'] = true;
                itemsVars['innerWidth'] = 500;
                itemsVars['innerHeight'] = 409;
            }
            if(!attrs.youtube && !attrs.vimeo){
                itemsVars['height'] = "100%";
            }
            $(element).colorbox(itemsVars);
        }
    };
});

OraSchool.directive('ckEditor', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, element, attrs, ngModel) {

            if($rootScope.dashboardData.wysiwyg_type == "advanced"){
                var ckconfig = {};
                ckconfig.enterMode = CKEDITOR.ENTER_BR;
                ckconfig.shiftEnterMode = CKEDITOR.ENTER_P;
                ckconfig.extraPlugins = 'font,justify';

                var ck = CKEDITOR.replace(element[0],ckconfig);

                ck.on('pasteState', function () {
                    $scope.$apply(function () {
                        ngModel.$setViewValue(ck.getData());
                    });
                });

                ngModel.$render = function (value) {
                    ck.setData(ngModel.$modelValue);
                };
            }else{
                $(element).summernote({height: 300});

                $(element).on('summernote.change', function(we, contents, $editable) {
                    $scope.$apply(function () {
                        ngModel.$setViewValue(contents);
                    });
                });

                ngModel.$render = function (value) {
                    $(element).summernote('code', ngModel.$modelValue);
                };

            }

        }
    };
});

function populateEventsInFullCal(events,cal_name){
    $.each( events, function( key, value ) {
        if($("#"+value.id).length == 0){
            $(".jdd"+value.start).after( "<a href='" + value.url + "' class='fullCalEvent' style='color:" + value.textColor + " !important;background-color:" + value.backgroundColor + " !important' id='" + value.id + "'>" + value.title + "</a>" );
        }
    });
}

OraSchool.directive('smsCounter', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                $('#messageContentSms').countSms('#sms-counter');
            };
        }
    };
});
OraSchool.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
        '<div class="modal-dialog {{modalClass}}">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h4 class="modal-title">{{ modalTitle }}</h4>' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '</div>' +
        '<div class="modal-body" ng-transclude></div>' +
        '</div>' +
        '</div>' +
        '</div>',
        restrict: 'E',
        transclude: true,
        replace:true,
        scope:true,
        link: function postLink(scope, element, attrs) {
            scope.$watch(attrs.visible, function(value){
                if(value == true)
                $(element).modal('show');
                else
                $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});

OraSchool.directive('scalendarBox', function($parse, $timeout,$rootScope){
    return {
        restrict: 'A',
        replace: true,
        transclude: false,
        compile: function(element, attrs) {
            return function (scope, slider, attrs, controller) {
                $('#scalendar').fullCalendar({
                    events: "calender",
                    lang: $rootScope.dashboardData.languageUniversal
                });
            };
        }
    };
});
OraSchool.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                $(element).tooltip('show');
            }, function(){
                $(element).tooltip('hide');
            });
        }
    };
});

OraSchool.directive('showtab',function () {
    return {
        link: function (scope, element, attrs) {
            element.click(function(e) {
                e.preventDefault();
                $(element).tab('show');
            });
        }
    };
});

OraSchool.directive('tabheads',function () {
    return {
        link: function (scope, element, attrs) {
            $(element).children().first().addClass('active'); 
        }
    };
});

OraSchool.directive('tabcontent',function () {
    return {
        link: function (scope, element, attrs) {
            $(element).children().first().addClass('active'); 
        }
    };
});

OraSchool.directive('parseStyle', function($interpolate) {
    return function(scope, elem) {
        console.log(elem.html());
        var exp = $interpolate(elem.html()),
            watchFunc = function () { return exp(scope); };

        scope.$watch(watchFunc, function (html) {
            elem.html(html);
        });
    };
});

OraSchool.filter('object2Array', function() {
    return function(input) {
        var out = [];
        for(i in input){
            out.push(input[i]);
        }
        return out;
    }
});

function uploadSuccessOrError(response){
    if(typeof response == 'string' && response != 1){
        $.toast({
            heading: 'School Application',
            text: response,
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'error',
            hideAfter: 3000,
            stack: 6
        });
        return false;
    }
    if(response.jsMessage){
        $.toast({
            heading: response.jsTitle,
            text: response.jsMessage,
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'info',
            hideAfter: 3000,
            stack: 6
        });
    }
    if(response.jsStatus){
        if(response.jsStatus == "0"){
            return false;
        }
    }
    return response;
}

function successOrError(data){
    if(data.jsStatus){
        if(data.jsStatus == "0"){
            return false;
        }
    }
    return data;
}

//New Functions Implementation

function apiResponse(response,image){
    if(response.status){
        if(typeof response.title !== 'undefined'){
            if(response.status == "success"){
                $.toast({
                    heading: response.title,
                    text: response.message,
                    position: 'top-right',
                    loaderBg:'#ff6849',
                    icon: 'success',
                    hideAfter: 3000,
                    stack: 6
                });
            }
            if(response.status == "failed"){
                $.toast({
                    heading: response.title,
                    text: response.message,
                    position: 'top-right',
                    loaderBg:'#ff6849',
                    icon: 'error',
                    hideAfter: 3000,
                    stack: 6
                });
            }
        }
        if(response.data){
            return response.data;
        }
    }else{
        return response;
    }
}

function apiModifyTable(originalData,id,response){
    angular.forEach(originalData, function (item,key) {
        if(item.id == id){
            originalData[key] = response;
        }
    });
    return originalData;
}

function ResetRunGlobalFunctionEvent($scope) {
	if (!is_undefined(ResetInputFile) && is_function(ResetInputFile)) {
		if (!is_undefined($scope))
			ResetInputFile($scope);
		else
			ResetInputFile();
	}
}
function ResetInputFile($scope) {
	if ($("form input[type=file]").length == 0) {
		return null;
	}
	$("form input[type=file]").each(function (i) {
		$(this).val(null);
	});
}
function DataToObjectJson(data) {
	JsonData = JSON.stringify(data, null, 2);
	var json = JSON.parse(JsonData);
	if (!$.isEmptyObject(json)) {
		console.log('DataToObjectJson');
		console.log(json);
	}
	return json;
};
function SetSelect2ChildRefresh(element, scope) {
	if (is_undefined(scope.Select2ObjectHasChildRefresh))
		return null;
	var Refresh = [];
	if (TestKeyInArray(scope.Select2ObjectHasChildRefresh, element)) {
		console.log('SetSelect2ChildRefresh');
		Refresh = scope.Select2ObjectHasChildRefresh[element];
	}
	angular.forEach(Refresh, function (sObject, key) {
		if (!is_undefined(sObject.attr('multi-select2'))) {
			sObject.trigger("change");
		}
	});
}
function SetSelect2AllRefresh(scope) {
	if (is_undefined(scope.Select2Object))
		return null;
	if ($.isEmptyObject(scope.Select2Object))
		return null;
	var Refresh = scope.Select2Object;
	angular.forEach(Refresh, function (sObject, key) {
		if (!is_undefined(sObject.attr('multi-select2'))) {
			sObject.trigger("change");
		}
	});
}
OraSchool.directive('multiSelect2', function ($parse, $timeout, $rootScope) {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			var selectInput = $(element);
			if (attrs.multiple)
				_Get_Select2_Init_object(selectInput, true);
			else
				_Get_Select2_Init_object(selectInput, false);
			scope.$watch(attrs.ngModel, function (newValue, oldValue) {
				if (newValue === oldValue) {
					return;
				}
				$timeout(function () {
					if (attrs.multiple)
						_Get_Select2_Init_object(selectInput, true);
					else
						_Get_Select2_Init_object(selectInput, false);
				}, 0, false);
			});
		}
	};
});
function jsonBufferToObject(data, headersGetter, status) {
	var type = headersGetter("Content-Type");
	if (!type.startsWith("application/json")) {
		return data;
	};
	var decoder = new TextDecoder("utf-8");
	var domString = decoder.decode(data);
	var json = JSON.parse(domString);
	return json;
};
function CopyObject(FromObject) {
	if (!angular.isArray(FromObject) && !angular.isObject(FromObject))
		return FromObject;
	var ToObject = {};
	if (angular.isArray(FromObject))
		ToObject = [];
	else if (angular.isObject(FromObject))
		ToObject = {};
	angular.copy(FromObject, ToObject);
	return ToObject;
}
function GetObjectLength(Object) {
	var count = 0;
	if (!angular.isArray(Object) && !angular.isObject(Object))
		return count;
	for (var i in Object) {
		if (angular.isArray(Object[i])) {
			count++;
		} else
			count++;
	}
	return count;
}
function forEachObject(Object) {}
function RemoveFromeObject(Object, val) {
	if (!angular.isArray(Object) && !angular.isObject(Object))
		return Object;
	if (angular.isArray(Object)) {
		if (TestInArray(Object, val)) {
			Object.splice(Object.indexOf(val), 1);
		}
		return Object;
	}
	if (TestInArray(Object, val)) {
		Object.splice(Object.indexOf(val), 1);
	}
	return Object;
}
function Clear_Array(array) {
	return array.splice(0, array.length);
}
function TestInArray(Object, val) {
	if (!angular.isArray(Object) && !angular.isObject(Object))
		return false;
	if (angular.isArray(Object) && Object.indexOf(val) < 0)
		return false;
	else if (angular.isArray(Object))
		return true;
	if (angular.isObject(Object)) {
		var $Bool = false;
		if (!$.isEmptyObject(Object)) {
			angular.forEach(Object, function (item, key) {
				if (item == val)
					$Bool = true;
			});
			return $Bool;
		}
	}
	return false;
}
function TestKeyInArray(arrayData, keyData) {
	if (!is_undefined(arrayData)) {
		if (!$.isEmptyObject(arrayData)) {
			if (!is_undefined(arrayData[keyData]))
				return true;
		}
	}
	return false;
}
function uploadSuccessOrError(response) {
	if (typeof response == 'string' && response != 1) {
		$.gritter.add({
			title: 'School Application',
			text: response
		});
		return false;
	}
	if (response.jsStatus == "0") {
		showHideLoad(true);
	}
	if (response.jsMessage) {
		$.gritter.add({
			title: response.jsTitle,
			text: response.jsMessage
		});
	}
	if (response.jsStatus) {
		if (response.jsStatus == "0") {
			return false;
		}
	}
	return response;
}
function successOrError(data) {
	if (data.jsStatus) {
		if (data.jsStatus == "0") {
			return false;
		}
	}
	return data;
}
function SetCurrentPage($scope, Page) {
	if (is_undefined($scope))
		return;
	$scope.FSetCurrentPage = 1;
	if (!is_undefined($scope) && is_undefined($scope.currentPage)) {
		$scope.currentPage = 1;
	}
	if (is_undefined(Page) || !is_number(Page))
		return;
	$scope.currentPage = Page;
}
//New Functions Implementation
function is_undefined(a) {
	return (typeof a == 'undefined' || a === 'undefined')
	//return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined')
}
