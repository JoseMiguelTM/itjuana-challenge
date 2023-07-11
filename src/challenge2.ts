export default class Challenge2 {
    private numbersList: number[];
    private target: number;

    constructor(numsArray: number[], sumTarget: number) {
        this.numbersList = numsArray;
        this.target = sumTarget;
    }

    getIndexesForTarget(): number[] {
        const indexes: number[] = [];
        this.numbersList.forEach((numberItem, indexList) => {
            this.numbersList.slice(indexList + 1).map(nextNumberItem => {
                if ((numberItem + nextNumberItem) === this.target) {
                    const pairElementA = this.numbersList.indexOf(numberItem);
                    const pairElementB = this.numbersList.lastIndexOf(nextNumberItem);
                    if (indexes.length > 0) {
                        console.log('Array contains more than 1 solution.')
                    } else {
                        indexes.push(pairElementA, pairElementB);
                    }
                }
            });
        });
        return indexes;
    }
}