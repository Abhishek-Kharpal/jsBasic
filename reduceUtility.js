const tripleEvenFiltering = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error();
  }
  numbers.forEach((element) => {
    if (typeof element !== 'number') {
      throw new Error();
    }
  });
  let triple = numbers.map(x => x * 3);
  return triple.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
};

module.exports = { tripleEvenFiltering };