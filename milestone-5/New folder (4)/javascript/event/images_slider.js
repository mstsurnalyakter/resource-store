
let image = document.getElementsByTagName('img')[0];
const photos = ["./images/banner.png","./images/bg.png","./images/slider-2.jpg"];

let count = 0;

const previous = () =>{
    count--;
    if (count < 0) {
        count = photos.length - 1;
        image.src = photos[count];
    }else{
        image.src = photos[count];
    }
}

const next = () =>{
    count++;
    if (count >= photos.length) {
      count = 0;
      image.src = photos[count];
    } else {
      image.src = photos[count];
    }
}
