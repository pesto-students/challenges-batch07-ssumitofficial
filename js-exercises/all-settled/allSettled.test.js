import { allSettled } from './allSettled';

describe('allSettled', () => {
      test('The function should return a array', () => {
        expect(allSettled() instanceof Array).toBe(true);
      });

    test('Promise call should return an array of values from promises', () => {
        const p1 = new Promise(res => res(1));
        const p2 = 2;
        const p3 = Promise.resolve(3);
        return expect(allSettled([Promise.resolve(33), +
            new Promise(resolve => setTimeout(() => resolve(66), 0)),
            99,
        Promise.reject(new Error('an error'))
        ])).resolves.toEqual([
            { status: "fulfilled", value: 33 },
            { status: "fulfilled", value: 66 },
            { status: "fulfilled", value: 99 },
            { status: "rejected", reason: 'Error: an error' }
        ]);
    });
});
