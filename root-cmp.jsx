const { useState } = React

import { AboutUs } from './pages/about-us.jsx'
import { HomePage } from './pages/home-page.jsx'
import { BookIndex } from './pages/book-index.jsx'

// import { Header } from './cmps/header.jsx'

export function App() {

    const [page, setPage] = useState('book')

    return <section>
        <header className="app-header full main-layout">
            <h1>Miss Books App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home Page </a> |
                <a href="#" onClick={() => setPage('about')}> About us </a> |
                <a href="#" onClick={() => setPage('book')}> Books</a>
            </nav>
        </header>


            <main>
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'book' && <BookIndex />}
            </main>
    </section>
}