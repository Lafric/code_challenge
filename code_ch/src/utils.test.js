import { Transformfibonacci } from "./utils";


test('text closest fibonacci', () => {
    expect(Transformfibonacci(11)).toBe(13);
    expect(Transformfibonacci(13)).toBe(13);
    expect(Transformfibonacci(22)).toBe(21);
  });