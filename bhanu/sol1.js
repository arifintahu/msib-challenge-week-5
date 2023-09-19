function asynchronousRequest(args) {
    return new Promise((resolve, reject) => {
        if (!args) {
            reject(new Error('Whoa! Something went wrong.'));
        } else {
            setTimeout(() => {
                resolve({ body: args + ' ' + Math.floor(Math.random() * 10) });
            }, 500);
        }
    });
}

async function promiseHell() {
    try {
        const response1 = await asynchronousRequest('First');
        console.log(response1.body);

        const response2 = await asynchronousRequest('Second');
        console.log(response2.body);

        const response3 = await asynchronousRequest(null);
        console.log(response3.body);
    } catch (error) {
        console.log(error)
    }
}

promiseHell();