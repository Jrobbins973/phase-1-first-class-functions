

function receivesAFunction(cb){
    console.log(cb())
}

function returnsANamedFunction() {
    const func = () => {}
    return func
}

function returnsAnAnonymousFunction(){
    return function () {}
}
