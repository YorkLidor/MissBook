const { useState, useEffect, useRef } = React
const { Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'

import { BookList } from '../cmps/book-list.jsx'
import { BookDetails } from './book-details.jsx'
import { PopUpMsg } from '../cmps/pop-up-msg.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'


export function BookIndex() {
    const [isLoading, setIsLoading] = useState(false)

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])

    const [popUpMsg, setPopUpMsg] = useState('')

    useEffect(() => {
        setIsLoading(true)
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
            setIsLoading(false)

        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            //אחרי שהמחיקה הצליחה מהמסד נתונים תסנן לי את הספר הזה החוצה ותרנדר מחדש
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

    return <section className='book-index'>
        {popUpMsg && <PopUpMsg msg={popUpMsg} />}

        <div>
            <BookFilter onSetFilter={onSetFilter} />

            <Link to='/book/edit'>Add Book</Link>

            {!isLoading && <BookList books={books}
                onRemoveBook={onRemoveBook}
                onSelectBook={()=>{}} />}
            {isLoading && <div>Loading...</div>}
        </div>

    </section>
}