const sum = require('./sum');
const fetchUserName = require('./asyncExample');

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
});

//Truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

//Numbers
test('two plus two equals four', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//For floating point equality, use toBeCloseTo() instead of toEqual() in order to not have a test depend on a tiny rounding error
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2; 
    // expect(value).toEqual(0.3); this won't work because of rounding error
    expect(value).toBeCloseTo(0.3);
});

//Strings
//We can check strings against regular expressions with toMatch
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//Arrays and iterables
//We can check if an array or iterable contains a particular item using toContain()
const shoppingList = [
    'diapers',
    'keenex',
    'trash bags'
];
test('shopping list has diapers in it', () => {
    expect(shoppingList).toContain('diapers');
    expect(new Set(shoppingList)).toContain('diapers');
});

//Exceptions - If you want to test that a particular function throws an error when it's called, use toThrow
function errorThrowExample() {
    throw new Error('you are using an incompatible version');
}

test('incompatible version', () => {
    expect(errorThrowExample).toThrow();
    expect(errorThrowExample).toThrow(Error);

    //we can also use the exact error message or a regex
    expect(errorThrowExample).toThrow('you are using an incompatible version');
    expect(errorThrowExample).toThrow(/version/);
});


/***************************
Testing Asynchronous code
**************************/

//In JavaScript, it is common to have asynchronous code. In order for Jest to move on to next test, it should know when the code it is testing has completed.
//Jest has several ways to handle this

//Callbacks
test('fetch User name', done => {

    function checkName(data) {
        try {
            expect(JSON.parse(data).name).toMatch(/Leanne/);
            done();
        } catch(error) {
            done(error);
        }  
    }
    
    fetchUserName('https://jsonplaceholder.typicode.com/users/1', checkName);
});

