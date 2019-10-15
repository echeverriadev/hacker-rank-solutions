

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI =Math.PI;
    let r = readLine();

    function area(r){
        let area=0;
        area = PI * Math.pow(r,2)
        return area;
    }

    function perimeter(r){
        let perimeter = 0;
        perimeter = 2 * PI * r;
        return perimeter;
    }
    
    console.log(area(r));
    console.log(perimeter(r));
    // Print the area of the circle:
    
    // Print the perimeter of the circle:

