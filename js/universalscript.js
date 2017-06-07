var loggedin = false;

$(document).ready(function() {
	if (loggedin) {
		document.getElementById("accountstatus").innerHTML = "ACCOUNT";
		
		document.getElementById("account-dropdown").innerHTML = "<li><a href='' class=''>Cart</a></li><li><a href='' class=''>Checkout</a></li><li><a href='' class=''>Logout</a></li>";
	}
});