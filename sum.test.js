const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

//Common matchers
//1. Exact equality

test('2 plus 2 equal to 4', () => {
    expect(2+2).toBe(4);
})

//toBe uses Object.is() to test exact equality. In order to check the value of an object, we can use toEqual()
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});
//toEqual recursively checks every field of an object or array

//Opposite of a matcher
test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 3; a++) {
        for(let b = 1; b < 3; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})