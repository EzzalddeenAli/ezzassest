if(typeof Cost_Savings=="undefined"||typeof Cost_Savings!='function'){function Cost_Savings($Cost,$new){$Discount=$Cost-$new;$Discount=($Discount/$Cost)*100;return $Discount;}}
if(typeof Cost_Discount=="undefined"||typeof Cost_Discount!='function'){function Cost_Discount($Cost,$Discount){$Discount_M=$Cost*($Discount/100);$Rest=$Cost-$Discount_M;return $Rest;}}
if(typeof storageAvailable=="undefined"||typeof storageAvailable!='function')
{function storageAvailable(type)
{if(is_undefined(type))
return false;try{var storage=window[type],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}}}
if(typeof SetSessionStor=="undefined"||typeof SetSessionStor!='function')
{function SetSessionStor(key)
{if(is_undefined(key))
return false;if(storageAvailable('sessionStorage'))
{return true;}
return false;}}
if(typeof SetSessionStor=="undefined"||typeof SetSessionStor!='function')
{function SetSessionStor(key)
{if(is_undefined(key))
return false;if(storageAvailable('sessionStorage'))
{return true;}
return false;}}
if(typeof SetLocalStor=="undefined"||typeof SetLocalStor!='function')
{function SetLocalStor(key)
{if(is_undefined(key))
return false;if(storageAvailable('localStorage'))
{return true;}
return false;}}
if(typeof My_Location_Refresh=="undefined"||typeof My_Location_Refresh!='function'){function My_Location_Refresh()
{top.location=top.location;}}
if(typeof My_Location_Go=="undefined"||typeof My_Location_Go!='function'){function My_Location_Go(URL)
{if(!is_undefined(URL)&&is_string(URL)&&!is_empty(URL))
{window.location.href=URL;}}}
if(typeof location_top=="undefined"||typeof location_top!='function')
{function location_top($Path_FORM_JS){if($Path_FORM_JS!=''&&$Path_FORM_JS!=undefined)
top.location=$Path_FORM_JS;else
top.location=top.location;}}
if(typeof Reload_Page=="undefined"||typeof Reload_Page!='function'){function Reload_Page()
{location.reload();}}
function Set_Position_Offset(_object)
{if(is_undefined(_object)||!is_object(_object)||!is_jquery(_object)){return false;}
var offset=_object.offset();var position=_object.position();var height=_object.outerHeight();var width=_object.outerWidth();var offset_top=Set_parseFloat(offset.top);var position_top=Set_parseFloat(position.top);$(window).scrollTop(position_top-height);}
function bt_mousesheelNumber(a){return(is_number(a))?a:null}
function is_null(a){return(a===null)}
function is_undefined(a){return(typeof a=='undefined'||a==='undefined')}
function is_empty(a){return(trim_space(a)=='')}
function is_array(a){return(a instanceof Array)}
function is_jquery(a){return(a instanceof jQuery)}
function is_object(a){return((a instanceof Object||typeof a=='object'))}
function is_number(a){return((a instanceof Number||typeof a=='number')&&!isNaN(a))}
function is_string(a){return((a instanceof String||typeof a=='string')&&!is_undefined(a)&&!is_true(a)&&!is_false(a))}
function is_function(a){return(a instanceof Function||typeof a=='function')}
function is_boolean(a){return(a instanceof Boolean||typeof a=='boolean'||is_true(a)||is_false(a))}
function is_true(a){return(a===true||a==='true')}
function is_false(a){return(a===false||a==='false')}
function is_percentage(x){return(is_string(x)&&x.slice(-1)=='%')}
function getTime(){return new Date().getTime()}
function deprecated(o,n){debug(true,o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.')}
function is_email(email)
{var RegE=new RegExp("^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$");if(!is_empty(email)&&RegE.test(email))
{return true;}
return false;}
function is_url(url)
{var RegE=new RegExp('(http|ftp|https)://[a-z0-9\-_]+(\.[a-z0-9\-_]+)+([a-z0-9\-\.,@\?^=%&;:/~\+#]*[a-z0-9\-@\?^=%&;/~\+#])?','i');if(!is_empty(url)&&RegE.test(url))
{return true;}
return false;}
function Set_parseFloat(n){var num=parseFloat(n);if(is_number(num))
return num;return n;}
function Set_parseInt(n){var num=parseInt(n);if(is_number(num))
return num;return n;}
function Set_String(s){return s.toString();}
function String_ToArray(s,prg){if(is_string(s)&&!is_undefined(prg))
{A=s.split(prg);if(is_array(A))
return A;}
return s;}
function RemoveVal_In_Array(array,val)
{if(In_Array(array,val))
{array.splice(array.indexOf(val),1);}
return array;}
function Clear_Array(array)
{return array.splice(0,array.length);}
function Array_push(my_array,val)
{my_array.push(val);}
function In_Array(array,val)
{if(!is_array(array))
return false;if(array.indexOf(val)<0)
return false;return true;}
function String_RePlace(s,Sfrom,Sto){if(is_undefined(Sfrom)||is_undefined(Sto))
return s;var rs=s;var _A=String_ToArray(rs,Sfrom);for(var i in _A)
{rs=rs.replace(Sfrom,Sto);}
return rs;}
function Get_Has_Search(Sting,Sting_Search,MyRegex){if(typeof MyRegex=="undefined"&&typeof MyRegex!='')
MyRegex='gi';if(typeof Sting=="undefined"||typeof Sting_Search=="undefined")
return false;var regex=new RegExp(Sting_Search,MyRegex);if(typeof Sting.search==='function'){if(Sting.search(regex)!=-1){return true;}}
if(regex.test(Sting)){return true;}
return false;}
function selectTexLine(TextareaObject,startPos,endPos)
{if(typeof(TextareaObject.selectionStart)!="undefined"){TextareaObject.focus();TextareaObject.selectionStart=startPos;TextareaObject.selectionEnd=endPos;return true;}
if(document.selection&&document.selection.createRange){TextareaObject.focus();TextareaObject.select();var range=document.selection.createRange();range.collapse(true);range.moveEnd("character",endPos);range.moveStart("character",startPos);range.select();return true;}
return false;}
function selectTextareaLine(TextareaObject,selectText){var lines=TextareaObject.value.split("\n");selectText=trim_space(selectText);var startPos=0,endPos=TextareaObject.value.length;for(var x=0;x<lines.length;x++)
{s=trim_space(lines[x]);if(s==selectText){endPos=(lines[x].length);break;}
startPos+=(lines[x].length+1);}
var endPos=endPos+startPos;selectTexLine(TextareaObject,startPos,endPos)}
function Search_ReplaceTextareaLine(TextareaObject,SelectText){var lines=String_ToArray(TextareaObject.value,'\n');var startPos=0,endPos=TextareaObject.value.length;var Search_Array=String_ToArray(SelectText,',');for(var x=0;x<lines.length;x++)
{s=trim_space(lines[x]);for(var x2=0;x2<Search_Array.length;x2++)
{s2=trim_space(Search_Array[x2]);if(s==s2)
{TextareaObject.value=String_RePlace(TextareaObject.value,s,'');}}
startPos+=(lines[x].length+1);}}
if(typeof convertNumbers2Arabic0=="undefined"||typeof convertNumbers2Arabic0!='function')
{function convertNumbers2Arabic0(string)
{var newValue="";for(var i=0;i<string.length;i++)
{var ch=string.charCodeAt(i);if(ch>=48&&ch<=57)
{var newChar=ch+1584;newValue=newValue+String.fromCharCode(newChar);}
else
newValue=newValue+String.fromCharCode(ch);}
return newValue;}}
if(typeof convertNumbers2Arabic=="undefined"||typeof convertNumbers2Arabic!='function')
{function convertNumbers2Arabic(string)
{var id=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];return string.replace(/[0-9]/g,function(w){return id[+w]});}}
if(typeof convertNumbers2English0=="undefined"||typeof convertNumbers2English0!='function')
{function convertNumbers2English0(string)
{return string.replace(/[\u0660-\u0669]/g,function(c){return c.charCodeAt(0)-0x0660;}).replace(/[\u06f0-\u06f9]/g,function(c){return c.charCodeAt(0)-0x06f0;});}}
if(typeof convertNumbers2English=="undefined"||typeof convertNumbers2English!='function')
{function convertNumbers2English(string)
{return string.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,function(c){return c.charCodeAt(0)&0xf;});}}
if(typeof _DateToTimestamp=="undefined"||typeof _DateToTimestamp!='function')
{function _DateToTimestamp(strDate)
{var datum=Date.parse(strDate);return datum/1000;}}
if(typeof ReplaceArabicCharacter=="undefined"||typeof ReplaceArabicCharacter!='function'){function ReplaceArabicCharacter(String){if(String==''||String==null)
{return'';}
if(!is_string(String))
{return String;}
return String.replace(/(أ|إ|آ)/g,'ا');}}
if(typeof trim_space=="undefined"||typeof trim_space!='function'){function trim_space(str){if(str==''||str==null)
{return'';}
if(!is_string(str))
{return str;}
return str.replace(/^\s+|\s+$/g,"");}}
if(typeof trim_space1=="undefined"||typeof trim_space1!='function'){function trim_space1(str){str=trim_space(str);return str.replace(/\s+/u," ");}}
if(typeof clear_space=="undefined"||typeof clear_space!='function'){function clear_space(str){return str.split(' ').join('');}}
if(typeof trim_space2=="undefined"||typeof trim_space2!='function'){function trim_space2(myString){return myString.replace(/^s+/g,'').replace(/s+$/g,'')}}
if(typeof trim_space3=="undefined"||typeof trim_space3!='function'){function trim_space3(str){str=str.toString();var begin=0;var end=str.length-1;while(begin<=end&&str.charCodeAt(begin)<33){++begin;}
while(end>begin&&str.charCodeAt(end)<33){--end;}
return str.substr(begin,end-begin+1);}}
if(typeof strip_tag=="undefined"||typeof strip_tag!='function')
{function strip_tag(html)
{var tmp=document.createElement("DIV");tmp.innerHTML=html;var str=tmp.textContent||tmp.innerText
if(typeof str=="undefined")
str=html;var r=str.replace(/(&nbsp)*/g,"")
r=r.replace(/<[^>]*>|\s/g,'');if(r=='')
return false;else
return true;}}
if(typeof MyCheckTime=="undefined"||typeof MyCheckTime!='function')
{function MyCheckTime(i){if(i<10){i="0"+i;}
return i;}}
if(typeof _SetCookieday=="undefined"||typeof _SetCookieday!='function')
{function _SetCookieday(CookieName,CookieValue,Exdays){var d=new Date();d.setTime(d.getTime()+(Exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=CookieName+"="+CookieValue+"; "+expires+";path=/";}}
if(typeof _SetCookie=="undefined"||typeof _SetCookie!='function')
{function _SetCookie(CookieName,CookieValue,ExMins)
{var d=new Date();d.setTime(d.getTime()+(ExMins*60*1000));var expires="expires="+d.toUTCString();document.cookie=CookieName+"="+CookieValue+";"+expires+";path=/";}}
if(typeof _GetCookie=="undefined"||typeof _GetCookie!='function')
{function _GetCookie(CookieName){var Name=CookieName+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')
c=c.substring(1);if(c.indexOf(Name)==0)
return c.substring(Name.length,c.length);}
return"";}}
if(typeof _CheckCookie=="undefined"||typeof _CheckCookie!='function')
{function _CheckCookie(Name){var CookieName=_GetCookie(Name);if(CookieName!=""){return true;}else{return false;}}}
if(typeof _Delete_Cookie=="undefined"||typeof _Delete_Cookie!='function')
{function _Delete_Cookie(Name){_SetCookie(Name,"",0);}}