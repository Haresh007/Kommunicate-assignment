function reverse(num){
    var value, reverse = 0

    while( num ){
        value = num % 10  
        reverse = (reverse * 10) + value 
        num = num/10|0  
    }  
  
    return reverse
}
console.log(Number(reverse(149)));