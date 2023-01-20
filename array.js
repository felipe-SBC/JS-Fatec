function testeArray(){
    var numbers = [1, 2, 3];
    numbers.push(4); //add number 4
    numbers.push(5); // add number 5
    /*for ( let i=0; numbers.length > i; i++ ){
        console.log(numbers[i]); //Imprime cada item do array
    }*/
    numbers.map(n=>console.log(n));

}

testeArray()