/* eslint-disable no-eval */

const algebra = (
  equation: string | number,
  _knownValues: { name: string; value: number }[]
) => {
  const isAlgebra = (equation: string) => {
    if (equation.match(/[a-zA-Z]+/g)) return true;

    return false;
  };

  if (typeof equation === 'number') return equation;
  if (!isAlgebra(equation)) return eval(equation) as number;

  const brackets = equation.match(/\([\w\+\-\*\/]+\)/g);
  if (brackets) return brackets;

  return null;
};

export default algebra;
