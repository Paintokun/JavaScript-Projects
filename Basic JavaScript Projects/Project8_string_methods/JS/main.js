function displayConcatenatedString() {
    var part1 = "Hello.... ";
    var part2 = "is it me ";
    var part3 = "youre looking for?";
    
    var fullSentence = part1.concat(part2, part3);
    
    document.getElementById("concatResult").textContent = fullSentence;
}

displayConcatenatedString();

function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
// This function uses the toUpperCase() method
function useToUpperCase() {
    // Make a sentence
    var sentence = "hello, is it me ur looking for.";

    var upperSentence = sentence.toUpperCase();

    document.getElementById("upperCaseResult").innerHTML = upperSentence;
}

// This function uses the search() method
function useSearch() {
    var sentence = "holy flippin flip im flippin out man";

    var position = sentence.search("flippin");

    // Show the result (it will be a number showing the character position)
    document.getElementById("searchResult").innerHTML =
        "flippin flip starts at position: " + position;
}
// This function converts a number to a string
function string_Method() {
    var X = 182;

    // Use toString() to convert the number into a string
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
// This function demonstrates the toFixed() method
function useToFixed() {
    var number = 12.34567;

    // toFixed(2) keeps only 2 numbers after the decimal point
    var fixedNumber = number.toFixed(2);

    document.getElementById("fixedResult").innerHTML =
        "Original: " + number + " becomes " + fixedNumber;
}

// This function demonstrates the valueOf() method
function useValueOf() {
    // A string object (not just text)
    var strObj = new String("Hello!");

    var result = strObj.valueOf();

    document.getElementById("valueOfResult").innerHTML =
        "Original object: " + strObj + " → valueOf: " + result;
}
