if (jQuery) {
    var originalFn = $.fn.data;
    $.fn.data = function() {
        if (arguments[0] !== '$binding')
        return originalFn.apply(this, arguments);
    }
}

var showHideLoad = function(hideIndicator) {
    if (typeof hideIndicator === "undefined" || hideIndicator === null) {
        $('#overlay').show();
    }else{
        $('#overlay').hide();
    }
}
function goTop() {
	$("html,body").animate({
      scrollTop: 0
    }, 500);
}
var OraSchool = angular.module('OraSchool',['ngRoute','angularUtils.directives.dirPagination','angularLazyImg']).run(function($http,dataFactory,$rootScope,$q,$timeout,$location) {
 $rootScope.title=" |  الإدارة العامة للاختبارات ";
    $rootScope.defaultAcademicYear = function() {
        angular.forEach($rootScope.dashboardData.academicYear, function (item) {
            if(item.isDefault == "1"){
                return item.id;
            }
        });
    }
 
    $rootScope.icons=false;
   
 

   
	
	    $rootScope.rat_cancel = function(){
   
        $rootScope.rate_model = !$rootScope.rate_model;
       
    }

 
    $rootScope.can = function(perm){
        if($rootScope.dashboardData.perms.indexOf(perm) !== -1) {
            return true
        }
        return false;
    }
    $rootScope.showIcons = function(){
		if($rootScope.icons==false){
		dataFactory.httpRequest('index.php/icons').then(function(data) {
          
			$rootScope.icons=data;
            $rootScope.modalClass = "modal-lg";
			$rootScope.showIconsView=!$rootScope.showIconsView;
        });
		}else {
		 $rootScope.modalClass = "modal-lg";
		 $rootScope.showIconsView=!$rootScope.showIconsView;
		}
       
    }

});


OraSchool.controller('setNumbersController', function(dataFactory,$scope,$rootScope) {
	
	 document.title = "ارقام الجلوس"+ $rootScope.title;
    $scope.views = {};
  $scope.page_title ="setNumbersController";  $scope.views.list = true;
    $scope.form = {};
   $scope.load_list = function(){
	   showHideLoad();
        dataFactory.httpRequest('index.php/examsClass').then(function(data) {
            $scope.classes = data.classes;
            $scope.changeView('list');
			
            showHideLoad(true);
        });
    }
	
	$scope.current_page = 1;
   
    $scope.totalItems = 0;
    $scope.pageChanged = function(newPage) {
        $scope.getResultsPage(newPage);
    };
    $scope.resetSearch = function(){
        $scope.searchInput = {};
        $scope.getResultsPage(1);
    }
    $scope.getResultsPage = function(newpage = ""){
        if(newpage != ""){
            $scope.current_page = newpage;
        }
        if ( !jQuery.isEmptyObject($scope.searchInput) ) {
            $scope.searchDB( $scope.current_page );
        }else{
            $scope.listUsers( $scope.current_page );
        }
        $scope.changeView('list');
    }

    $scope.load_list();
    $scope.classYears = function(){
	$scope.years={};
	$scope.form.yearId=null;
	showHideLoad();
	
        dataFactory.httpRequest('index.php/classYears','POST',{},{"class":$scope.form.classId}).then(function(data) {
			data = apiResponse(data);
            $scope.years = data.years;
			showHideLoad(true);
        });
    }
   

  $scope.listUsers = function(pageNumber){
        showHideLoad();
		
		dataFactory.httpRequest('index.php/setNumbers/'+$scope.form.classId+'/'+pageNumber,'POST',{},$scope.form).then(function(data) {
			data = apiResponse(data);
			 showHideLoad(true);
            if(data){
				 $scope.totalItems = data.totalItems
                $scope.resultsUsers = data.resultsUsers;
            }
            if(data.totalItems == 0){
                 alert('لم يتم العثور على نتائج');
            }
           
        });
       
    }
  $scope.getSetNumbers = function(){
        
         $scope.getResultsPage(1);
    }

    $scope.printSetNumber = function(){
        showHideLoad();
        dataFactory.httpRequest('index.php/setNumbers/'+$scope.form.classId,'POST',{},{'stats':'certPrint','data':$scope.form}).then(function(data) {
            if(data){
                $scope.printCertInfo = data;

                setTimeout(function() { 

                    var mywindow = window.open('', 'new div', 'height=800,width=1200');
                    mywindow.document.write('<html><head><title>Print Certificates</title>');
                    mywindow.document.write('<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" type="text/css" /><style> @media print { .no-print, .no-print * { display: none !important; } }</style>');
                    mywindow.document.write('</head><body ><center><div class="no-print" style="padding:10px"><button type="button" onClick="window.print();">Print Certificates</button></style></center>');
                    mywindow.document.write($('#printableArea').html());
                    mywindow.document.write('</body></html>');
                    return true;

                }, 500);

            }
            showHideLoad(true);
        });
    }
    $scope.changeView = function(view){
        $scope.views.list = false;
        $scope.views[view] = true;
    }
});


