var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var table = document.getElementsByTagName("div");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	var div = document.createElement("div");
	div.classList.add("table")
	li.classList.add("toggle")
	btn.classList.add("delete")
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("x"));
	table[0].appendChild(div);
	div.appendChild(btn);
	div.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteAction (event) {
	var del = event.target
	if (event.target.classList.contains("delete")) {
		del.parentElement.remove()
	}
}

function doneAction (event) {
	var prova = event.target
	if (event.target.classList.contains("toggle")) {
		prova.classList.toggle("done")
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

table[0].addEventListener("click", doneAction)
table[0].addEventListener("click", deleteAction, false)
