console.log(faker.fake("{{name.firstName}} {{name.lastName}}"));

//function to display the generated card
function makeCard(){
    //user avatar
    var randomPicture = faker.image.avatar();
    document.getElementById("avatar").src = randomPicture;
    //user name
    var randomName = faker.name.findName();
    document.getElementById("name").innerHTML = randomName;
    //phone number
    var randomNumber = faker.phone.phoneNumber();
    document.getElementById("phone").innerHTML = randomNumber;
    //email
    var randomEmail = faker.internet.email();
    document.getElementById("email").innerHTML = randomEmail;
};
/*at first the name/phone/email wouldn't load and i was getting frustrated but i realized i wrote getElementByHtml instead of getElementByHTML. i didn't even realize that capitalization would matter!*/
function thatsMe(){
    alert("We found you. You cannot hide.")
}