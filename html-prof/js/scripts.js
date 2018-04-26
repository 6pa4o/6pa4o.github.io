document.addEventListener("DOMContentLoaded", function(e) { 
	//do work
	
	var acc = document.getElementsByClassName("accordion");
	var i;
	if (acc.length) {
		acc[0].classList.toggle("catalog-menu__header_open");
		acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
		for (i = 0; i < acc.length; i++) {
			acc[i].onclick = function() {
				this.classList.toggle("catalog-menu__header_open");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight){
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				} 
			}
		}
	}
});