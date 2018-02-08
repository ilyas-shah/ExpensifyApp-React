const add  = (a, b) => a + b
const getGreeting = (name) => `why hello there, ${name}`

test('should add two numbers', () => {
    const result = add(5, 2)
    expect(result).toBe(7)
});

test('should provide a greeting', () => {
    const greeting = getGreeting('ilyas');
    console.log(greeting)
    expect(greeting).toBe('why hello there, ilyas');
});