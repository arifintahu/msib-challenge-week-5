// make the same funtion but using Promise 
function asynchronousRequest(args) {
    return new Promise((resolve, reject) => {
        // Checking if the argument is filled
        if (!args) {
            reject("Whoa! Something went wrong.")
        } else {
            setTimeout(function() {
                resolve({ 
                    body: args + ' ' + Math.floor(Math.random() * 10)}   
                );
            }, 500);
        }
    })
}

// Make the function
async function asyncTesting() {
    try {
        const first = await asynchronousRequest('First');
        const second = await asynchronousRequest('Second');
        const third = await asynchronousRequest('Third');

        console.log(first.body, second.body, third.body);
    } catch(e) {
        console.error(e);
    }
}

// Execute the function
asyncTesting();

// Expected Output Will be : 
// First 4 Second 3 Third 5