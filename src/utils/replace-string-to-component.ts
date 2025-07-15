/* eslint-disable prefer-const */
const isRegExp = (re: unknown): re is RegExp => re instanceof RegExp;

const escapeRegExp = (string: string): string => {
    const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    const reHasRegExpChar = new RegExp(reRegExpChar.source);

    return string && reHasRegExpChar.test(string)
        ? string.replace(reRegExpChar, '\\$&')
        : string;
};

const isString = (value: unknown): value is string => typeof value === 'string';

const flatten = <T>(array: T[][] | T[]): T[] =>
    array.reduce<T[]>((acc, item) => acc.concat(item), []);

/**
 * Given a string, replace every substring that matches `match` with the result
 * of calling `fn` on the matched substring. The result is an array with
 * replacements in odd indexes.
 *
 * @param str - Input string
 * @param match - RegExp or string to match
 * @param fn - Function called with each match
 * @returns Array of strings and replacements
 */
const replaceString = (
    str: string,
    match: RegExp | string,
    fn: (substring: string, index: number, offset: number) => unknown
): (string | unknown)[] => {
    let curCharStart = 0;

    if (str === '') return [str];

    if (!isString(str)) {
        throw new TypeError(
            'First argument to react-string-replace#replaceString must be a string'
        );
    }

    const re = isRegExp(match) ? match : new RegExp(`(${escapeRegExp(match)})`, 'gi');

    const result = str.split(re);

    // Apply fn to all odd elements
    for (let i = 1; i < result.length; i += 2) {
        if (result[i] === undefined || result[i - 1] === undefined) {
            console.warn(
                'reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working as expected.'
            );
            continue;
        }

        const curCharLen = result[i].length;
        curCharStart += result[i - 1].length;
        result[i] = fn(result[i], i, curCharStart) as string;
        curCharStart += curCharLen;
    }

    return result;
};

/**
 * Replaces substrings in a string or an array of strings based on a match.
 * If the source is an array, it processes each string element.
 *
 * @param source - Input string or array of strings
 * @param match - RegExp or string to match
 * @param fn - Function called with each match
 * @returns Array of strings and replacements
 */
export const replaceStringToComponent = (
    source: string | (string | unknown)[],
    match: RegExp | string,
    fn: (substring: string, index: number, offset: number) => unknown
): (string | unknown | React.ReactNode)[] => {
    const sourceArray = Array.isArray(source) ? source : [source];

    return flatten(
        sourceArray.map((x) => (isString(x) ? replaceString(x, match, fn) : x))
    );
};


export function normalize(value: string) {
    return value.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}