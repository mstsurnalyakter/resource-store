/**
 * Callback and higher order function
 */

function square(x){
    console.log(`Square of ${x}: ${x*x}.`);
}

square(3)

const y = square;
y(4)

function triple(s) {
    console.log(`Triple ${s}: ${s*s}`);
}

const w = triple;

w(4)

const double = e =>{
    console.log(`Double ${e}: ${e * 2}`);
}

const d = double;
d(2)

const sum = (a, b)=>{
    console.log(`Sum: ${a + b}`);
}

const s = sum;

s(4,3)

const higherOrderFunction = (num,callback) =>{
    callback(num)
}

higherOrderFunction(6,square);