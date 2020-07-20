async function f(x) {
  if (!x) {
    throw new Error('failed!');
  }
  return new Promise((resolve, reject) => {
    resolve(x + 1);
  });
}

/**
 * If the function that you call for some unknown reason throws an error,
 * async keyword will make sure that this will be returned as a rejected promise by your function.
 * It ensures that your function with ALWAYS return a Promise, even when an exception is raised.
 */
f(false)
  .then(result => console.log('f() result:', result))
  .catch(err => console.log('f() async catch err:', err));

function g(x) {
  if (!x) {
    throw new Error('failed!');
  }
  return new Promise((resolve, reject) => {
    resolve(x + 1);
  });
}

/** Uncauth Error: failed! at g */
// g(false)
//   .then(result => console.log('g() result:', result))
//   .catch(err => console.log('g() err:', err));

/**
 * If you skip the async keyword, and your function raised an exception,
 * it will not be converted to a promise, and you need to catch it synchronously.
 */
try {
  g(false)
    .then(result => console.log('g() result:', result))
    .catch(err => console.log('g() sync catch err:', err)); // Never gets called.
} catch (error) {
  console.log('g() sync error:', error);
}
