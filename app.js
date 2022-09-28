const inputValue = () => {
	const product = document.getElementById('textInput').value;
	const quantity = document.getElementById('quantity').value;
	const cart = getStoredCard();
	cart[product] = quantity;
	localStorage.setItem('Shopping-Cart',JSON.stringify(cart))

	addProductToDB(product, quantity)
}

const getStoredCard = () =>{
	const storedCard =localStorage.getItem('Shopping-Cart')
	let cart = {}
	if(storedCard){
		cart = JSON.parse(storedCard);
	}

	return cart;
}

const addProductToDB = () =>{
	const cart = getStoredCard(product, quantity);
	cart[product] = quantity;
	localStorage.setItem('cart', JSON.stringify(cart))
}
