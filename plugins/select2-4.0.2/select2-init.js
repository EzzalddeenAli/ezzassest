function Run_OnCreate_Select2(_object){var Item=null;var element=null;var holder=null;var feed=null;var complete=null;var cache={};}
function Run_OnBlur_Select2(_object,_obj){var Item=null;var element=null;var holder=null;var feed=null;var complete=null;var cache={};if(typeof _object.item!="undefined"){Item=_object.item;var value=Item.attr("value",'');}}
function Run_OnSelect_Select2(_object,_obj){}
function Run_OnRemove_Select2(_object,_obj){}
function GetAttributes_Select2(_object){var element=_object;var elem=element;attr={};var attr_temp=' ';var name=element.attr("name");var elemid=element.attr("id");ClassName=element.get(0).className;elem.removeAttr("multiple");elem.removeAttr("value");if(elem.length){$.each(elem.get(0).attributes,function(v,n){n=n.nodeName||n.name;v=elem.attr(n);if(v!=undefined&&v!==false)
attr[n]=v
attr_temp+=n+'="'+v+'"  ';})}
var R=attr_temp+'   multiple="multiple"  ';return $('<select  '+R+' >').data('cache',{});return element.get(0).tagName+' name="'+name+'" id="'+elemid+'" multiple="multiple" class="'+element.get(0).className+' hidden"  '+attr_temp;}
function _Get_Select2_Init_object(_object,_Mult)
{if(typeof jQuery.fn.select2=="undefined"||typeof jQuery.fn.select2!='function')
return false;if(!is_undefined(_object)&&is_jquery(_object))
{if(!is_undefined(_Mult)&&is_true(_Mult))
{_object.each(function(i){var placeholder="";var _placeholder=$(this).attr("placeholder");if(!is_undefined(_placeholder))
placeholder=_placeholder;var maximumSelectionLength=50;var maximumSelectionLength=$(this).attr("maximumSelectionLength");if(!is_undefined(maximumSelectionLength))
{$.fn.select2.defaults.set('maximumSelectionLength',maximumSelectionLength);}
$(this).select2({placeholder:placeholder,allowClear:true,amdLanguageBase:'./i18n/',theme:"classic",selectOnClose:false,closeOnSelect:false,tags:true,dir:"rtl",language:"ar"});$(this).on("select2:open",function(e){var _object=$(this);if(_object.hasClass("Input_Error"))
{_object.removeClass("Input_Error");if(typeof _Remove_Select2_Input_Error!="undefined"&&typeof _Remove_Select2_Input_Error=='function')
_Remove_Select2_Input_Error(_object);}});$(this).on("select2:close",function(e){});$(this).on("select2:select",function(e){});$(this).on("select2:unselect",function(e){});$(this).on("change",function(e){});$(this).on("click",function(){});});}
else
{_object.each(function(i){var placeholder="";var _placeholder=$(this).attr("placeholder");if(!is_undefined(_placeholder))
placeholder=_placeholder;$(this).select2({placeholder:placeholder,allowClear:true,amdLanguageBase:'./i18n/',theme:"classic",selectOnClose:false,tags:false,dir:"rtl",language:"ar"});$(this).on("select2:open",function(e){var _object=$(this);if(_object.hasClass("Input_Error"))
{_object.removeClass("Input_Error");if(typeof _Remove_Select2_Input_Error!="undefined"&&typeof _Remove_Select2_Input_Error=='function')
_Remove_Select2_Input_Error(_object);}});$(this).on("select2:close",function(e){});$(this).on("select2:select",function(e){});$(this).on("select2:unselect",function(e){});$(this).on("change",function(e){});$(this).on("click",function(){});});}}
return false;}
function _Get_Select2_Init(){var MyOptions_defaults={amdBase:'./',amdLanguageBase:'./i18n/',closeOnSelect:true,debug:false,dropdownAutoWidth:false,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:false,theme:'default',width:'resolve'};if(typeof jQuery.fn.select2=="undefined"||typeof jQuery.fn.select2!='function')
return false;if($("*").children().is("select[GetSelect2=1]")){_Get_Select2_Init_object($(":input[GetSelect2=1]"),false);}
if($("*").children().is("select[GetSelectMultiple=1]")){_Get_Select2_Init_object($(":input[GetSelectMultiple=1]"),true);}
return false;}
function _Set_Select2_Input_Error(_object)
{if(typeof jQuery.fn.select2=="undefined"||typeof jQuery.fn.select2!='function')
return false;if(is_undefined(_object)||!is_object(_object)||!is_jquery(_object))
{alert(typeof _object+'\n _Set_Select2_Input_Error');return false;}
var _check=_object.attr("check");if(!is_undefined(_check)&&_check=='yes')
{if((!is_undefined(_object.attr("GetSelect2"))&&_object.attr("GetSelect2")=='1')||(!is_undefined(_object.attr("GetSelectMultiple"))&&_object.attr("GetSelectMultiple")=='1'))
{_object.next(".select2").find(".select2-selection__rendered").addClass(" Input_Error ");}}
return false;}
function _Remove_Select2_Input_Error(_object)
{if(typeof jQuery.fn.select2=="undefined"||typeof jQuery.fn.select2!='function')
return false;if(is_undefined(_object)||!is_object(_object)||!is_jquery(_object))
{alert(typeof _object+'\n _Remove_Select2_Input_Error');return false;}
if((!is_undefined(_object.attr("GetSelect2"))&&_object.attr("GetSelect2")=='1')||(!is_undefined(_object.attr("GetSelectMultiple"))&&_object.attr("GetSelectMultiple")=='1'))
{if(_object.next(".select2").find(".select2-selection__rendered").hasClass("Input_Error"))
{_object.next(".select2").find(".select2-selection__rendered").removeClass(" Input_Error ");}}
return false;}
jQuery(document).ready(function(){if(typeof _Get_Select2_Init!="undefined"&&typeof _Get_Select2_Init=='function')
_Get_Select2_Init();});