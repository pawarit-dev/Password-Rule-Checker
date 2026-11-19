function hasMinimumLength(password) {
    return password.length >= 8;
}

function hasNumber(password) {
    return /\d/.test(password);
}

function hasUppercase(password) {
    return /[A-Z]/.test(password);
}

function getFailedRules(password) {
    const failedRules = [];
    if (!hasMinimumLength(password)) {
        failedRules.push('Minimum length');
    }
    if (!hasNumber(password)) {
        failedRules.push('No number');
    }
    if (!hasUppercase(password)) {
        failedRules.push('No uppercase');
    }
    return failedRules;
}

function validatePassword(password) {
    if (getFailedRules(password).length === 0) {
        return { valid: true, failedRules: [] };
    } else {
        return { valid: false, failedRules: getFailedRules(password) };
    }
}

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));