export default class Challenge1 {
    private numsArray: number[];
    private missingNumbers: number[];

    constructor(numsArray: number[]) {
        this.numsArray = numsArray;
        this.missingNumbers = [];
    }

    findMissingNumbers(): number[] {
        const maximum = this.numsArray.length;
        const numbersSet: Set<Number> = new Set(this.numsArray);
        for(let index = 1; index <= maximum; index++) {
            if(!numbersSet.has(index)) {
                this.missingNumbers.push(index);
            }
        }
        return this.missingNumbers;
    }
}