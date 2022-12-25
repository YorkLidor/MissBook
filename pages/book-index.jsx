const { useState, useEffect, useRef } = React

import { bookService } from '../services/book.service.js'

import { BookList } from '../cmps/book-list.jsx'
import { BookDetails } from '../cmps/book-details.jsx'
import { PopUpMsg } from '../cmps/pop-up-msg.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'


export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [popUpMsg, setPopUpMsg] = useState('')



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const booksAfetrRemove = books.filter(book => book.id !== bookId)
            setBooks(booksAfetrRemove)
            flashMsg('Book Removed')
        })
    }

    function flashMsg(msg) {
        setPopUpMsg(msg)
        setTimeout(() => {
            setPopUpMsg('')
        }, 3000);
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }

    return <section className='book-index'>
        {popUpMsg && <PopUpMsg msg={popUpMsg} />}

        {!selectedBook && <div>
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books}
                onRemoveBook={onRemoveBook}
                onSelectBook={onSelectBook} />
        </div>
        }

        {selectedBook && <BookDetails book={selectedBook} onGOback={() => setSelectedBook(null)} />}
    </section>
}