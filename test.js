test('My first test', () => {
    expect(Math.max(1, 5, 11)).toBe(11);
});

test('My second test', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});

test('My third test', () => {
    expect(Math.max(1, 5, 12)).toBe(12);
});

test('My fourth test', () => {
    expect(Math.max(1, 5, 14)).toBe(14);
});
