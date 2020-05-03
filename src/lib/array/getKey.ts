export const getKeys = <
    T extends {}
>(array: T): Array<keyof T> => <Array<keyof T>>Object.keys(array)
