const { useState, useEffect, useRef } = React

import {LongTxt} from './long-txt.jsx'

export function BookPreview({ book }) {

    const [isReadMore, setReadMore] = useState(true)
    let length = 100

    function checkPageCount(pageCount) {
        if (pageCount < 100) {
            return 'Light Reading'
        } else if (pageCount > 200 && pageCount < 500) {
            return 'Descent Reading'
        } else if (pageCount > 500) {
            return 'Serious Reading'
        } else return ''
    }

    function checkPublishedDate(publishedDate) {
        const currYear = new Date().getFullYear()
        const bookOld = currYear - publishedDate
        if (bookOld < 1) {
            return 'New'
        } else if (bookOld > 10) {
            return 'Vintage'
        } else return ''
    }

    function returnPriceColorClassName(price) {
        if (price > 150) return 'red-price'
        if (price < 20) return 'green-price'
        return ''
    }

    return <article className="book-preview">
        <img className='preview-book-img' src={`${book.thumbnail}`} />
        <h2>{book.title}</h2>
        {book.listPrice.isOnSale && <img className='preview-sale-icon' src='./images/sale-icon.png' />}
        <h3>Subtitle: {book.subtitle}</h3>
        <LongTxt txt={book.description} length={length} isReadMore={isReadMore}/>

        {book.description.length > length && <a className='read-more-a' onClick={() => { setReadMore(!isReadMore) }}>
            {isReadMore && 'Read More'}
            {!isReadMore && 'Read Less'}
        </a>}
        {checkPageCount(book.pageCount) && <h3>{checkPageCount(book.pageCount)}</h3>}
        {checkPublishedDate(book.publishedDate) && <h3>{checkPublishedDate(book.publishedDate)}</h3>}
        <h3>Price: <span className={returnPriceColorClassName(book.listPrice.amount)}>{book.listPrice.amount}</span></h3>

    </article>
}