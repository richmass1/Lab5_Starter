// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('test isPhoneNumber 1', () => {
  expect(isPhoneNumber('123-543-8765')).toBe(true);
});

test('test isPhoneNumber 2', () => {
  expect(isPhoneNumber('654-0000')).toBe(true);
});

test('test isPhoneNumber 3', () => {
  expect(isPhoneNumber('hello bro')).toBe(false);
});

test('test isPhoneNumber 4', () => {
  expect(isPhoneNumber('3444)22220099')).toBe(false);
});

// isEmail
test('test isEmail 1', () => {
  expect(isEmail('shaquille@oneal.com')).toBe(true);
});

test('test isEmail 2', () => {
  expect(isEmail('contact@longmontpotioncastle.net')).toBe(true);
});

test('test isEmail 3', () => {
  expect(isEmail('hello bro')).toBe(false);
});

test('test isEmail 4', () => {
  expect(isEmail('yahoo@yahoo.1234')).toBe(false);
});

// isStrongPassword
test('test isStrongPassword 1', () => {
  expect(isStrongPassword('Steve1234')).toBe(true);
});

test('test isStrongPassword 2', () => {
  expect(isStrongPassword('Jimmy999Johns')).toBe(true);
});

test('test isStrongPassword 3', () => {
  expect(isStrongPassword('hello bro')).toBe(false);
});

test('test isStrongPassword 4', () => {
  expect(isStrongPassword('1')).toBe(false);
});

// isDate

test('test isDate 1', () => {
  expect(isDate('22-33-4444')).toBe(true);
});

test('test isDate 2', () => {
  expect(isDate('5-6-2024')).toBe(true);
});

test('test isDate 3', () => {
  expect(isDate('hello bro')).toBe(false);
});

test('test isDate 4', () => {
  expect(isDate('May 6th, 2024')).toBe(false);
});

// isHexColor

test('test isHexColor 1', () => {
  expect(isHexColor('#000000')).toBe(true);
});

test('test isHexColor 1', () => {
  expect(isHexColor('Feefee')).toBe(true);
});

test('test isHexColor 1', () => {
  expect(isHexColor('hello bro')).toBe(false);
});

test('test isHexColor 1', () => {
  expect(isHexColor('392949294')).toBe(false);
});
