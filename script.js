let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const wrapper = createItemWrapper();
	addItemText(wrapper);
	addDeleteButton(wrapper);
	
	const li = document.createElement("li");
	li.appendChild(wrapper);
	ul.appendChild(li);
	input.value = "";

}

function createItemWrapper() {
	const element = document.createElement("div");
	element.classList.add("item-wrapper");
	return element;
}

function addItemText(wrapper) {
	const item = document.createElement("span");
	item.classList.add("item");
	item.appendChild(document.createTextNode(input.value));
	item.addEventListener("click", toggleDone);
	wrapper.appendChild(item);
}

function addDeleteButton(wrapper) {
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.appendChild(document.createTextNode("X"));
	deleteButton.addEventListener("click", deleteItem);
	wrapper.appendChild(deleteButton);
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

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function deleteItem(event) {
	event.target.parentElement.parentElement.remove();
}

const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", toggleDone);
}

const deleteButtons = document.getElementsByClassName("delete");
for (let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteItem);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);