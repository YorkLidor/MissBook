
export function BookDetails({book,onGOback}){

    return <section className="book-details">
        <h1>Book name: {book.title}</h1>

        <button onClick={onGOback}>Go Back</button>
    </section>
}