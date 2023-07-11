import Challenge1 from "./challenge1";

function main() {
    const arrayChallenge1 = [4,3,2,7,8,2,3,1];
    const challenge1 = new Challenge1(arrayChallenge1);
    console.log(`Array: `, arrayChallenge1);
    console.log(`Missing numbers: `, challenge1.findMissingNumbers());
}

main();
