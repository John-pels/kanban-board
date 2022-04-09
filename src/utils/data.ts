export const arrayLength = (array: Array<any>) => {
    if (Array.isArray(array) && array.length > 0) {
        return true;
    }

    return false;
};
