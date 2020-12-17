// IMPORT MODULES under test here:
// import { example } from '../example.js';
import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('compareNumbers tests', (assert) => {

    const correctNumber = 10;
    
    const result1 = compareNumbers(3, correctNumber);
    assert.equal(result1, 1);

    const result2 = compareNumbers(15, correctNumber);
    assert.equal(result2, -1);

    const result3 = compareNumbers(10, correctNumber);
    assert.equal(result3, 0);
});
