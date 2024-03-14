const libraryCatalog = [
  {
    isbn: "9780545010221",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  {
    isbn: "9780439064873",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    isbn: "9780439136365",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
  },
  {
    isbn: "9780439139601",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
  },
];
const isbnToFind = '9780439136365'
const findBookByISBN = libraryCatalog.find(catalog => catalog.isbn === isbnToFind);

if (findBookByISBN) {
    console.log('Book found', findBookByISBN);
} else {
    console.log(`Book not found for ISBN: ${isbnToFind}`);
}