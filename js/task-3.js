function checkForSpam(message) {}

function checkPassword(password) {
    const correctPassword = 'jqueryismyjam'

    password = correctPassword
        ? `Access granted`
        : `Access denied, wrong password!`
}

console.log(checkPassword('jqueryismyjam'))
console.log(checkPassword('angul4r1sl1f3'))
console.log(checkPassword('r3actsux'))
