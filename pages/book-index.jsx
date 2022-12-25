const { useState, useEffect, useRef } = React

import { BookService } from '../services/book.service.js'

import { BookList } from '../cmps/book-list.jsx'
import { BookDetails } from '../cmps/book-details.jsx'
import { PopUpMsg } from '../cmps/pop-up-msg.jsx'

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [popUpMsg,setPopUpMsg] = useState('')

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        BookService.query().then(books => {
            setBooks(books)
        })
    }

    function onRemoveBook(bookId) {
        console.log('removeing', bookId)
        BookService.remove(bookId).then(() => {
            const booksAfetrRemove = books.filter(book => book.id !== bookId)
            setBooks(booksAfetrRemove)
            flashMsg('Book Removed')
        })
    }

    function flashMsg(msg){
        setPopUpMsg(msg)
        setTimeout(() => {
            setPopUpMsg('')
        }, 3000);
    }

    function onSelectBook(bookId) {
        BookService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }

    function onGOback() {
        setSelectedBook(null)
    }



    return <section className='book-index'>
        {popUpMsg && <PopUpMsg msg={popUpMsg}/>}
        {!selectedBook && <BookList books={books}
            onRemoveBook={onRemoveBook}
            onSelectBook={onSelectBook} />}

        {selectedBook && <BookDetails book={selectedBook} onGOback={onGOback} />}
    </section>
}