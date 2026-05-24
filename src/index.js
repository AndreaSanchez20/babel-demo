const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num ** 2);

greet('John');
console.log('Squared numbers:', squaredNumbers);