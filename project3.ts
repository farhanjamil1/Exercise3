let personName: string = "farhan jamil";

let lowercaseName: string = personName . toLowerCase();
console.log(lowercaseName);


let toUpperCaseName: string = personName . toUpperCase();
console.log(toUpperCaseName);

let words: string[] = personName.split(" ");
let titlecaseName: string = ""

for (let i = 0; i < words.length; i++) {

  titlecaseName +=words[i].charAt(0). toUpperCase() + words[i].slice(1).toLowerCase() +" "
};
console.log(titlecaseName)