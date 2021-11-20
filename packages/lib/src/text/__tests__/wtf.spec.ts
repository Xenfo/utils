import wtf from '../wtf';

describe('test wtf util', () => {
  it('should respond with valid wtf', () => {
    const result = wtf('Why is wtf a thing? Just because!');

    expect(result).toBe('WhY Is wTf a tHiNg? JuSt bEcAuSe!');
  });
});
