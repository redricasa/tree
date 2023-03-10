// a value returning function
function factorial(num) {
    var product = 1;
    for (var i = num; i >= 1; i--) { // i-- is faster than --i
        product *= i;
    }
    return product;
}

console.log(factorial(100));

// a subprocedure or void function 
function curve(arr, bump) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += bump;
    }
}

var grades = [2,5]
curve(grades, 10)// loging out this whole callback returns undefined
console.log(grades); //log what has been modified instead

function factorial_recursive(num) {
    if (num <= 1) {
        return 1;
    }

    else {
        return num * factorial_recursive(num-1);//factorial_recursive(num-1) will 
        //run the whole function until it gets to 1
    }
}

console.log(factorial_recursive(-10))