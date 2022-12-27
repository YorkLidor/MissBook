const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"

export function AddReview({ onSaveReview }) {

    const [review, setReview] = useState({ name: '', rate: '', readAt: '' })
    const navigate = useNavigate()
    const { bookId } = useParams()

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setReview((prevReview) => ({ ...prevReview, [field]: value }))

    }

    function onAddReview(ev) {
        ev.preventDefault()
        onSaveReview(review)
    }

    return <section className="add-review-container full main-layout">


        <form onSubmit={onAddReview}>
            <label htmlFor="name">Name : </label>
            <input type="text"
                name="name"
                id="name"
                placeholder="Enter your name..."
                value={review.name}
                onChange={handleChange}
            />

            <label htmlFor="rate">Rate : </label>
            <input type="number"
                name="rate"
                id="rate"
                placeholder="Enter book rate..."
                value={review.rate}
                onChange={handleChange}
            />

            <label htmlFor="readAt">Read at : </label>
            <input type="number"
                name="readAt"
                id="readAt"
                placeholder="Enter finish read date..."
                value={review.readAt}
                onChange={handleChange}
            />

            <div>
                <button>Save</button>
                <Link to="/book">Cancel</Link>
            </div>
        </form>

    </section>
}

