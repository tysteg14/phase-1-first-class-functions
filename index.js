function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function(parameter) {
        console.log(`Hello ${parameter}`);
    };
}
