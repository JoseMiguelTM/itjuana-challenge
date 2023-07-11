import Challenge1 from "./challenge1";
import Challenge2 from "./challenge2";

function main() {
    /* -----Challenge 1----- */
    const arrayChallenge1 = [4,3,2,7,8,2,3,1];
    const challenge1 = new Challenge1(arrayChallenge1);
    console.log(`Array: `, arrayChallenge1);
    console.log(`Missing numbers: `, challenge1.findMissingNumbers());
    /* -----Challenge 2----- */
    const arrayChallenge2 = [2,7,11,15];
    const target = 9;
    const challenge2 = new Challenge2(arrayChallenge2, target);
    console.log(`Array: `, arrayChallenge2);
    console.log(`Indexes for target ${target}: `, challenge2.getIndexesForTarget());
}

main();
