import Challenge2 from "../challenge2";

describe("Challenge 2", () => {
    test("Get 2 indexes in array [2,7,11,15] to find 9 target", () => {
        const arrayChallenge2 = [2, 7, 11, 15];
        const target = 9;
        const challenge2 = new Challenge2(arrayChallenge2, target);
        challenge2.getIndexesForTarget = jest.fn().mockReturnValue([0, 1]);
        expect(challenge2.getIndexesForTarget()).toStrictEqual([0, 1])
    });
    test("Get 2 indexes in array [3,2,4] to find 6 target", () => {
        const arrayChallenge2 = [3, 2, 4];
        const target = 6;
        const challenge2 = new Challenge2(arrayChallenge2, target);
        challenge2.getIndexesForTarget = jest.fn().mockReturnValue([1, 2]);
        expect(challenge2.getIndexesForTarget()).toStrictEqual([1, 2])
    });
    test("Get 2 indexes in array [3,3] to find 6 target", () => {
        const arrayChallenge2 = [3, 3];
        const target = 6;
        const challenge2 = new Challenge2(arrayChallenge2, target);
        challenge2.getIndexesForTarget = jest.fn().mockReturnValue([0, 1]);
        expect(challenge2.getIndexesForTarget()).toStrictEqual([0, 1])
    });
    test("Get 2 indexes in array [1,9,2,3,5] to find 12 target", () => {
        const arrayChallenge2 = [1, 9, 2, 3, 5];
        const target = 12;
        const challenge2 = new Challenge2(arrayChallenge2, target);
        challenge2.getIndexesForTarget = jest.fn().mockReturnValue([1, 3]);
        expect(challenge2.getIndexesForTarget()).toStrictEqual([1, 3])
    });
});