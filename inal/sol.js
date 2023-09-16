function asynchronousRequest(args) {
    return new Promise((resolve, reject) => {
      if (!args) {
        reject(new Error("Whoa! Something went wrong."));
      } else {
          setTimeout(() =>{
            // Just adding in a random number so it seems like the contrived asynchronous function
            // returned different data
            resolve({body: args + " " + Math.floor(Math.random() * 10)})
          },500)
      }
    });
  }

// Nested asynchronous requests
async function callbackHell() {
  try {
    const satu = await asynchronousRequest("first");
    console.log(satu.body)
    const dua = await asynchronousRequest("second");
    console.log(dua.body)
    const tiga = await asynchronousRequest(null);
    console.log(tiga.body)
  } catch (e) {
    console.error(e);
  }
}
callbackHell();

