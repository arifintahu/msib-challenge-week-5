// make the same funtion but using Promise 
function asynchronousRequest(args) {
    return new Promise((resolve, reject) => {
        // Checking if the argument is filled
        if (!args) {
            reject("You Have to Set Something")
        } else {
            setTimeout(function() {
                resolve(
                    args + ' ' + Math.floor(Math.random() * 10)   
                )
            }, 500);
        }
    })
}

// Make the Promise to using the function and print it
Promise.allSettled([ asynchronousRequest('First'), asynchronousRequest('Second'), asynchronousRequest('Third')])
.then((result) => console.log(result));
/* 
Expected Output will be [
  { status: 'fulfilled', value: 'First 1' },
  { status: 'fulfilled', value: 'Second 8' },
  { status: 'fulfilled', value: 'Third 5' }
]
*/

/* 
We can also make async function like this below one if the result will depends each other
Since the result only build by using the function and take random argument we made,
So we're gonna using the Promise.allSettled()

async function asyncTesting() {
    try {
        const first = await asynchronousRequest('First');
        const second = await asynchronousRequest('Second');
        const third = await asynchronousRequest('Third');

        console.log(first, second, third);
    } catch(e) {
        console.error(e);
    }
}

Execute the function
asyncTesting();
*/