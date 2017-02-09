function redirect_to_newsDisplay() {
	window.location.href = "newsDisplay.html?button="
}

function redirect_to_addNews() {
	window.location.href = "addNews.html"
}

var i;
var html = "";	
$(document).ready(	
function generateButtons() {
	//console.log("inside generateButtons");
	//console.log(categoryList.length);
	for (i in categoryList) {
		html +='<button type="submit" name = "button" class="btn btn-primary btn-md" value = '+i+' onclick = "redirect_to_newsDisplay()">'+
	                         	i+'</button>';
		}
	// document.write(html)
	$("#display").html(html);
});
