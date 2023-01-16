const tripleEvenFiltering = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error();
  }
  numbers.forEach((element) => {
    if (typeof element !== 'number') {
      throw new Error();
    }
  });
  const triple = numbers.map(x => x * 3);
  return triple.filter((x) => (x % 2 === 0));
};
module.exports = { tripleEvenFiltering };