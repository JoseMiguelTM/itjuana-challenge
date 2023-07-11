import Challenge1 from "./challenge1";
import Challenge2 from "./challenge2";

function main() {
    /* 
    -----Challenge 1-----
    We divided our challenges into 2 TS classes to have a more readable code,
    at the beginning of this challenge, we have our array to find the missing numbers in that
    (It can be modified if you want to test the function with another array case).
    Then, we build the challenge1 object, taking the array as a parameter to build the object,
    next we have a call to the findMissingNumbers() function, this will return the missing numbers
    as an Array.

    Example:
    Challenge1 Object created with array [4,3,2,7,8,2,3,1]
    findMissingNumbers() output: [5,6]
    */
    console.time('Challenge1');
    const arrayChallenge1 = [4,3,2,7,8,2,3,1];
    const challenge1 = new Challenge1(arrayChallenge1);
    console.log(`Array: `, arrayChallenge1);
    console.log(`Missing numbers: `, challenge1.findMissingNumbers());
    console.timeEnd('Challenge1');
    /* 
    -----Challenge 2----- 
    At the beginning of this second challenge, we have our array of numbers and a target 
    (They can be modified if you want to test the function with another array case). 
    Then, we build the challenge2 object, taking the array and target as parameters to build the object, 
    next we have a call to getIndexesForTarget() function, which will return the indexes of the numbers' array
    and if the numbers are added together will give the target number as a result.

    Example:
    Challenge1 Object created with array [2,7,11,15] and target 9
    getIndexesForTarget() output: [0,1]
    */
    console.time('Challenge2');
    const arrayChallenge2 = [2,7,11,15];
    const target = 9;
    const challenge2 = new Challenge2(arrayChallenge2, target);
    console.log(`Array: `, arrayChallenge2);
    console.log(`Indexes for target ${target}: `, challenge2.getIndexesForTarget());
    console.timeEnd('Challenge2');
}

main();
