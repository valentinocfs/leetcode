var isPalindrome = function(x) {
    let data = x.toString().split('');
    for(let i = 0; i < data.length; i++){
        if(data[i] !== data[(data.length-1) - i]) return false
        else continue
    }
    return true
};

console.log(isPalindrome(121))
