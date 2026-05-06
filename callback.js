// Scenario: Callback Hell

// A common issue in JavaScript is "callback hell," where multiple nested callbacks make the code difficult to read and maintain. Here's an example of callback hell:

/**
 * 1. Register a user
 * 2. Send a welcome email
 * 3. Login the user
 * 4. Get user data
 * 5. Display user data
 */

// function register(callback) {
//     setTimeout(() => {
//         console.log('User registered');
//         callback()
//     }, 2000);

// };

// function sendEmail(callback) {
//     setTimeout(() => {
//         console.log('Welcome email sent');
//         callback();
//     }, 3000);
// };

// function login(callback) {
//     setTimeout(() => {
//         console.log('user looged in');
//         callback();
//     }, 2000);
// };

// function getUserData(callback) {
//     setTimeout(() => {
//         console.log('Got user data');
//         callback();
//     }, 1000);
// };

// function displayUserData() {
//     setTimeout(() => {
//         console.log('Displaying user data');
//     }, 1000);
// }

// callback hell
// register(function() {
//     sendEmail(function() {
//         login(function() {
//             getUserData(function() {
//                 displayUserData();
//             });
//         });
//     });
// });


// The above code is an example of callback hell, where each function is nested inside the previous one, making it difficult to read and maintain. To avoid callback hell, we can use Promises or async/await to handle asynchronous operations in a more readable and maintainable way.

// Example using Promises


function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('User registered');
        resolve();
    }, 2000);
    });
};

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Welcome email sent');
            resolve();
        }, 3000);
    });
};

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('user looged in');
            resolve();
        }, 2000);
    });
};

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got user data');
            resolve();
        }, 1000);
    });
};

function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Displaying user data');
            resolve();
        }, 1000);
    });
}

// Using Promises
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((error) => {
//         console.error(error);
//     });

// Using async/await
async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log(err);
    }
}

authenticate();

console.log('This will run before the asynchronous operations are completed');