var vowels = "aeiou".split("");

var isVowel = function(char){
return vowels.indexOf(char.toLowerCase())>-1;
}

var hasAtLeastOneVowel =function(str){
    var strArray = str.split("");
    var result = false;
    return strArray.some(function(item){
    return isVowel(item);
    });
};


console.log(hasAtLeastOneVowel("test")); //true
console.log(hasAtLeastOneVowel("1")); //false
console.log(hasAtLeastOneVowel("bbb")); //false
console.log(hasAtLeastOneVowel("AAA")); //true