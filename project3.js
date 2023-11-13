var personName = "farhan jamil";
var lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
var toUpperCaseName = personName.toUpperCase();
console.log(toUpperCaseName);
var words = personName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
