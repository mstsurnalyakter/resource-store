// serial change
// end result = [55, 66, 77, 88, 22, 33, 44];
const serial = [22, 33, 44, 55, 66, 77, 88];
const target = 55;
while(true){
    const firstElement = serial[0];
    if (target === firstElement) {
        break;
    }
    const extractedElement = serial.shift();
    serial.push(extractedElement);
}

console.log(serial);