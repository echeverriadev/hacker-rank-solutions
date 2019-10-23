 var N = parseInt(readLine());
    if (N % 2 != 0 || N % 2 == 0 && N >= 5 && N <= 20) {
        console.log('Weird');
    } else {
        console.log('Not Weird');
    }