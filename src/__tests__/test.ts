import {isArray, isNil, join} from '../index';

test('isNil function', () => {
  expect(isNil(null)).toBeTruthy();
  expect(isNil(undefined)).toBeTruthy();
  expect(isNil(1)).toBeFalsy();
  expect(isNil({})).toBeFalsy();
  expect(isNil([])).toBeFalsy();
});

test('isArray function', () => {
  expect(isArray(null)).toBeFalsy();
  expect(isArray(undefined)).toBeFalsy();
  expect(isArray(1)).toBeFalsy();
  expect(isArray({})).toBeFalsy();
  expect(isArray([])).toBeTruthy();
});

test('join function', () => {
  expect(join([1, 2])).toBe('1,2');
  expect(join([1, 2], ';')).toBe('1;2');
});
