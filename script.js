
const boxes = document.querySelectorAll(".box");
const array = Array.from(boxes);


array.forEach(elem=> {
	elem.addEventListener("click", ()=>{
		alert("clicked on " + elem.className.slice(4).toUpperCase() + "!");
	})
});