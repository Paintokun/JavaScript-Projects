//Dictionary, I used the same example and made a syntax error with the commas, now I know it needs to be seperated
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
//The blue text above (Animal, Species are the Keys and the "" are the values of the key ^^^)

//running the same key name (Species:Dog, Species:Cat, it will just use the last example it wont duplicate)

