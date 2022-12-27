const { useEffect, useState } = React
const { useParams, useNavigate} = ReactRouterDOM

import { showSuccessMsg } from "../services/event-bus.service.js"
import { bookService } from "../services/book.service.js"


import { BookPreview } from "../cmps/book-preview.jsx"
import { AddReview } from "../cmps/add-review.jsx"
import { ReviewPreview } from "../cmps/review-preview.jsx"


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

    function onSaveReview(review) {
        bookService.addReview(book.id, review).then((book) => {
            showSuccessMsg('Review saved!')
            setBook(book)
        })
        console.log('Review Saved!!!')
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <BookPreview book={book} />
        
        <AddReview onSaveReview={onSaveReview} />

        <ReviewPreview book={book} />


        <button onClick={onGoBack}>Go Back</button>
    </section>
}