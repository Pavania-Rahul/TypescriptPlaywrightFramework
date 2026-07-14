export const addToCartLocators= {

    selectProduct:(productName:string)=> `//div[text()='${productName}']`,
    addToCartButton: "#add-to-cart",
    removeButton:"#remove",
    badgeIcon:"//span[@class='shopping_cart_badge']",
    addToCartIcon: "//a[@class='shopping_cart_link']",
    productTitle:".inventory_item_name",
    checkOutButton: "#checkout",
    firstName:"#first-name",
    lastName: "#last-name",
    zipcode: "#postal-code",
    continueButton: "#continue",
    checkoutPage: ".title",
    finishButton: "#finish",
    thankyouForOrder: ".complete-header"

}
