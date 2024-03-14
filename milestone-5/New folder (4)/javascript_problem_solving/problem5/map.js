const numbers = [3, 2, 4, 2];

const doubleNumbers = numbers.map(num => num*2);

const squareNumbers = numbers.map(num => num * num);

const addFiveNumber = numbers.map(num => num + 5);

const halfNumbers =numbers.map(num => num/2);

const friendsName = ['Tom','Jam','Lato','Alex'];

const lengthFriendName = friendsName.map(len => len.length);

const firstLetter = friendsName.map(letter =>letter[0]);

const lastLetter = friendsName.map(last => last[last.length - 1]);
