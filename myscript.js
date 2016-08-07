var ku=document.getElementById("kuInfo");
var kum=document.getElementById("KU_logo_link");
if((ku|| kum) != null){
	var element = document.getElementById("one-click-button");
	var node = element.parentNode.parentNode;
	if(node != null){
	node.parentNode.removeChild(node);
	}
}
