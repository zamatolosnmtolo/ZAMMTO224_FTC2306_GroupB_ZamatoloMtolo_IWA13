let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
    const isString = typeof calculated === 'string' && !isNaN(calculated);
    const calculatedAsNumber = isString ? parseInt(calculated) : parseFloat(calculated);
    calculated = (calculatedAsNumber + 1).toString();
};

const calcUser = () => {
    logCalc();
    if (calculated === '3') {
        user = 'John';
        state = 'requesting';
    }
    if (calculated > '3') {
        state = 'idle';
    }
};

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
        user = null; // Reset user after logging
    }
};

// Only allowed to change code above

calcUser(); // Call calcUser() once to reach the desired state
checkUser(); // Log the message once

// Subsequent calls to calcUser()
