async function main() {
  try {
    console.log('Simple Calculator — add, subtract, multiply, divide, average\n');
    const count = await getPositiveInt('How many numbers will you enter? ');
    const nums = [];
    for (let i = 0; i < count; i++) {
      const n = await getNumber(`Enter number #${i + 1}: `);
      nums.push(n);
    }

    console.log('\nCalculating...\n');

    const results = {};
    results.sum = add(nums);
    results.product = multiply(nums);

    try {
      results.subtraction = subtract(nums);
    } catch (e) {
      results.subtraction = `Error: ${e.message}`;
    }

    try {
      results.division = divide(nums);
    } catch (e) {
      results.division = `Error: ${e.message}`;
    }

    results.average = average(nums);

    console.log(`Numbers: ${nums.join(', ')}`);
    console.log(`Sum: ${results.sum}`);
    console.log(`Product: ${results.product}`);
    console.log(`Subtraction (left-to-right): ${results.subtraction}`);
    console.log(`Division (left-to-right): ${results.division}`);
    console.log(`Average: ${results.average}`);
  } catch (err) {
    console.error('Unexpected error:', err.message);
  } finally {
    rl.close();
  }
}

main(); 

//Done my part