OraSchool.controller('checkController', function(dataFactory,$scope,$rootScope) {
	
	 document.title = "ارقام الجلوس"+ $rootScope.title;
    $scope.views = {};
  $scope.page_title ="setNumbersController";  $scope.views.list = true;
    $scope.form = {};
   $scope.load_list = function(){
	   showHideLoad();
        dataFactory.httpRequest('index.php/examsClass').then(function(data) {
            $scope.classes = data.classes;
            $scope.changeView('list');
			
            showHideLoad(true);
        });
    }
	
	$scope.current_page = 1;
   
    $scope.totalItems = 0;
    $scope.pageChanged = function(newPage) {
        $scope.getResultsPage(newPage);
    };
    $scope.resetSearch = function(){
        $scope.searchInput = {};
        $scope.getResultsPage(1);
    }
    $scope.getResultsPage = function(newpage = ""){
        if(newpage != ""){
            $scope.current_page = newpage;
        }
        if ( !jQuery.isEmptyObject($scope.searchInput) ) {
            $scope.searchDB( $scope.current_page );
        }else{
            $scope.listUsers( $scope.current_page );
        }
        $scope.changeView('list');
    }

    $scope.load_list();
    
   

  $scope.listUsers = function(pageNumber){
        showHideLoad();
		
		dataFactory.httpRequest('index.php/check/'+$scope.form.classId+'/'+pageNumber,'POST',{},$scope.form).then(function(data) {
			data = apiResponse(data);
			 showHideLoad(true);
            if(data){
				 $scope.totalItems = data.totalItems
                $scope.resultsUsers = data.resultsUsers;
            }
            if(data.totalItems == 0){
                alert('لم يتم العثور على نتائج');
            }
           
        });
       
    }
  $scope.getSetNumbers = function(){
        
         $scope.getResultsPage(1);
    }

    $scope.changeView = function(view){
        $scope.views.list = false;
        $scope.views[view] = true;
    }
});


OraSchool.controller('resultsController', function(dataFactory,$scope,$rootScope) {
    $scope.views = {};
   document.title = "النتائج "+ $rootScope.title;
    $scope.views.list = true;
    $scope.form = {};
   $scope.load_list = function(){
       showHideLoad();
	   dataFactory.httpRequest('index.php/examsClass').then(function(data) {
            $scope.classes = data.classes;
            $scope.changeView('list');
            showHideLoad(true);
        });
    }
	
	$scope.current_page = 1;
   
    $scope.totalItems = 0;
    $scope.pageChanged = function(newPage) {
        $scope.getResultsPage(newPage);
    };
    $scope.resetSearch = function(){
        $scope.searchInput = {};
        $scope.getResultsPage(1);
    }
    $scope.getResultsPage = function(newpage = ""){
		showHideLoad();
        if(newpage != ""){
            $scope.current_page = newpage;
        }
        if ( !jQuery.isEmptyObject($scope.searchInput) ) {
            $scope.searchDB( $scope.current_page );
        }else{
            $scope.listUsers( $scope.current_page );
        }
        $scope.changeView('list');
    }

    $scope.load_list();
    $scope.classYears = function(){
	$scope.years={};
	$scope.form.yearId=null;
	showHideLoad();
	
        dataFactory.httpRequest('index.php/resultsYears','POST',{},{"class":$scope.form.classId}).then(function(data) {
			data = apiResponse(data);
            $scope.years = data.years;
			showHideLoad(true);
        });
    }
   

  $scope.listUsers = function(pageNumber){
        showHideLoad();
		
		dataFactory.httpRequest('index.php/results/'+$scope.form.classId+'/'+pageNumber,'POST',{},$scope.form).then(function(data) {
			data = apiResponse(data);
			 showHideLoad(true);
            if(data){
				 $scope.totalItems = data.totalItems
                $scope.resultsUsers = data.resultsUsers;
            }
            if(data.totalItems == 0){
                 alert('لم يتم العثور على نتائج');
            }
           
        });
       
    }
  $scope.getResults = function(){
        
         $scope.getResultsPage(1);
    }

    $scope.printSetNumber = function(){
        showHideLoad();
        dataFactory.httpRequest('index.php/setNumbers/'+$scope.form.classId,'POST',{},{'stats':'certPrint','data':$scope.form}).then(function(data) {
            if(data){
                $scope.printCertInfo = data;

                setTimeout(function() { 

                    var mywindow = window.open('', 'new div', 'height=800,width=1200');
                    mywindow.document.write('<html><head><title>Print Certificates</title>');
                    mywindow.document.write('<link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" type="text/css" /><style> @media print { .no-print, .no-print * { display: none !important; } }</style>');
                    mywindow.document.write('</head><body ><center><div class="no-print" style="padding:10px"><button type="button" onClick="window.print();">Print Certificates</button></style></center>');
                    mywindow.document.write($('#printableArea').html());
                    mywindow.document.write('</body></html>');
                    return true;

                }, 500);

            }
            showHideLoad(true);
        });
    }
    $scope.changeView = function(view){
        $scope.views.list = false;
        $scope.views[view] = true;
    }
});

