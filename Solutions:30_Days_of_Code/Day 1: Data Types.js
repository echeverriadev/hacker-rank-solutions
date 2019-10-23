    // Declare second integer, double, and String variables.
    var s_i,s_d,s_s;
    // Read and save an integer, double, and String to your variables.
    s_i=parseInt(readLine()); 
    s_d=parseFloat(readLine());
    s_s=readLine();
    
    // Print the sum of both integer variables on a new line.
    console.log(i+s_i);
    // Print the sum of the double variables on a new line.
    var result_float = d+s_d;
    console.log(result_float.toPrecision(2));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+s_s);