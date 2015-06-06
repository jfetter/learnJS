var vowels = "aeiou".split("");

var isVowel = function(char){
return vowels.indexOf(char.toLowerCase())>-1;
}

var hasAtLeastOneVowel =function(str){
    for (var i=0; i<str.length; i++) {
        if (isVowel(str[i])) { 
        return true;
        } 
   }
            return false;
}


console.log(hasAtLeastOneVowel("test")); //true
console.log(hasAtLeastOneVowel("1")); //false
console.log(hasAtLeastOneVowel("bbb")); //false
console.log(hasAtLeastOneVowel("AAA")); //true