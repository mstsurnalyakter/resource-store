/**
 * creating html element
 * 1. create tag
 * 2. create text
 * 3. using appendText method added text with html tag
 * 4. find parent element
 * 5. add html tag with parent element
 */

// creating h1 element

let heading3 = document.createElement('h1');
let text = document.createTextNode('This heading 3');
let div = document.getElementsByTagName('div')[0];
heading3.appendChild(text);

div.appendChild(heading3);

// creating p element
let para = document.createElement('p');
let text2 = document.createTextNode('This paragraph');
para.appendChild(text2);
div.appendChild(para);

/**
 *      appendChild method added new element below inside the parent element
 * create html tag --> let h3 = document.createElement('h3);
 * create text --> let text = document.createTextNode('This is h3 tag");
 * find parent element --> let div = document.getElementByClassName('.div');
 * added text with html tag --> h3.appendChild(text)
 * added create tag with parent element --> div.appendChild(h3);
 */

// add new element in div 2
let heading2 = document.createElement('h3');
let text3 = document.createTextNode('This is h2');
let div2 = document.getElementsByClassName('div2')[0];
heading2.appendChild(text3);
div2.appendChild(heading2);


// remove element
/**
 * find the remove element
 * find the parent element
 * remove element --> parent.removeChild(deletingElement);
 */

let good_bye = document.getElementsByClassName("good_bye")[0];
let div1 = document.getElementsByClassName('div1')[0];
div1.removeChild(good_bye);

/**
 *      add element in the top of the parent element
 * create new tag --> document.createElement('h3');
 * text create --> document.createTextNode('hello');
 * find parent --> document.getElementsByClassName('.div');
 * find after element ---> document.getElementByTagName('h1')[0];
 * added new element with parent element --> div0.insertBefore(h0, afterElement)
 *
 *
 */
let heading0 = document.createElement('h1');
let text0 = document.createTextNode('Assalamu Alaikum');
let div0 = document.getElementsByClassName('div1')[0];
let h1 = document.getElementsByTagName('h1')[0];
heading0.appendChild(text0);
div0.insertBefore(heading0,h1)