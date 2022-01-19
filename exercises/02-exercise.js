
//1
const user = {
    name: "Carwi",
    id: 8
}

//2
const book1 = {
    title: 'Lord of the rings: The fellow ship of the Ring',
    author: 'J. R. R. Tolkien',
    isbn: '9780007136599',
    category: 'Fantasy'
    };

const book2 = {
    title: 'A season in Hell',
    author: 'Arthur Rimbaud',
    isbn: '9780821224588',
    category: 'Poem'
    };

//3
user.books = [book1, book2]

//4 
const library = [user];

//5
const book3 = {
    title: 'Lord of the rings: Twin Towers',
    author: 'J. R. R. Tolkien',
    isbn: '9780813527420',
    category: 'Fantasy'
}


console.log(user.books)