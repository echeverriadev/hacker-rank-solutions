

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vocales = '';
    let consonantes = '';


    //GETTING VOWELS AND CONSONANTS
    for (const letra of s){
        if( letra == 'a' ||
            letra == 'e' ||
            letra == 'i' ||
            letra == 'o' ||
            letra == 'u'){
                vocales += letra;
            }
        else{
            consonantes += letra;
        }
    }

    //NOW PRINT THE ARRAYS
    for(const i of vocales){
        console.log(i);
    }
    
    for(const j of consonantes){
        console.log(j);
    }



}

