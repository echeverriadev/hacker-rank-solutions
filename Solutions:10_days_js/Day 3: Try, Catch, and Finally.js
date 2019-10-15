

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let new_string = s.split('');
        new_string.reverse();
        let new_new_array = new_string.join('');
        console.log(new_new_array);
    } 
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

