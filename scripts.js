let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change the code between the comments

const logCalc = () => {
  const isString = typeof calculated === 'string' && !isNaN(calculated);
  const calculatedAsNumber = isString ? parseFloat(calculated) : parseFloat(calculated);
  calculated = (calculatedAsNumber + 1).toString(); // Convert the calculated value back to a string
};

const calcUser = () => {
  logCalc();
  if (parseFloat(calculated) > 2 && !user) {
    user = 'John';
    state = 'requesting';
  }
  if (parseFloat(calculated) > 3) {
    state = 'idle';
  }
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change the code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
