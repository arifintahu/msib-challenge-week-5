# Challenge Week 5 - Refactor Callback Hell to Promise Heaven

In this coding challenge, you will have the opportunity to improve the readability and maintainability of a deeply nested asynchronous code structure that uses callback functions. The goal is to refactor the given code, which exhibits the infamous **"Callback Hell"** pattern, into a cleaner and more organized structure using Promises.

```javascript
function asynchronousRequest(args, callback) {
  // Throw an error if no arguments are passed
  if (!args) {
    return callback(new Error('Whoa! Something went wrong.'))
  } else {
    return setTimeout(
      // Just adding in a random number so it seems like the contrived asynchronous function
      // returned different data
      () => callback(null, { body: args + ' ' + Math.floor(Math.random() * 10) }),
      500,
    )
  }
}

// Nested asynchronous requests
function callbackHell() {
  asynchronousRequest('First', function first(error, response) {
    if (error) {
      console.log(error)
      return
    }
    console.log(response.body)
    asynchronousRequest('Second', function second(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
      })
    })
  })
}

// Execute
callbackHell()

```
## Your Task
1. Refactor the `asynchronousRequest` function to return a Promise instead of using callbacks.
2. Rewrite the `callbackHell` function using Promises to eliminate the callback pyramid and achieve a more structured and readable code.
3. Ensure that the refactored code produces the same results as the original code.

## How to Submit
1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-5)
2. Clone forked repository
3. Create a new branch `git checkout -b solution`
4. Create a folder of your nickname `mkdir nickname`
5. Create files `sol.js` in your folder
6. Commit and push your changes
7. Create a Pull Request to original repository
