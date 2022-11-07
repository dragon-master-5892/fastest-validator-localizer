import {doSomeStuff} from '../src';
test('My Greeter', () => {
  expect(doSomeStuff()).toBe('B');
  expect(doSomeStuff('', '', ['X'])).toBe('A');
});
