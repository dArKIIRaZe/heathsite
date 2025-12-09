// Create Cookie Function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// Get Cookie Function
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var cookieOpt = getCookie('cookieOptOut');
console.log('Cookie Opt: ' + cookieOpt);


$(document).ready(function(){
	if (cookieOpt == 'true'){
		$('#cookiesSwitch').prop('checked', false);
	}
// Set cookie switch
	$('#cookiesSwitch').change(function(){
		if($('#cookiesSwitch').prop('checked') == true){
			// Set Opt out cookie to false
			setCookie('cookieOptOut','false','0');
			location.reload();
		} else {
			// Set Opt out cookie to true
			setCookie('cookieOptOut','true','365');
			location.reload();
		}
	});

});