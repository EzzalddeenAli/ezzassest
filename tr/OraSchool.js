
$(function() {
    "use strict";

    var latestOne = "";
    $(".aj").click(function(e) {

        if($(this).attr('href') != latestOne){

            if($(this).hasClass('scrollTop')){
                $('html,body').animate({ scrollTop: 0 }, 'fast');
            }

            if(latestOne != ""){
                if($(this).attr('href') != undefined){
                    showHideLoad();
                }
            }
            latestOne = $(this).attr('href');

          //  $("body").toggleClass("show-sidebar");
            $(".nav-toggler i").toggleClass("ti-menu");
            $(".nav-toggler i").addClass("ti-close");
            
            $("#sidebarnav li").removeClass('active');
            $("#sidebarnav li a").removeClass('active');
            $(this).addClass('active');
        //    $(this).parent('li').addClass('active');

        }
    });
    $(".sidebar-nav li").each(function( key, value ) {
        if($(this).find("ul").length && $(this).find("ul").children().length == 0){
            this.remove();
        }
    });

    $("#chgAcademicYear").click(function(e) {
        $('#myModal').modal('show');
    });

  

});
	var	getChartObject =function (obj) {
		var type='bar';
		var title='chart';
		var labels=[];
		var data=[];
		var series=undefined;
		var larg=undefined;
		if (typeof obj.type !== "undefined" )
			type=obj.type;
		if (typeof obj.title !== "undefined" )
			title=obj.title;
		if (typeof obj.labels !== "undefined" )
			labels=obj.labels;
		if (typeof obj.data !== "undefined" )
			data=obj.data;
		if (typeof obj.series !== "undefined" )
			series=obj.series;
		if (typeof obj.larg !== "undefined" )
			larg=obj.larg;
		return getChart(type,title,labels,data,series,larg);
	}
	var	getChart =function (type,title,labels,data,series,larg) {
		var canseries=false;
		  if (typeof series === "undefined" )
			  var series=[];
		  else canseries=true;
		  if (typeof data === "undefined" )
			  var data=[];
		  if (typeof labels === "undefined" )
			  var labels=[];
		  if (typeof larg === "undefined" )
			  var larg=false;
		var options= getBarOptions(title,canseries);
		if(type=='pie' ||type=='doughnut'  )
		var options= getCircleOptions(title,canseries);
		return  {
						title: title,
						larg: larg,
						type: type,
						labels: labels,
						colors: getColors2(),
						data: data,
						series: series,
						options: options,
					};
	}
	var	getColors2 =function () {

		return [
			'#46BFBD', // green
			'#F7464A', // red

			'#97BBCD', // blue
			'#FDB45C',

			'#17a2b8', // yellow
			'#949FB1', // grey
			'#4D5360', // dark grey
			'#20c997',
			'#28a745',

			'#e83e8c',
			'#20c997',
			'#007bff',
			'#28a745',
			'#e83e8c',
			'#007bff',

			'#fd7e14',
			'#6f42c1',
			'#e83e8c',
			'#20c997',
			'#ffc107',
			'#28a745',
			'#e83e8c',
			'#007bff',
		];
	}
	var	getColors =function () {

		return [
			'#949FB1', // grey
			'#e83e8c',
			'#46BFBD', // green
			'#F7464A', // red

			'#97BBCD', // blue
			'#FDB45C',

			'#17a2b8', // yellow

			'#4D5360', // dark grey
			'#20c997',
			'#28a745',

			'#20c997',
			'#007bff',
			'#28a745',
			'#e83e8c',
			'#007bff',

			'#fd7e14',
			'#6f42c1',
			'#e83e8c',
			'#20c997',
			'#ffc107',
			'#28a745',
			'#e83e8c',
			'#007bff',
		];
	}
var	getBarOptions =function (title, sdisplay) {

		return {
			responsive: true,
			legend: {
				display: sdisplay,
				labels: {},
				position: 'top',
			},
			plugins: {
				datalabels: {
					borderColor: 'white',
					borderWidth: 1,
					backgroundColor: function (context) {
						return context.dataset.borderColor;
					},
					borderRadius: 4,
					color: 'white',
					font: {
						size: 10,
						weight: 'bold'
					},

				}
			},
			title: {
            display: true,
            text: title
        },scales: {
				xAxes: [{
						stacked: true
					}
				],
				yAxes: [{
						stacked: true
					}
				]
			}
		};
	}
var	getCircleOptions =function (title) {

		return {

			responsive: true,
			legend: {
				display: true,
				labels: {
					fontColor: 'black',
					defaultFontFamily: "'Droid Arabic Kufi',   sans-serif",
					defaultFontSize: 20,
				},
				position: 'top',
			},
title: {
            display: true,
            text: title
        },
			plugins: {
				datalabels: {
					borderColor: 'white',
					borderWidth: 1,
					backgroundColor: function (context) {
						return context.dataset.borderColor;
					},
					borderRadius: 4,
					color: 'white',
					font: {
						size: 11,
						weight: 'bold'
					},

				}
			}
		};
	}

var showHideLoad = function(hideIndicator) {
    if (typeof hideIndicator === "undefined" || hideIndicator === null) {
        $('#overlay').show();
    }else{
        $('#overlay').hide();
    }
}
