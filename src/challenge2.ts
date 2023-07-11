/* 
    -----Challenge 2-----
    Execution time in my workstation: 0.686ms
    This class contains the process to find 2 indexes in a given numbers' array whose numbers 
    at those indexes if added together, will result in the given target
    First, we need to create a Challenge2 object and pass the numbers' array and target 
    as parameters as we did in the index.ts
*/
export default class Challenge2 {
    /*
        We have the numbersList array to store the given numbers' array, and the target to store 
        the target of this case.
        These will be initialized in the construtor.
    */
    private numbersList: number[];
    private target: number;

    constructor(numsArray: number[], sumTarget: number) {
        this.numbersList = numsArray;
        this.target = sumTarget;
    }

    /*
        At the beginning we have the indexes array which will store the final result of this function 
        (the two indexes), then we will iterate the numbersList array, the callback contains as values 
        the number item and the index of that number item.
        Next, we apply the slice function, which will take all the elements in our array that will follow 
        after the element in the loop at that moment (index + 1), we append the map function which will 
        iterate over the sliced elements resulting
        Then, we will have the current number and the next ones, and we will compare the sum of both with 
        the target, if these are equivalent we will declare two constant variables, pairElementA, and pairElementB, 
        which will contain the indexes of the numbers whose sum equals to the target number, 
        pairElementB calls to lastIndexOf function to prevent errors if we only have two repeated numbers 
        in the numbersList array.
        Finally, we will check if the indexes array length is not more than 0, if this is true the flow will 
        push the pairElementA and pairElementB to the indexes array, and the sum of both will equal the target.
        The result will be returned.

        Example:
            Array -> [ 2, 7, 11, 15 ]
            forEach loop - indexList is currently 0 (pointing to number 2 in the array)
            The Slice function will return [7, 11, 15] array
            The Map function will iterate over [7, 11, 15] array

            Taking this into consideration, the flow will compare the numbers
                2 with 7 <- this is the solution, at indexes 0 and 1
                2 with 11
                2 with 15
            <Foreach loop moves to the next element, 7, indexList is 1, slice result is [11,15]>
                7 with 11
                7 with 15
            <Foreach loop moves to the next element, 11, indexList is 2, slice result is [15]>
                11 with 15
    */
    getIndexesForTarget(): number[] {
        const indexes: number[] = [];
        this.numbersList.forEach((numberItem, indexList) => {
            this.numbersList.slice(indexList + 1).map(nextNumberItem => {
                if ((numberItem + nextNumberItem) === this.target) {
                    const pairElementA = this.numbersList.indexOf(numberItem);
                    const pairElementB = this.numbersList.lastIndexOf(nextNumberItem);
                    if (!(indexes.length > 0)) {
                        indexes.push(pairElementA, pairElementB);
                    }
                }
            });
        });
        return indexes;
    }
}