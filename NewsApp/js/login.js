function validatePassword() {
	var pswd = document.getElementById("form-password").value;
	var pswd_len = pswd.length;
	
	if (pswd_len < 6 ) {
		alert("Password must be between 6 and 15 characters");
	}
	if (pswd_len >= 6) {
		window.location.href = "category.html";
	}
}