OraSchool.controller('newsController', function(dataFactory,$routeParams,$sce,$rootScope,$scope) {
	 document.title = "الاخبار" + $rootScope.title;
    $scope.newsboard = {};
    $scope.newsboardTemp = {};
    $scope.totalItemsTemp = {};
    $scope.views = {};
    $scope.views.list = true;
    $scope.form = {};
    $scope.userRole ;

    if($routeParams.newsId){
        showHideLoad();
        dataFactory.httpRequest('index.php/news/'+$routeParams.newsId).then(function(data) {
            $scope.form = data;
            $scope.newsTitle = data.newsTitle;
            $scope.newsText = $sce.trustAsHtml(data.newsText);
            $scope.changeView('read');
            showHideLoad(true);
        });
    }else{
        $scope.totalItems = 0;
        $scope.pageChanged = function(newPage) {
            getResultsPage(newPage);
        };

        getResultsPage(1);
    }

    function getResultsPage(pageNumber) {
		  showHideLoad();
        if(! $.isEmptyObject($scope.newsboardTemp)){
          dataFactory.httpRequest('index.php/news/search/'+$scope.searchText+'/'+pageNumber).then(function(data) {
                angular.forEach(data.newsboard, function (item) {
                    item.newsText = $sce.trustAsHtml(item.newsText);
                });
                $scope.newsboard = data.newsboard;
                $scope.totalItems = data.totalItems;
            });
        }else{
            dataFactory.httpRequest('index.php/news/listAll/'+pageNumber).then(function(data) {
                angular.forEach(data.newsboard, function (item) {
                    item.newsText = $sce.trustAsHtml(item.newsText);
                });
                $scope.newsboard = data.newsboard;
                $scope.userRole = data.userRole;
                $scope.totalItems = data.totalItems;
                showHideLoad(true);
            });
        }
    }

    $scope.searchDB = function(){
        if($scope.searchText.length >= 3){
            if($.isEmptyObject($scope.newsboardTemp)){
                $scope.newsboardTemp = $scope.newsboard ;
                $scope.totalItemsTemp = $scope.totalItems;
                $scope.newsboard = {};
            }
            getResultsPage(1);
        }else{
            if(! $.isEmptyObject($scope.newsboardTemp)){
                $scope.newsboard = $scope.newsboardTemp ;
                $scope.totalItems = $scope.totalItemsTemp;
                $scope.newsboardTemp = {};
            }
        }
    }

    

    

    

    

    $scope.changeView = function(view){
        if(view == "add" || view == "list" || view == "show"){
            $scope.form = {};
            $scope.form.newsText = "";
        }
        $scope.views.list = false;
        $scope.views.add = false;
        $scope.views.edit = false;
        $scope.views[view] = true;
    }
});

