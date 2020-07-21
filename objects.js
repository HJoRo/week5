var harryPotter = {
    title: "Harry Potter and the Order of the Phoenix",
    price: "$13.50",
    buyNow : function (){
        return this.price + " " + this.title;
    }
}
console.log(harryPotter.buyNow());