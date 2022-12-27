const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { googleBookService } from "../services/google-book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { utilService } from "../services/util.service.js"

export function AddBook() {

    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const debounceLoadFromGoogle = useRef(null)

    useEffect(() => {
        loadBooksFromGoogle()
        debounceLoadFromGoogle.current = utilService.debounce(loadBooksFromGoogle)
    }, [])

    function loadBooksFromGoogle(txt = '') {
        googleBookService.query(txt)
            .then((books) => {
                setBooks(books)
            })
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        let { value } = target
        debounceLoadFromGoogle.current(value)
    }

    function onAddBook(book) {
        console.log('book fron onaddbook:', book)
        bookService.save(book).then((book) => {
            showSuccessMsg('Book saved!')
            navigate('/book')
        })
    }

    return <section className="book-edit google-book-add">

        <h2>Add Book From Google</h2>

        <form onSubmit={onAddBook}>
            <label htmlFor="title">Serch by title : </label>
            <input type="text"
                name="title"
                id="title"
                placeholder="Enter book title..."
                onChange={handleChange}
            />
        </form>

        <ul>
            {books && books.map((book, idx) => {
                return <li key={book.title + idx}>
                    {book.title}
                    <button onClick={() => onAddBook(book)}>+</button>
                </li>
            })}
        </ul>

    </section>
}