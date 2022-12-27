const { Link } = ReactRouterDOM

import { BookPreview } from './book-preview.jsx'

export function BookList({ books, onRemoveBook }) {

    return <ul className="book-list">
        {
            books.map(book =>
                <div key={book.id} className='book-card'>
                    <BookPreview book={book} />
                    <div>
                        <button onClick={() => onRemoveBook(book.id)}>Remove book</button>
                        <Link to={`/book/${book.id}`}>Book details</Link>
                    </div>
                </div>)
        }
    </ul>
}

