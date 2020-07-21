var harryPotter = {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J. K. Rowling",
    genre: "Fantasy",
    description: "In his 5th year at Hogwarts, Harry and his friends in the Order of the Phoenix must fight Voldemort for control of an important secret weapon.",
    price: "$13.50",
    seller: "Amazon.com",
    buyNow : function (){
        return this.price + " on " + this.seller;
    },
    learnMore : function (){
     return this.title + ", " + this.genre + ". " + this.description;
   }
}
console.log(harryPotter.buyNow());
console.log(harryPotter.learnMore());