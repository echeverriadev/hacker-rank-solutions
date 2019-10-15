

function getGrade(score) {
    let grade;
    // Write your code here
    
    switch (true){

    case score < 0:
        break;    
    case score <= 5:
        grade = 'F';
        break;

    case score <= 10:
        grade = 'E';
        break;

    case score <= 15:
        grade = 'D';
        break;

    case score <= 20:
        grade = 'C';
        break;
    
    case score <= 25:
        grade = 'B';
        break;

    case score <= 30:
        grade = 'A';
        break;

    default:
        break;
}


    return grade;
}

