import { BookPreview } from './book-preview.jsx'

export function BookList({ books, onRemoveBook, onSelectBook }) {

    return <ul className="book-list">
        {
            books.map(book => <div key={book.id} className='book-card'>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove book</button>
                    <button onClick={() => onSelectBook(book.id)}>Details</button>
                </div>
            </div>)
        }
    </ul>
}

