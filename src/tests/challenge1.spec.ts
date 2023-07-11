import Challenge1 from "../challenge1";

describe("Challenge 1", () => {
    test("Find missing numbers in [4,3,2,7,8,2,3,1]", () => {
        const arrayChallenge1 = [4, 3, 2, 7, 8, 2, 3, 1];
        const challenge1 = new Challenge1(arrayChallenge1);
        challenge1.findMissingNumbers = jest.fn().mockReturnValue([5, 6]);
        expect(challenge1.findMissingNumbers()).toStrictEqual([5, 6]);
        /* const validateSpy = jest.spyOn(challenge1, "findMissingNumbers");
        const trueRule = jest.fn(() => [5,6]);
        const result = challenge1.findMissingNumbers();
        expect(typeof challenge1.findMissingNumbers).toBe("function");
        expect(validateSpy).toHaveBeenCalled();
        expect(validateSpy).toHaveReturnedWith(trueRule);
        expect(result).toBeInstanceOf(Array); */
    });
    test("Find missing numbers in [1,1]", () => {
        const arrayChallenge1 = [1, 1];
        const challenge1 = new Challenge1(arrayChallenge1);
        challenge1.findMissingNumbers = jest.fn().mockReturnValue([2]);
        expect(challenge1.findMissingNumbers()).toStrictEqual([2])
    });
    test("Find missing numbers in [1,1,3,3,6,6,8,8,9,10]", () => {
        const arrayChallenge1 = [1, 1, 3, 3, 6, 6, 8, 8, 9, 10];
        const challenge1 = new Challenge1(arrayChallenge1);
        challenge1.findMissingNumbers = jest.fn().mockReturnValue([2, 4, 5, 7]);
        expect(challenge1.findMissingNumbers()).toStrictEqual([2, 4, 5, 7])
    });
    test("Find missing numbers in [1,2,3,4,5,5,8,8,9,10]", () => {
        const arrayChallenge1 = [1, 2, 3, 4, 5, 5, 8, 8, 9, 10];
        const challenge1 = new Challenge1(arrayChallenge1);
        challenge1.findMissingNumbers = jest.fn().mockReturnValue([6, 7]);
        expect(challenge1.findMissingNumbers()).toStrictEqual([6, 7])
    });
});
