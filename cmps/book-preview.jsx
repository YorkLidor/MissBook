
export function BookPreview({ book }) {

    return <article className="book-preview">
        <h2>book title: {book.title}</h2>
        <h3>Description: {book.description}</h3>
        <h3>Price: {book.listPrice.amount}</h3>
    </article>
}