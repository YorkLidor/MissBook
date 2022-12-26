const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { BookPreview } from "../cmps/book-preview.jsx"


export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <BookPreview book={book} />

        <button onClick={onGoBack}>Go Back</button>
    </section>
}