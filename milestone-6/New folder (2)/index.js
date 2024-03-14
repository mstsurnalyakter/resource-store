function foo() {
    throw new Error("Opp")
}

function bar() {
    foo()
}
function baz() {
    bar()
}

baz()