OraSchool.controller('enquiries', function(dataFactory,$sce,$rootScope,$scope,$routeParams) {
    $scope.enquiries = {};
    $scope.enq_type = {};
    $scope.enq_source = {};
    $scope.views = {};
    $scope.views.list = true;
    $scope.pageNumber = 1;
    $scope.form = {};
    
    $scope.load_data = function(pageNumber) {

        if(typeof pageNumber == "undefined"){
            pageNumber = $scope.pageNumber;
        }
        $scope.pageNumber = pageNumber;

        if(! $.isEmptyObject($scope.enquiriesTemp)){

            showHideLoad();
            dataFactory.httpRequest('index.php/enquiries/search/'+$scope.searchText+'/'+pageNumber).then(function(data) {
                $scope.enquiries = data.enquiries;
                $scope.totalItems = data.totalItems;
                showHideLoad(true);
            });

        }else{

            showHideLoad();
            dataFactory.httpRequest('index.php/enquiries/listAll/'+pageNumber).then(function(data) {
                $scope.enquiries = data.enquiries;
                if( pageNumber == 1){
                    $scope.enq_type = data.enq_type;
                    $scope.enq_source = data.enq_source;
                }
                $scope.totalItems = data.totalItems;
                showHideLoad(true);
            });
            
        }
    }

    $scope.pageChanged = function(newPage) {
        $scope.load_data(newPage);
    };
      $scope.listAnswers = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/listAnswers/enquiries/'+id).then(function(data) {
            $scope.answers = data;
            $scope.changeView('answers');
            showHideLoad(true);
        });
    }
    $scope.searchDB = function(){
        if($scope.searchText.length >= 3){
            if($.isEmptyObject($scope.enquiriesTemp)){
                $scope.enquiriesTemp = $scope.enquiries;
                $scope.totalItemsTemp = $scope.totalItems;
                $scope.enquiries = {};
            }
            $scope.load_data(1);
        }else{
            if(! $.isEmptyObject($scope.enquiriesTemp)){
                $scope.enquiries = $scope.enquiriesTemp;
                $scope.totalItems = $scope.totalItemsTemp;
                $scope.enquiriesTemp = {};
            }
        }
    }

    
    $scope.view_details = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/enquiries/view/'+id).then(function(data) {
            $scope.form = data;
            $scope.changeView('view');
            showHideLoad(true);
        });
    }

    if($routeParams.viewId){
        $scope.view_details($routeParams.viewId);
    }else{
        $scope.load_data();
    }
    
    $scope.saveAdd = function(data){
        showHideLoad();
        dataFactory.httpRequest('index.php/enquiries','POST',{},$scope.form,"enq_file,").then(function(data) {
            response = apiResponse(data,'add');
            if(data.status == "success"){
                $scope.load_data();
                $scope.changeView('list');
            }
            showHideLoad(true);
        });
    }

    $scope.remove = function(item,index){
        var confirmRemove = confirm($rootScope.phrase.sureRemove);
        if (confirmRemove == true) {
            showHideLoad();
            dataFactory.httpRequest('index.php/enquiries/delete/'+item.id,'POST').then(function(data) {
                response = apiResponse(data,'remove');
                if(data.status == "success"){
                    $scope.enquiries.splice(index,1);
                }
                showHideLoad(true);
            });
        }
    }

    $scope.edit = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/enquiries/'+id).then(function(data) {
            $scope.changeView('edit');
            $scope.form = data;
            showHideLoad(true);
        });
    }

    $scope.saveEdit = function(data){
        dataFactory.httpRequest('index.php/enquiries/'+$scope.form.id,'POST',{},$scope.form,"enq_file,").then(function(data) {
            showHideLoad();

            response = apiResponse(data,'edit');
            if(data.status == "success"){
                $scope.load_data();
                $scope.changeView('list');
            }
            showHideLoad(true);
        });
    }

    $scope.status =function(id,$index){
        showHideLoad();
        dataFactory.httpRequest('index.php/enquiries/active/'+id,'POST').then(function(data) {
            response = apiResponse(data,'edit');
            if(data.status == "success"){
                $scope.load_data();
            }
            showHideLoad(true);
        });
    }
    
    $scope.changeView = function(view){
        if(view == "add" || view == "list" || view == "show"){
            $scope.form = {};
            $scope.enq_desc = "";
        }
        $scope.views.list = false;
        $scope.views.add = false;
        $scope.views.answers = false;
        $scope.views.edit = false;
        $scope.views.view = false;
        $scope.views[view] = true;
    }
});

