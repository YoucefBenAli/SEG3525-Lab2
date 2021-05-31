	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk (Organic)",
		categories: ["Lactose Intollerance"],
		organic: true,
		price: 5.99
	},

	{
		name: "Milk (Non-Organic)",
		categories: ["Lactose Intollerance"],
		organic: false,
		price: 4.99
	},

	{
		name: "Yogurt (Organic)",
		categories: ["Lactose Intollerance"],
		organic: true,
		price: 2.99
	},

	{
		name: "Granola Bar (Organic Ingredients)",
		categories: ["Nut Allergy"],
		organic: true,
		price: 1.99
	},

	{
		name: "Apple (Organic)",
		categories: [],
		organic: true,
		price: 1.99
	},

	{
		name: "Apple (Non-Organic)",
		categories: [],
		organic: false,
		price: 0.99
	},

	{
		name: "Cereal",
		categories: [],
		organic: true,
		price: 5.99
	},

	{
		name: "Meat",
		categories: [],
		organic: true,
		price: 8.99
	},

	{
		name: "Fish",
		categories: [],
		organic: true,
		price: 7.99
	},

	{
		name: "Banana (Organic)",
		categories: [],
		organic: true,
		price: 2.99
	},

	{
		name: "Banana (Non-Organic)",
		categories: [],
		organic: false,
		price: 1.99
	},

	{
		name: "Almonds (Organic)",
		categories: [],
		organic: true,
		price: 0.50
	},

	{
		name: "Cashew (Non-Organic)",
		categories: [],
		organic: false,
		price: 0.80
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions, organicPreference, priceLimit) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		let currentProduct = prods[i];
		let restricted = false;
		for (let j=0; j<restrictions.length;j++){
			let containsRestriction = currentProduct.categories.indexOf(restrictions[j])>-1
			if(containsRestriction){
				restricted=true;
				break;
			}
		}

		if(organicPreference=="Organic" && currentProduct.organic==false && !currentProduct.price<=priceLimit){
			restricted=true;
		}

		else if(organicPreference=="NonOrganic" && currentProduct.organic==true && !currentProduct.price<=priceLimit){
			restricted=true;
		}

		else if(!(currentProduct.price<=priceLimit)){
			restricted=true;
		}

		if(!restricted){
			product_names.push(currentProduct.name);
		}
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
