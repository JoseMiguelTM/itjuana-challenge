/* 
    -----Challenge 1-----
    Execution time in my workstation: 4.333ms
    This class contains the process to find the missing numbers in a given numbers' array
    First, we need to create a Challenge1 object and pass the numbers' array as parameter
    as we did in the index.ts
*/
export default class Challenge1 {
    /*
        We have the numbersList array to store the given numbers' array, this will be initialized 
        in the construtor, also we have missingNumbers array, this will store the missing numbers
        at the end of the findMissingNumbers() function.
    */
    private numbersList: number[];
    private missingNumbers: number[];

    constructor(numsArray: number[]) {
        this.numbersList = numsArray;
        this.missingNumbers = [];
    }

    /*
        We need to know the maximum number in the numbersList array, this can be done by getting 
        the length of the array.
        Then, a numbers' Set (Set<number>) is created, this Set will remove all the duplicated numbers.
        We will iterate from 1 to the maximum constant, inside our loop we will ask if the Set doesn't have 
        every index in the loop runtime, if this is correct the index iterating at that moment 
        (that now will be one of our missing numbers) will be pushed to the missingNumbers array, 
        at the end we will return the same array.
    */
    findMissingNumbers(): number[] {
        const maximum = this.numbersList.length;
        const numbersSet: Set<Number> = new Set(this.numbersList);
        for (let index = 1; index <= maximum; index++) {
            if (!numbersSet.has(index)) {
                this.missingNumbers.push(index);
            }
        }
        return this.missingNumbers;
    }
}