export default class Challenge1 {
    private numbersList: number[];
    private missingNumbers: number[];

    constructor(numsArray: number[]) {
        this.numbersList = numsArray;
        this.missingNumbers = [];
    }

    findMissingNumbers(): number[] {
        const maximum = this.numbersList.length;
        const numbersSet: Set<Number> = new Set(this.numbersList);
        for(let index = 1; index <= maximum; index++) {
            if(!numbersSet.has(index)) {
                this.missingNumbers.push(index);
            }
        }
        return this.missingNumbers;
    }
}