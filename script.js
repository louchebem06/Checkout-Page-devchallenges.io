function disableButton(button) {
	button.disabled = true;
	alert(checkValue() ? "Form is valid" : "Form is not valid");
	button.disabled = false;
}

function checkValue() {
	email = document.getElementById('email');
	phone = document.getElementById("phone");
	fullname = document.getElementById("fullname");
	address = document.getElementById("address");
	city = document.getElementById("city");
	postal = document.getElementById("postal");
	
	elements = [];
	elements.push(email);
	elements.push(phone);
	elements.push(fullname);
	elements.push(address);
	elements.push(city);
	elements.push(postal);

	for (var i = 0; i < elements.length; i++)
		if (elements[i].value == "" || elements[i] == null)
			return false;

	return true;
}

function addItem(id, idPrice) {
	item = document.getElementById(id);
	value = parseInt(item.innerHTML);
	item.innerHTML = value + 1;
	price = parseFloat(document.getElementById(idPrice).innerHTML.split("$")[1]);
	total = document.getElementById('total');
	totalPrice = parseFloat(total.innerHTML.split("$")[1]);
	newTotal = totalPrice + price;
	total.innerHTML = "$" + newTotal.toFixed(2); 
}

function removeItem(id, idPrice) {
	item = document.getElementById(id);
	value = parseInt(item.innerHTML);
	if (value >= 1) {
		item.innerHTML = value - 1;
		price = parseFloat(document.getElementById(idPrice).innerHTML.split("$")[1]);
		total = document.getElementById('total');
		totalPrice = parseFloat(total.innerHTML.split("$")[1]);
		newTotal = totalPrice - price;
		total.innerHTML = "$" + newTotal.toFixed(2); 
	}
}
