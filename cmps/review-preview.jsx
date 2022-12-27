
export function ReviewPreview({ book }) {

    return <div className="review-container">
        {book.reviews && book.reviews.map((review,idx)=>{
            return <div className="review-card" key={idx}>
                <h1>Name: {review.name}</h1>
                <h1>Rate: {review.rate}</h1>
                <h1>Read at: {review.readAt}</h1>
            </div>
        })}
    </div>
}