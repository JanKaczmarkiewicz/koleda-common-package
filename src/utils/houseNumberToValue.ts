const matchLetters = /\D/g;

export const houseNumberToValue = (houseNumber: string): number => {
    const withoutLetters = houseNumber.replace(matchLetters, "");
    return Number.parseInt(withoutLetters, 10);
};
