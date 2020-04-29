OraSchool.config(function($routeProvider,$locationProvider){$routeProvider.when('/',{templateUrl:'assets/apptemplate/home.html?v=f'+veraizon,controller:'dashboardController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/setNumbers',{templateUrl:'assets/apptemplate/setnumbers.html?v=f'+veraizon,controller:'setNumbersController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/check',{templateUrl:'assets/apptemplate/check.html?v=f'+veraizon,controller:'checkController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/results',{templateUrl:'assets/apptemplate/results.html?v=f'+veraizon,controller:'resultsController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/news',{templateUrl:'assets/apptemplate/news.html?v=f'+veraizon,controller:'newsController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/news/:newsId',{templateUrl:'assets/apptemplate/news.html?v=f'+veraizon,controller:'newsController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/events/:eventId',{templateUrl:'assets/apptemplate/events.html?v=f'+veraizon,controller:'eventsController',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/enquiries',{templateUrl:'assets/apptemplate/enquiries.html?v=f'+veraizon,controller:'enquiries',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/enquiries/:viewId',{templateUrl:'assets/apptemplate/enquiries.html?v=f'+veraizon,controller:'enquiries',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/complaints',{templateUrl:'assets/apptemplate/complaints.html?v=f'+veraizon,controller:'complaints',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).when('/complaints/:viewId',{templateUrl:'assets/apptemplate/complaints.html?v=f'+veraizon,controller:'complaints',resolve:{essentialData:function(srvLibrary){return srvLibrary.getEssentials();}}}).otherwise({redirectTo:'/'});});OraSchool.factory('srvLibrary',['$http','$rootScope',function($http,$rootScope){var sdo={getEssentials:function(){if(typeof($rootScope.dashboardData)=="undefined"){var promise=$http({method:'GET',url:'index.php/siteboard'});promise.success(function(data,status,headers,conf){$rootScope.dashboardData=data;$rootScope.phrase=$rootScope.dashboardData.language;$rootScope.angDateFormat=$rootScope.dashboardData.dateformat;if($rootScope.angDateFormat==""){$rootScope.angDateFormat="MM/dd/yyyy";}else{$rootScope.angDateFormat=$rootScope.angDateFormat.replace('d','dd');$rootScope.angDateFormat=$rootScope.angDateFormat.replace('m','MM');$rootScope.angDateFormat=$rootScope.angDateFormat.replace('Y','yyyy');}
if($rootScope.dashboardData.gcalendar=="ethiopic"){$rootScope.dashboardData.gcalendar="ethiopian";}
return true;});return promise;}else{return true;}}}
return sdo;}]);OraSchool.directive('fileModel',['$parse',function($parse){return{restrict:'A',link:function(scope,element,attrs){var model=$parse(attrs.fileModel);var modelSetter=model.assign;element.bind('change',function(){scope.$apply(function(){modelSetter(scope,element[0].files[0]);});});}};}]);OraSchool.service('fileUpload',['$http',function($http){this.uploadFileToUrl=function(file,uploadUrl){var fd=new FormData();angular.forEach(file,function(value,key){fd.append(key,value);});$http.post(uploadUrl,fd,{transformRequest:angular.identity,headers:{'Content-Type':undefined}}).success(function(){}).error(function(){});}}]);OraSchool.directive('ckEditor',function($parse,$timeout,$rootScope){return{restrict:'A',require:'ngModel',link:function($scope,element,attrs,ngModel){if($rootScope.dashboardData.wysiwyg_type=="advanced"){var ckconfig={};ckconfig.enterMode=CKEDITOR.ENTER_BR;ckconfig.shiftEnterMode=CKEDITOR.ENTER_P;var ck=CKEDITOR.replace(element[0],ckconfig);ck.on('pasteState',function(){$scope.$apply(function(){ngModel.$setViewValue(ck.getData());});});ngModel.$render=function(value){ck.setData(ngModel.$modelValue);};}else{$(element).summernote({height:300});$(element).on('summernote.change',function(we,contents,$editable){$scope.$apply(function(){ngModel.$setViewValue(contents);});});ngModel.$render=function(value){$(element).summernote('code',ngModel.$modelValue);};}}};});OraSchool.factory('dataFactory',function($http){var myService={httpRequest:function(url,method,params,dataPost,upload){var passParameters={};passParameters.url=url;if(typeof method=='undefined'){passParameters.method='GET';}else{passParameters.method=method;}
if(typeof params!='undefined'){passParameters.params=params;}
if(typeof dataPost!='undefined'){passParameters.data=dataPost;}
if(typeof upload!='undefined'){var fd=new FormData();angular.forEach(dataPost,function(value,key){if(typeof value=='object'&&upload.indexOf(key)==-1){value=JSON.stringify(value);}
fd.append(key,value);});passParameters.data=fd;passParameters.transformRequest=angular.identity;passParameters.headers={'Content-Type':undefined};}
var promise=$http(passParameters).then(function(response){if(typeof response.data=='string'&&response.data!=1){if(response.data.substr('loginMark')){location.reload();return;}
$.toast({heading:'خطاء',text:response.data,position:'top-right',loaderBg:'#ff6849',icon:'error',hideAfter:3000,stack:6});showHideLoad(true);return false;}
if(response.data.jsMessage){$.toast({heading:response.data.jsTitle,text:response.data.jsMessage,position:'top-right',loaderBg:'#ff6849',icon:'info',hideAfter:3000,stack:6});}
return response.data;},function(response){if(response.data.substr('loginMark')){location.reload();return;}
$.toast({heading:'خطاء',text:'حدث خطاء للاسف.',position:'top-right',loaderBg:'#ff6849',icon:'error',hideAfter:3000,stack:6});showHideLoad(true);});return promise;}};return myService;});OraSchool.directive('carouselInit',function($parse,$timeout,$rootScope){return{restrict:'A',replace:true,transclude:false,compile:function(element,attrs){return function(scope,slider,attrs,controller){$('.carousel').carousel()};}};});OraSchool.directive('lazyBackground',['$document',function($document){return{restrict:'A',link:function(scope,iElement,iAttrs){var loader=angular.element('');if(angular.isDefined(iAttrs.lazyLoader)){loader=angular.element($document[0].querySelector(iAttrs.lazyLoader)).clone();}
iElement.append(loader);var src=iAttrs.lazyBackground+'?r='+Math.random();var img=document.createElement('img');img.onload=function(){loader.remove();if(angular.isDefined(iAttrs.lazyClass)){iElement.addClass(iAttrs.lazyClass);}
iElement.css({'background-image':'url('+this.src+')'});delete this;};img.onerror=function(){console.log('error');};img.src=src;}}}]);OraSchool.directive('checklistModel',['$parse','$compile',function($parse,$compile){function contains(arr,item,comparator){if(angular.isArray(arr)){for(var i=arr.length;i--;){if(comparator(arr[i],item)){return true;}}}
return false;}
function add(arr,item,comparator){arr=angular.isArray(arr)?arr:[];if(!contains(arr,item,comparator)){arr.push(item);}
return arr;}
function remove(arr,item,comparator){if(angular.isArray(arr)){for(var i=arr.length;i--;){if(comparator(arr[i],item)){arr.splice(i,1);break;}}}
return arr;}
function postLinkFn(scope,elem,attrs){var checklistModel=attrs.checklistModel;attrs.$set("checklistModel",null);$compile(elem)(scope);attrs.$set("checklistModel",checklistModel);var checklistModelGetter=$parse(checklistModel);var checklistChange=$parse(attrs.checklistChange);var checklistBeforeChange=$parse(attrs.checklistBeforeChange);var ngModelGetter=$parse(attrs.ngModel);var comparator=angular.equals;if(attrs.hasOwnProperty('checklistComparator')){if(attrs.checklistComparator[0]=='.'){var comparatorExpression=attrs.checklistComparator.substring(1);comparator=function(a,b){return a[comparatorExpression]===b[comparatorExpression];};}else{comparator=$parse(attrs.checklistComparator)(scope.$parent);}}
var unbindModel=scope.$watch(attrs.ngModel,function(newValue,oldValue){if(newValue===oldValue){return;}
if(checklistBeforeChange&&(checklistBeforeChange(scope)===false)){ngModelGetter.assign(scope,contains(checklistModelGetter(scope.$parent),getChecklistValue(),comparator));return;}
setValueInChecklistModel(getChecklistValue(),newValue);if(checklistChange){checklistChange(scope);}});var unbindCheckListValue=scope.$watch(getChecklistValue,function(newValue,oldValue){if(newValue!=oldValue&&angular.isDefined(oldValue)&&scope[attrs.ngModel]===true){var current=checklistModelGetter(scope.$parent);checklistModelGetter.assign(scope.$parent,remove(current,oldValue,comparator));checklistModelGetter.assign(scope.$parent,add(current,newValue,comparator));}},true);var unbindDestroy=scope.$on('$destroy',destroy);function destroy(){unbindModel();unbindCheckListValue();unbindDestroy();}
function getChecklistValue(){return attrs.checklistValue?$parse(attrs.checklistValue)(scope.$parent):attrs.value;}
function setValueInChecklistModel(value,checked){var current=checklistModelGetter(scope.$parent);if(angular.isFunction(checklistModelGetter.assign)){if(checked===true){checklistModelGetter.assign(scope.$parent,add(current,value,comparator));}else{checklistModelGetter.assign(scope.$parent,remove(current,value,comparator));}}}
function setChecked(newArr,oldArr){if(checklistBeforeChange&&(checklistBeforeChange(scope)===false)){setValueInChecklistModel(getChecklistValue(),ngModelGetter(scope));return;}
ngModelGetter.assign(scope,contains(newArr,getChecklistValue(),comparator));}
if(angular.isFunction(scope.$parent.$watchCollection)){scope.$parent.$watchCollection(checklistModel,setChecked);}else{scope.$parent.$watch(checklistModel,setChecked,true);}}
return{restrict:'A',priority:1000,terminal:true,scope:true,compile:function(tElement,tAttrs){if(!tAttrs.checklistValue&&!tAttrs.value){throw'You should provide `value` or `checklist-value`.';}
if(!tAttrs.ngModel){tAttrs.$set("ngModel","checked");}
return postLinkFn;}};}]);OraSchool.directive('ngEnter',function(){return function(scope,element,attrs){element.bind("keydown keypress",function(event){if(event.which===13){scope.$apply(function(){scope.$eval(attrs.ngEnter);});event.preventDefault();}});};});OraSchool.directive('chatBox',function($parse,$timeout){return{restrict:'A',replace:true,transclude:false,compile:function(element,attrs){return function(scope,slider,attrs,controller){$('#chat-box').slimScroll({height:'500px',alwaysVisible:true,start:"bottom"});};}};});OraSchool.directive('scrollBox',function($parse,$timeout){return{restrict:'A',replace:true,transclude:false,compile:function(element,attrs){return function(scope,slider,attrs,controller){$('#'+attrs.id).slimScroll({height:attrs.height,alwaysVisible:true,start:"bottom"});};}};});OraSchool.directive('colorbox',function(){return{restrict:'AC',link:function(scope,element,attrs){var itemsVars={transition:'elastic',title:attrs.title,rel:'gallery',scalePhotos:true};if(attrs.youtube){itemsVars['iframe']=true;itemsVars['innerWidth']=640;itemsVars['innerHeight']=390;}
if(attrs.vimeo){itemsVars['iframe']=true;itemsVars['innerWidth']=500;itemsVars['innerHeight']=409;}
if(!attrs.youtube&&!attrs.vimeo){itemsVars['height']="100%";}
$(element).colorbox(itemsVars);}};});function populateEventsInFullCal(events,cal_name){$.each(events,function(key,value){if($("#"+value.id).length==0){$(".jdd"+value.start).after("<a href='"+value.url+"' class='fullCalEvent' style='color:"+value.textColor+" !important;background-color:"+value.backgroundColor+" !important' id='"+value.id+"'>"+value.title+"</a>");}});}
OraSchool.directive('modal',function(){return{template:'<div class="modal fade">'+'<div class="modal-dialog {{modalClass}}">'+'<div class="modal-content">'+'<div class="modal-header">'+'<h4 class="modal-title">{{ modalTitle }}</h4>'+'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+'</div>'+'<div class="modal-body" ng-transclude></div>'+'</div>'+'</div>'+'</div>',restrict:'E',transclude:true,replace:true,scope:true,link:function postLink(scope,element,attrs){scope.$watch(attrs.visible,function(value){if(value==true)
$(element).modal('show');else
$(element).modal('hide');});$(element).on('shown.bs.modal',function(){scope.$apply(function(){scope.$parent[attrs.visible]=true;});});$(element).on('hidden.bs.modal',function(){scope.$apply(function(){scope.$parent[attrs.visible]=false;});});}};});OraSchool.directive('scalendarBox',function($parse,$timeout,$rootScope){return{restrict:'A',replace:true,transclude:false,compile:function(element,attrs){return function(scope,slider,attrs,controller){$('#scalendar').fullCalendar({events:"calender",lang:$rootScope.dashboardData.languageUniversal});};}};});OraSchool.directive('tooltip',function(){return{restrict:'A',link:function(scope,element,attrs){$(element).hover(function(){$(element).tooltip('show');},function(){$(element).tooltip('hide');});}};});OraSchool.directive('showtab',function(){return{link:function(scope,element,attrs){element.click(function(e){e.preventDefault();$(element).tab('show');});}};});OraSchool.directive('tabheads',function(){return{link:function(scope,element,attrs){$(element).children().first().addClass('active');}};});OraSchool.directive('tabcontent',function(){return{link:function(scope,element,attrs){$(element).children().first().addClass('active');}};});OraSchool.directive('parseStyle',function($interpolate){return function(scope,elem){console.log(elem.html());var exp=$interpolate(elem.html()),watchFunc=function(){return exp(scope);};scope.$watch(watchFunc,function(html){elem.html(html);});};});OraSchool.filter('object2Array',function(){return function(input){var out=[];for(i in input){out.push(input[i]);}
return out;}});function uploadSuccessOrError(response){if(typeof response=='string'&&response!=1){$.toast({heading:'School Application',text:response,position:'top-right',loaderBg:'#ff6849',icon:'error',hideAfter:3000,stack:6});return false;}
if(response.jsMessage){$.toast({heading:response.jsTitle,text:response.jsMessage,position:'top-right',loaderBg:'#ff6849',icon:'info',hideAfter:3000,stack:6});}
if(response.jsStatus){if(response.jsStatus=="0"){return false;}}
return response;}
function successOrError(data){if(data.jsStatus){if(data.jsStatus=="0"){return false;}}
return data;}
function apiResponse(response, image) {
	if (response.status) {
		if (typeof response.title !== 'undefined') {
			if (response.status == "success") {
				$.toast({
					heading: response.title,
					text: response.message,
					position: 'top-right',
					loaderBg: '#ff6849',
					icon: 'success',
					hideAfter: 3000,
					stack: 6
				});
			}
if(response.status=="failed"){$.toast({heading:response.title,text:response.message,position:'top-right',loaderBg:'#ff6849',icon:'error',hideAfter:3000,stack:6});}}
if(response.data){return response.data;}}else{return response;}}
function apiModifyTable(originalData,id,response){angular.forEach(originalData,function(item,key){if(item.id==id){originalData[key]=response;}});return originalData;}
function ResetRunGlobalFunctionEvent($scope){if(!is_undefined(ResetInputFile)&&is_function(ResetInputFile)){if(!is_undefined($scope))
ResetInputFile($scope);else
ResetInputFile();}}
function ResetInputFile($scope){if($("form input[type=file]").length==0){return null;}
$("form input[type=file]").each(function(i){$(this).val(null);});}
function DataToObjectJson(data){JsonData=JSON.stringify(data,null,2);var json=JSON.parse(JsonData);if(!$.isEmptyObject(json)){console.log('DataToObjectJson');console.log(json);}
return json;};function SetSelect2ChildRefresh(element,scope){if(is_undefined(scope.Select2ObjectHasChildRefresh))
return null;var Refresh=[];if(TestKeyInArray(scope.Select2ObjectHasChildRefresh,element)){console.log('SetSelect2ChildRefresh');Refresh=scope.Select2ObjectHasChildRefresh[element];}
angular.forEach(Refresh,function(sObject,key){if(!is_undefined(sObject.attr('multi-select2'))){sObject.trigger("change");}});}
function SetSelect2AllRefresh(scope){if(is_undefined(scope.Select2Object))
return null;if($.isEmptyObject(scope.Select2Object))
return null;var Refresh=scope.Select2Object;angular.forEach(Refresh,function(sObject,key){if(!is_undefined(sObject.attr('multi-select2'))){sObject.trigger("change");}});}
OraSchool.directive('multiSelect2',function($parse,$timeout,$rootScope){return{restrict:'A',require:'ngModel',link:function(scope,element,attrs,ngModel){var selectInput=$(element);if(attrs.multiple)
_Get_Select2_Init_object(selectInput,true);else
_Get_Select2_Init_object(selectInput,false);scope.$watch(attrs.ngModel,function(newValue,oldValue){if(newValue===oldValue){return;}
$timeout(function(){if(attrs.multiple)
_Get_Select2_Init_object(selectInput,true);else
_Get_Select2_Init_object(selectInput,false);},0,false);});}};});function jsonBufferToObject(data,headersGetter,status){var type=headersGetter("Content-Type");if(!type.startsWith("application/json")){return data;};var decoder=new TextDecoder("utf-8");var domString=decoder.decode(data);var json=JSON.parse(domString);return json;};function CopyObject(FromObject){if(!angular.isArray(FromObject)&&!angular.isObject(FromObject))
return FromObject;var ToObject={};if(angular.isArray(FromObject))
ToObject=[];else if(angular.isObject(FromObject))
ToObject={};angular.copy(FromObject,ToObject);return ToObject;}
function GetObjectLength(Object){var count=0;if(!angular.isArray(Object)&&!angular.isObject(Object))
return count;for(var i in Object){if(angular.isArray(Object[i])){count++;}else
count++;}
return count;}
function forEachObject(Object){}
function RemoveFromeObject(Object,val){if(!angular.isArray(Object)&&!angular.isObject(Object))
return Object;if(angular.isArray(Object)){if(TestInArray(Object,val)){Object.splice(Object.indexOf(val),1);}
return Object;}
if(TestInArray(Object,val)){Object.splice(Object.indexOf(val),1);}
return Object;}
function Clear_Array(array){return array.splice(0,array.length);}
function TestInArray(Object,val){if(!angular.isArray(Object)&&!angular.isObject(Object))
return false;if(angular.isArray(Object)&&Object.indexOf(val)<0)
return false;else if(angular.isArray(Object))
return true;if(angular.isObject(Object)){var $Bool=false;if(!$.isEmptyObject(Object)){angular.forEach(Object,function(item,key){if(item==val)
$Bool=true;});return $Bool;}}
return false;}
function TestKeyInArray(arrayData,keyData){if(!is_undefined(arrayData)){if(!$.isEmptyObject(arrayData)){if(!is_undefined(arrayData[keyData]))
return true;}}
return false;}
function uploadSuccessOrError(response){if(typeof response=='string'&&response!=1){$.gritter.add({title:'School Application',text:response});return false;}
if(response.jsStatus=="0"){showHideLoad(true);}
if(response.jsMessage){$.gritter.add({title:response.jsTitle,text:response.jsMessage});}
if(response.jsStatus){if(response.jsStatus=="0"){return false;}}
return response;}
function successOrError(data){if(data.jsStatus){if(data.jsStatus=="0"){return false;}}
return data;}
function SetCurrentPage($scope,Page){if(is_undefined($scope))
return;$scope.FSetCurrentPage=1;if(!is_undefined($scope)&&is_undefined($scope.currentPage)){$scope.currentPage=1;}
if(is_undefined(Page)||!is_number(Page))
return;$scope.currentPage=Page;}
function is_undefined(a){return(typeof a=='undefined'||a==='undefined')}