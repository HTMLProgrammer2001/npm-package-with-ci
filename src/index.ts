/**
 * Check that val is null | undefined
 *
 * @param val
 */
export function isNil(val: any): val is null | undefined {
  return val === null || val === undefined;
}

/**
 * Check that val is array
 *
 * @param val
 */
export function isArray(val: any): val is Array<any> {
  return Array.isArray(val);
}

/**
 * Check that val is object
 *
 * @param val
 */
export function isObject(val: any): val is Object {
  return val === Object(val);
}

/**
 * Return true only if val is null | undefined | '' | empty array | empty object
 *
 * @param val - value to check
 */
export function isEmpty(val: any): val is null | undefined | '' {
  return isNil(val) || val === '' || (isArray(val) && val.length === 0) || (isObject(val) && Object.keys(val).length === 0);
}

/**
 * Join array with given separator
 *
 * @param arr - array of elements
 * @param separator - separator string. ',' by default.
 */
export function join(arr: Array<any>, separator: string = ','): string {
  return arr.join(separator);
}
