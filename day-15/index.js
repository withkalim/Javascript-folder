// Check given variable is palindrome or not

var testing = "naman";
function CheckPalindrome(testing) {

    for (var i = 0; i < Math.floor(testing.length / 2); i++) {
        // console.log(i, testing[i], testing.length -1 - i);

        if (testing[i] == testing[testing.length - 1 - i]) {
            return "Given varible is palindrome";  
        } else {
            return "It's not palindrome";
        }
    }
}

console.log(CheckPalindrome(testing));

var a = "madam";
function chckPalm(a){

    for(var i=0; i<Math.floor(a.length / 2); i++){

        if(a[i] == a[a.length - 1-i]){
            return "It's palindrome";
        }else {
            return "Not palindrome";
        }
    }
}
console.log(chckPalm(a));