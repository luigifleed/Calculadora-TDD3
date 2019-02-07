import { multiplicacion } from './multiplicacion';

describe('multiplicacion', () => {
  it('it should have 2 numbers', () => {
    expect(resta(1,1)).toBe(1);
  })
  it('it should give negative numbers', () => {
    expect(resta(2,-1)).toBe(-2);
  })
  it('it should multiply a number by 0 correctly', () => {
    expect(resta(2,0)).toBe(0);
  })
  it('it should change the sign if they are negative', () => {
    expect(resta(-2,-2)).toBe(4);
  })
  it('it should multiply by decimal numbers correctly', () => {
    expect(resta(2,0.5)).toBe(1);
  })
  it('it should be constant with 0', () => {
    expect(resta(0,0)).toBe(0);
  })
});
