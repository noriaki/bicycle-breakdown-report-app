import { sum } from '~/libs/sum';

describe('sample test', () => {
  it('1 + 1 = 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('sum(1, 1) to 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
