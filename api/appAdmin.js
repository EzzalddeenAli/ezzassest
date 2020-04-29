OraSchool.factory('srvLibrary',['$http','$rootScope',function($http,$rootScope){var sdo={getEssentials:function(){if(typeof($rootScope.dashboardData)=="undefined"){var promise=$http({method:'GET',url:'index.php/dashboard'});promise.success(function(data,status,headers,conf){$rootScope.dashboardData=data;$rootScope.phrase=$rootScope.dashboardData.language;$rootScope.angDateFormat=$rootScope.dashboardData.dateformat;if($rootScope.angDateFormat==""){$rootScope.angDateFormat="MM/dd/yyyy";}else{$rootScope.angDateFormat=$rootScope.angDateFormat.replace('d','dd');$rootScope.angDateFormat=$rootScope.angDateFormat.replace('m','MM');$rootScope.angDateFormat=$rootScope.angDateFormat.replace('Y','yyyy');}
if($rootScope.dashboardData.gcalendar=="ethiopic"){$rootScope.dashboardData.gcalendar="ethiopian";}
return true;});return promise;}else{return true;}}}
return sdo;}]);OraSchool.controller('calenderController',function(dataFactory,$scope){showHideLoad(true);});OraSchool.controller('registeration',function(dataFactory,$rootScope,$scope){$scope.views={};$scope.classes={};$scope.views.register=true;$scope.form={};$scope.form.studentInfo=[];$scope.form.role="teacher";dataFactory.httpRequest('index.php/register/classes').then(function(data){$scope.classes=data;showHideLoad(true);});$scope.subjectList=function(){dataFactory.httpRequest('index.php/register/sectionsList','POST',{},{"classes":$scope.form.studentClass}).then(function(data){$scope.sections=data;});}
$scope.tryRegister=function(){showHideLoad();dataFactory.httpRequest('index.php/register','POST',{},$scope.form).then(function(data){data=successOrError(data);if(data){$scope.regId=data.id;$scope.changeView("thanks");}
showHideLoad(true);});}
$scope.linkStudent=function(){$scope.modalTitle="Link Student";$scope.showModalLink=!$scope.showModalLink;}
$scope.linkStudentButton=function(){var searchAbout=$('#searchLink').val();if(searchAbout.length<3){alert("Min Characters is 3");return;}
dataFactory.httpRequest('index.php/register/searchStudents/'+searchAbout).then(function(data){$scope.searchResults=data;});}
$scope.linkStudentFinish=function(student){if(typeof($scope.form.studentInfo)=="undefined"){$scope.form.studentInfo=[];}
do{var relationShip=prompt("Please enter relationship","");}while(relationShip=="");if(relationShip!=null&&relationShip!=""){$scope.form.studentInfo.push({"student":student.name,"relation":relationShip,"id":""+student.id+""});$scope.showModalLink=!$scope.showModalLink;}}
$scope.removeStudent=function(index){var confirmRemove=confirm("Sure remove ?");if(confirmRemove==true){for(x in $scope.form.studentInfo){if($scope.form.studentInfo[x].id==index){$scope.form.studentInfo.splice(x,1);$scope.form.studentInfoSer=JSON.stringify($scope.form.studentInfo);break;}}}}
$scope.changeView=function(view){if(view=="register"||view=="thanks"||view=="show"){$scope.form={};}
$scope.views.register=false;$scope.views.thanks=false;$scope.views[view]=true;}});OraSchool.controller('classesController',function(dataFactory,$rootScope,$scope){});OraSchool.controller('subjectsController',function(dataFactory,$rootScope,$scope){});OraSchool.controller('studentsController',function(dataFactory,$rootScope,$scope,$sce,$route,$location){});OraSchool.controller('student_categories',function(dataFactory,$sce,$rootScope,$scope,$routeParams){});OraSchool.controller('parentsController',function(dataFactory,$scope,$sce,$rootScope){});OraSchool.controller('newsboardController',function(dataFactory,$routeParams,$sce,$rootScope,$scope){});OraSchool.controller('libraryController',function(dataFactory,$rootScope,$scope,$route){});OraSchool.controller('library_issues',function(dataFactory,$sce,$rootScope,$scope,$routeParams,$route){});OraSchool.controller('accountSettingsController',function(dataFactory,$rootScope,$scope,$route){$scope.account={};$scope.views={};$scope.views.list=true;$scope.form={};$scope.languages={};$scope.languageAllow;var methodName=$route.current.methodName;$scope.changeView=function(view){if(view=="list"||view=="show"){$scope.form={};}
$scope.views.profile=false;$scope.views.email=false;$scope.views.password=false;$scope.views.invoices=false;$scope.views.invoiceDetails=false;$scope.views[view]=true;}
if(methodName=="profile"){dataFactory.httpRequest('index.php/accountSettings/langs').then(function(data){$scope.languages=data.languages;$scope.languageAllow=data.languageAllow;$scope.layoutColorUserChange=data.layoutColorUserChange;showHideLoad(true);});dataFactory.httpRequest('index.php/accountSettings/data').then(function(data){$scope.form=data;$scope.oldThemeVal=data.defTheme;$scope.defLang=data.defLang;$scope.changeView('profile');showHideLoad(true);});}else if(methodName=="email"){$scope.form={};$scope.changeView('email');showHideLoad(true);}else if(methodName=="password"){$scope.form={};$scope.changeView('password');showHideLoad(true);}else if(methodName=="invoices"){dataFactory.httpRequest('index.php/accountSettings/invoices').then(function(data){$scope.invoices=data.invoices;$scope.changeView('invoices');showHideLoad(true);});}
$scope.seeInvoice=function(id){showHideLoad();dataFactory.httpRequest('index.php/accountSettings/invoices/'+id).then(function(data){$scope.invoice=data;$scope.changeView('invoiceDetails');showHideLoad(true);});}
$scope.payOnline=function(id){showHideLoad();dataFactory.httpRequest('index.php/invoices/invoice/'+id).then(function(data){$scope.invoice=data;$scope.modalTitle="Pay Invoice Online";$scope.payOnlineModal=!$scope.payOnlineModal;showHideLoad(true);});}
$scope.payOnlineNow=function(id){$scope.form.invoice=id;}
$scope.saveEmail=function(){if($scope.form.email!=$scope.form.reemail){alert($rootScope.phrase.mailReMailDontMatch);}else{showHideLoad();dataFactory.httpRequest('index.php/accountSettings/email','POST',{},$scope.form).then(function(data){response=apiResponse(data,'edit');showHideLoad(true);});}}
$scope.savePassword=function(){if($scope.form.newPassword!=$scope.form.repassword){alert($rootScope.phrase.passRepassDontMatch);}else{showHideLoad();dataFactory.httpRequest('index.php/accountSettings/password','POST',{},$scope.form).then(function(data){response=apiResponse(data,'edit');showHideLoad(true);});}}
$scope.saveProfile=function(data){response=apiResponse(data,'edit');if(response){if($scope.form.defTheme!=$scope.oldThemeVal){location.reload();}
if($scope.form.defLang!=$scope.defLang){location.reload();}
$scope.form=response;}
showHideLoad(true);}});OraSchool.controller('settingsController',function(dataFactory,$rootScope,$scope,$route){$scope.views={};$scope.form={};$scope.languages={};$scope.newDayOff;var methodName=$route.current.methodName;$scope.oldThemeVal;$scope.changeView=function(view){$scope.views.settings=false;$scope.views.terms=false;$scope.views[view]=true;}
if(methodName=="settings"){dataFactory.httpRequest('index.php/siteSettings/langs').then(function(data){$scope.languages=data.languages;showHideLoad(true);});dataFactory.httpRequest('index.php/siteSettings/siteSettings').then(function(data){$scope.form=data.settings;$scope.timezone_list=data.timezone_list;$scope.formS=data.smsProvider;$scope.formM=data.mailProvider;$scope.oldThemeVal=$scope.form.layoutColor;$scope.globalcalendars=data.globalcalendars;$scope.biometric_device_status=data.biometric_device_status;showHideLoad(true);});$scope.changeView('settings');}else if(methodName=="terms"){dataFactory.httpRequest('index.php/siteSettings/terms').then(function(data){$scope.form=data;showHideLoad(true);});$scope.changeView('terms');}
$scope.isDaySelected=function(arrayData,valueData){return arrayData.indexOf(valueData)>-1;}
$scope.officialVacationDayAdd=function(){if($scope.newDayOff==''||typeof $scope.newDayOff==="undefined"){return;}
$scope.form.officialVacationDay.push($scope.newDayOff);}
$scope.removeVacationDay=function(item,index){var confirmRemove=confirm($rootScope.phrase.sureRemove);if(confirmRemove==true){$scope.form.officialVacationDay.splice(index,1);}}
$scope.moduleActivated=function(module){return $.inArray(module,$scope.form.activatedModules)>-1;}
$scope.saveEdit=function(){showHideLoad();$scope.form.smsProvider=$scope.formS;$scope.form.mailProvider=$scope.formM;dataFactory.httpRequest('index.php/siteSettings/siteSettings','POST',{},$scope.form).then(function(data){response=apiResponse(data,'edit');location.reload();showHideLoad(true);});}
$scope.saveTerms=function(){showHideLoad();dataFactory.httpRequest('index.php/siteSettings/terms','POST',{},$scope.form).then(function(data){response=apiResponse(data,'edit');showHideLoad(true);});}
$scope.test_mail_function=function(){$scope.modalTitle="Test Mail Function";$scope.test_mail_function_modal=!$scope.test_mail_function_modal;$scope.testmailform={};}
$scope.test_mail_function_action=function(){showHideLoad();dataFactory.httpRequest('index.php/siteSettings/test_mail_function','POST',{},$scope.testmailform).then(function(server_response){alert("Server Response : "+server_response.message);$scope.test_mail_function_modal=!$scope.test_mail_function_modal;showHideLoad(true);});}
$scope.test_sms_function=function(){$scope.modalTitle="Test SMS Function";$scope.test_sms_function_modal=!$scope.test_sms_function_modal;$scope.testsmsform={};}
$scope.test_sms_function_action=function(){showHideLoad();dataFactory.httpRequest('index.php/siteSettings/test_sms_function','POST',{},$scope.testsmsform).then(function(server_response){alert("Server Response : "+server_response.message);$scope.test_sms_function_modal=!$scope.test_sms_function_modal;showHideLoad(true);});}});OraSchool.controller('messagesController',function(dataFactory,$rootScope,$route,$scope,$location,$routeParams){$scope.messages={};$scope.message={};$scope.messageDet={};$scope.totalItems=0;$scope.views={};$scope.views.list=true;$scope.selectedAll=false;$scope.searchUsers=false;$scope.repeatCheck=true;$scope.form={};$scope.messageBefore;$scope.messageAfter;$scope.searchResults={};var routeData=$route.current;var currentMessageRefreshId;var messageId;$scope.totalItems=0;$scope.pageChanged=function(newPage){getResultsPage(newPage);};$scope.showMessage=function(id){$scope.repeatCheck=true;showHideLoad();dataFactory.httpRequest('index.php/messages/'+id).then(function(data){data=successOrError(data);if(data){messageId=id;$scope.changeView('read');$scope.message=data.messages.reverse();$scope.messageDet=data.messageDet;if($scope.message[0]){$scope.messageBefore=$scope.message[0].dateSent;}
if($scope.message[$scope.message.length-1]){$scope.messageAfter=$scope.message[$scope.message.length-1].dateSent;}
currentMessageRefreshId=setInterval(currentMessagePull,2000);$("#chat-box").slimScroll({scrollTo:$("#chat-box").prop('scrollHeight')+'px'});}
showHideLoad(true);});}
getResultsPage(1);if($routeParams.messageId){$scope.showMessage($routeParams.messageId);}
function getResultsPage(pageNumber){dataFactory.httpRequest('index.php/messages/listAll/'+pageNumber).then(function(data){$scope.messages=data.messages;$scope.totalItems=data.totalItems;showHideLoad(true);});}
$scope.linkUser=function(){$scope.modalTitle=$rootScope.phrase.searchUsers;$scope.searchUsers=!$scope.searchUsers;}
$scope.searchUserButton=function(){var searchAbout=$('#searchKeyword').val();if(searchAbout.length<3){alert($rootScope.phrase.minCharLength3);return;}
dataFactory.httpRequest('index.php/messages/searchUser/'+searchAbout).then(function(data){$scope.searchResults=data;});}
$scope.linkStudentFinish=function(student){if(typeof $scope.form.toId=="undefined"){$scope.form.toId=[];}
$scope.form.toId.push(student);$scope.searchUsers=!$scope.searchUsers;}
$scope.checkAll=function(){$scope.selectedAll=!$scope.selectedAll;angular.forEach($scope.messages,function(item){item.selected=$scope.selectedAll;});}
$scope.loadOld=function(){dataFactory.httpRequest('index.php/messages/before/'+$scope.messageDet.fromId+'/'+$scope.messageDet.toId+'/'+$scope.messageBefore).then(function(data){angular.forEach(data,function(item){$scope.message.splice(0,0,item);});if(data.length==0){$('#loadOld').hide();}
$scope.messageBefore=$scope.message[0].dateSent;});}
$scope.markRead=function(){$scope.form.items=[];angular.forEach($scope.messages,function(item,key){if($scope.messages[key].selected){$scope.form.items.push(item.id);$scope.messages[key].messageStatus=0;}});dataFactory.httpRequest('index.php/messages/read',"POST",{},$scope.form).then(function(data){response=apiResponse(data,'edit');});}
$scope.markUnRead=function(){$scope.form.items=[];angular.forEach($scope.messages,function(item,key){if($scope.messages[key].selected){$scope.form.items.push(item.id);$scope.messages[key].messageStatus=1;}});dataFactory.httpRequest('index.php/messages/unread',"POST",{},$scope.form).then(function(data){response=apiResponse(data,'edit');});}
$scope.markDelete=function(){$scope.form.items=[];var len=$scope.messages.length
while(len--){if($scope.messages[len].selected){$scope.form.items.push($scope.messages[len].id);$scope.messages.splice(len,1);}}
dataFactory.httpRequest('index.php/messages/delete',"POST",{},$scope.form).then(function(data){response=apiResponse(data,'remove');});}
var currentMessagePull=function(){if('#/messages/'+messageId==location.hash){dataFactory.httpRequest('index.php/messages/ajax/'+$scope.messageDet.fromId+'/'+$scope.messageDet.toId+'/'+$scope.messageAfter).then(function(data){angular.forEach(data,function(item){$scope.message.push(item);var newH=parseInt($("#chat-box").prop('scrollHeight'))+100;$("#chat-box").slimScroll({scrollTo:newH+'px'});});if($scope.message[$scope.message.length-1]){$scope.messageAfter=$scope.message[$scope.message.length-1].dateSent;}});}else{clearInterval(currentMessageRefreshId);}};$scope.replyMessage=function(){if($scope.form.reply!=""&&typeof $scope.form.reply!="undefined"){$scope.form.disable=true;$scope.form.toId=$scope.messageDet.toId;dataFactory.httpRequest('index.php/messages/'+$scope.messageDet.id,'POST',{},$scope.form).then(function(data){$("#chat-box").slimScroll({scrollTo:$("#chat-box").prop('scrollHeight')+'px'});$scope.form={};});}}
$scope.sendMessageNow=function(){dataFactory.httpRequest('index.php/messages','POST',{},$scope.form).then(function(data){if(data.messageId=="home"){getResultsPage(1);$scope.changeView('list');}else{$location.path('/messages/'+data.messageId);}});}
$scope.changeView=function(view){if(view=="read"||view=="list"||view=="create"){$scope.form={};}
if(view=="list"||view=="create"){clearInterval(currentMessageRefreshId);}
$scope.views.list=false;$scope.views.read=false;$scope.views.create=false;$scope.views[view]=true;}});OraSchool.controller('pollsController',function(dataFactory,$scope,$rootScope){$scope.polls={};$scope.views={};$scope.views.list=true;$scope.form={};dataFactory.httpRequest('index.php/polls/listAll').then(function(data){$scope.polls=data;showHideLoad(true);});$scope.remove=function(item,index){var confirmRemove=confirm($rootScope.phrase.sureRemove);if(confirmRemove==true){showHideLoad();dataFactory.httpRequest('index.php/polls/delete/'+item.id,'POST').then(function(data){response=apiResponse(data,'remove');if(data.status=="success"){$scope.polls.splice(index,1);}
showHideLoad(true);});}}
$scope.addPollOption=function(item){var optionTitle=prompt($rootScope.phrase.voteOptionTitle);if(optionTitle!=null){if(typeof $scope.form.pollOptions==="undefined"||$scope.form.pollOptions==""){$scope.form.pollOptions=[];}
var newOption={'title':optionTitle};$scope.form.pollOptions.push(newOption);}}
$scope.removePollOption=function(item,index){$scope.form.pollOptions.splice(index,1);}
$scope.edit=function(id){showHideLoad();dataFactory.httpRequest('index.php/polls/'+id).then(function(data){$scope.changeView('edit');$scope.form=data;showHideLoad(true);});}
$scope.saveEdit=function(){showHideLoad();dataFactory.httpRequest('index.php/polls/'+$scope.form.id,'POST',{},$scope.form).then(function(data){response=apiResponse(data,'edit');if(data.status=="success"){$scope.polls=apiModifyTable($scope.polls,response.id,response);$scope.changeView('list');}
showHideLoad(true);});}
$scope.saveAdd=function(){showHideLoad();dataFactory.httpRequest('index.php/polls','POST',{},$scope.form).then(function(data){response=apiResponse(data,'add');if(data.status=="success"){$scope.polls.push(response);$scope.changeView('list');}
showHideLoad(true);});}
$scope.makeActive=function(id){showHideLoad();dataFactory.httpRequest('index.php/polls/active/'+id,'POST',{}).then(function(data){response=apiResponse(data,'edit');if(data.status=="success"){angular.forEach($scope.polls,function(item){item.pollStatus=0;if(item.id==response.id){item.pollStatus=1;}});}
showHideLoad(true);});}
$scope.changeView=function(view){if(view=="add"||view=="list"||view=="show"){$scope.form={};}
$scope.views.list=false;$scope.views.add=false;$scope.views.edit=false;$scope.views[view]=true;}});OraSchool.controller('feeGroupController',function(dataFactory,$rootScope,$scope){$scope.feeGroups={};$scope.views={};$scope.views.list=true;$scope.form={};$scope.listAll=function(){dataFactory.httpRequest('index.php/feeGroups/listAll').then(function(data){$scope.feeGroups=data;showHideLoad(true);});}
$scope.listAll();$scope.activeKey=function(item){var confirmRemove=confirm('الموافقة');if(confirmRemove==true){showHideLoad();dataFactory.httpRequest('index.php/schoolActive/'+item.user+'/'+item.id,'POST').then(function(data){response=apiResponse(data,'edit');if(data.status=="success"){$scope.listAll();}
showHideLoad(true);});}}
$scope.changeView=function(view){if(view=="add"||view=="list"||view=="show"){$scope.form={};}
$scope.views.list=false;$scope.views.add=false;$scope.views.edit=false;$scope.views[view]=true;}});OraSchool.controller('dbexportsController',function(dataFactory,$rootScope,$scope){$scope.classes={};$scope.views={};$scope.messages={};$scope.views.list=true;$scope.form={};$scope.form.selectedUsers=[];$scope.formS={};$scope.sendNewScope="form";showHideLoad(true);$scope.loadNotifications=function(page){dataFactory.httpRequest('index.php/mobileNotif/listAll/'+page).then(function(data){$scope.subject_list=data.subject_list;$scope.messages=data.items;$scope.totalItems=data.totalItems;showHideLoad(true);});}
$scope.changeView=function(view){if(view=="send"){$scope.form={};}
$scope.views.send=false;$scope.views.list=false;$scope.views.settings=false;$scope.views[view]=true;}});OraSchool.controller('rolesController',function(dataFactory,$sce,$rootScope,$scope){$scope.roles={};$scope.roles_perms={};$scope.views={};$scope.views.list=true;$scope.pageNumber=1;$scope.form={};$scope.load_data=function(){dataFactory.httpRequest('index.php/roles/listAll').then(function(data){$scope.roles=data.roles;$scope.districtZone=data.districtZone;$scope.roles_perms=data.roles_perms;showHideLoad(true);});}
$scope.load_data();$scope.saveAdd=function(data){showHideLoad();dataFactory.httpRequest('index.php/roles','POST',{},$scope.form).then(function(data){response=apiResponse(data,'add');if(data.status=="success"){$scope.load_data();$scope.changeView('list');}
showHideLoad(true);});}
$scope.remove=function(item,index){var confirmRemove=confirm($rootScope.phrase.sureRemove);if(confirmRemove==true){showHideLoad();dataFactory.httpRequest('index.php/roles/delete/'+item.id,'POST').then(function(data){response=apiResponse(data,'remove');if(data.status=="success"){$scope.roles.splice(index,1);}
showHideLoad(true);});}}
$scope.edit=function(id){showHideLoad();dataFactory.httpRequest('index.php/roles/'+id).then(function(data){$scope.changeView('edit');$scope.form=data;showHideLoad(true);});}
$scope.saveEdit=function(data){dataFactory.httpRequest('index.php/roles/'+$scope.form.id,'POST',{},$scope.form).then(function(data){showHideLoad();response=apiResponse(data,'edit');if(data.status=="success"){$scope.load_data();$scope.changeView('list');}
showHideLoad(true);});}
$scope.status=function(id,$index){showHideLoad();dataFactory.httpRequest('index.php/roles/active/'+id,'POST').then(function(data){response=apiResponse(data,'edit');if(data.status=="success"){$scope.load_data();}
showHideLoad(true);});}
$scope.changeView=function(view){if(view=="add"||view=="list"||view=="show"){$scope.form={};}
$scope.views.list=false;$scope.views.add=false;$scope.views.edit=false;$scope.views[view]=true;}});