OraSchool.controller('complaints', function(dataFactory,$sce,$rootScope,$scope,$routeParams) {
    $scope.complaints = {};
    $scope.comp_type = {};
    $scope.comp_source = {};
    $scope.views = {};
    $scope.views.list = true;
    $scope.pageNumber = 1;
    $scope.form = {};
    
    $scope.load_data = function(pageNumber) {

        if(typeof pageNumber == "undefined"){
            pageNumber = $scope.pageNumber;
        }
        $scope.pageNumber = pageNumber;

        if(! $.isEmptyObject($scope.complaintsTemp)){

            showHideLoad();
            dataFactory.httpRequest('index.php/complaints/search/'+$scope.searchText+'/'+pageNumber).then(function(data) {
                $scope.complaints = data.complaints;
                $scope.totalItems = data.totalItems;
                showHideLoad(true);
            });

        }else{

            showHideLoad();
            dataFactory.httpRequest('index.php/complaints/listAll/'+pageNumber).then(function(data) {
                $scope.complaints = data.complaints;
                if( pageNumber == 1){
                    $scope.comp_type = data.comp_type;
                    $scope.comp_source = data.comp_source;
                }
                $scope.totalItems = data.totalItems;
                showHideLoad(true);
            });
            
        }
    }
$scope.listAnswers = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/listAnswers/complaints/'+id).then(function(data) {
            $scope.answers = data;
            $scope.changeView('answers');
            showHideLoad(true);
        });
    }
    $scope.pageChanged = function(newPage) {
        $scope.load_data(newPage);
    };

    $scope.searchDB = function(){
        if($scope.searchText.length >= 3){
            if($.isEmptyObject($scope.complaintsTemp)){
                $scope.complaintsTemp = $scope.complaints;
                $scope.totalItemsTemp = $scope.totalItems;
                $scope.complaints = {};
            }
            $scope.load_data(1);
        }else{
            if(! $.isEmptyObject($scope.complaintsTemp)){
                $scope.complaints = $scope.complaintsTemp;
                $scope.totalItems = $scope.totalItemsTemp;
                $scope.complaintsTemp = {};
            }
        }
    }

    
    $scope.view_details = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/complaints/view/'+id).then(function(data) {
            $scope.form = data;
            $scope.changeView('view');
            showHideLoad(true);
        });
    }

    if($routeParams.viewId){
        $scope.view_details($routeParams.viewId);
    }else{
        $scope.load_data();
    }
    
    $scope.saveAdd = function(data){
        showHideLoad();
        dataFactory.httpRequest('index.php/complaints','POST',{},$scope.form,"enq_file,").then(function(data) {
            response = apiResponse(data,'add');
            if(data.status == "success"){
                $scope.load_data();
                $scope.changeView('list');
            }
            showHideLoad(true);
        });
    }

    $scope.remove = function(item,index){
        var confirmRemove = confirm($rootScope.phrase.sureRemove);
        if (confirmRemove == true) {
            showHideLoad();
            dataFactory.httpRequest('index.php/complaints/delete/'+item.id,'POST').then(function(data) {
                response = apiResponse(data,'remove');
                if(data.status == "success"){
                    $scope.complaints.splice(index,1);
                }
                showHideLoad(true);
            });
        }
    }

    $scope.edit = function(id){
        showHideLoad();
        dataFactory.httpRequest('index.php/complaints/'+id).then(function(data) {
            $scope.changeView('edit');
            $scope.form = data;
            showHideLoad(true);
        });
    }

    $scope.saveEdit = function(data){
        dataFactory.httpRequest('index.php/complaints/'+$scope.form.id,'POST',{},$scope.form,"enq_file,").then(function(data) {
            showHideLoad();

            response = apiResponse(data,'edit');
            if(data.status == "success"){
                $scope.load_data();
                $scope.changeView('list');
            }
            showHideLoad(true);
        });
    }

    $scope.status =function(id,$index){
        showHideLoad();
        dataFactory.httpRequest('index.php/complaints/active/'+id,'POST').then(function(data) {
            response = apiResponse(data,'edit');
            if(data.status == "success"){
                $scope.load_data();
            }
            showHideLoad(true);
        });
    }
    
    $scope.changeView = function(view){
        if(view == "add" || view == "list" || view == "show"){
            $scope.form = {};
            $scope.comp_desc = "";
        }
        $scope.views.list = false;
        $scope.views.add = false;
        $scope.views.edit = false;
        $scope.views.answers = false;
        $scope.views.view = false;
        $scope.views[view] = true;
    }
});


OraSchool.config(function($logProvider){
    $logProvider.debugEnabled(false);
});

var appBaseUrl = $('base').attr('href');

OraSchool.controller('mainController', function(dataFactory,$rootScope,$route,$scope) {
 
   $scope.chgAcYearModal = function(){
        $scope.modalTitle = $scope.phrase.chgYear;
        $scope.chgAcYearModalShow = !$scope.chgAcYearModalShow;
    }
	$scope.page_title ="mainController"; 
   

    $scope.adminHasPerm = function(perm){
        return $rootScope.dashboardData.perms.some(function(s) {
            return s.indexOf(perm) > -1;
        });
    }

    showHideLoad(true);
});

OraSchool.controller('dashboardController', function(dataFactory,$rootScope,$scope) {
	  goTop();
	dataFactory.httpRequest('index.php/overviews').then(function(data) {
		
                $rootScope.dashboardData.overviews =data;
				showHideLoad(true);
            });

});
