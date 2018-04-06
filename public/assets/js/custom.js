$(document).ready(function() {
	$('#loginForm').on('submit', function (e) {
		$('.loader').show();
		$.ajax({
			type: 'post',
			url: 'classes/login_action.php',
			data: $(this).serialize(),
			success: function (response) {
			  $('.loader').hide();
			    if(response != ""){
					alert( response +' ' + "You are Log in Successfully");	
				    window.location.href = "http://localhost:7777";
				}else{
					alert("Please Check your credentials");
				}  
			}
		}); 
		
	});
	$("#logout_button").click(function(){
	    var logout_user = delete_cookie('login_user'); 
		$(".logout_button").hide();
		window.location.href = "http://localhost/NodChatApp/public/login.php";
	});
	var login_user = getCookie("login_user");
	if(login_user == ""){
		window.location.href = "http://localhost/NodChatApp/public/login.php";
		break; 
	}
	  
});
    
	
	
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
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
/* function setCookie(cname, cvalue, exMins) {
    var d = new Date();
    d.setTime(d.getTime() + (exMins*60*1000));
    var expires = "expires="+d.toUTCString();  
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} */

function delete_cookie(name) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
