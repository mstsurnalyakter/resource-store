const mullite = (n1,n2,n3) =>{
    return n1 * n2 * n3;
}

mullite(3,2,4);


const sentence = `
I am a web developer.
I love to code.
I love to eat biryani.
`

// console.log(sentence);


const sum = (a,b=5) =>{
    return a + b;
}

// console.log(sum(3));

const friendList = friends =>{
    const evenFriend = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenFriend.push(friend);
        }
    }
    return evenFriend;
}

const friends = ['Surnaly','rita', 'hello','Mst Surnaly Akter'];

// console.log(friendList(friends));
