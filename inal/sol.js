function asynchronousRequest(args) {
  return new Promise((resolve, reject) => {
    if (!args) {
      reject(new Error("Whoa! Something went wrong."));
    } else {
      setTimeout(() => {
        resolve({ body: args + " " + Math.floor(Math.random() * 10) });
      }, 500);
    }
  });
}

async function callbackHell() {
  try {
    const one = await asynchronousRequest("first");
    console.log(one.body);
    const two = await asynchronousRequest("second");
    console.log(two.body);
    const three = await asynchronousRequest(null);
    console.log(three.body);
  } catch (e) {
    console.error(e);
  }
}
callbackHell();
