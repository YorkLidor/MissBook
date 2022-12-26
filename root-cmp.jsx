const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from './pages/home-page.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { BookEdit } from './pages/book-edit.jsx'
//About pages
import { AboutUs } from './pages/about-us.jsx'
import { AboutIndex } from './cmps/about-index.jsx'
import { Team } from './cmps/team.jsx'
import { Vision } from './cmps/vision.jsx'


export function App() {

    return <Router>
        <section className='full main-layout app'>

            <AppHeader />

            <main>
                <Routes>
                    {/* לפי השורת חיפוש תלך לקומפוננטה המתאימה <Route element={<HomePage />} path='/' /> */}
                    <Route element={<HomePage />} path='/' />

                    <Route element={<AboutUs />} path='/about'>
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Vision />} path="/about/vision" />
                        <Route element={<Team />} path="/about/team" />
                    </Route>

                    <Route element={<BookIndex />} path='/book' />
                    <Route element={<BookEdit />} path='/book/edit' />
                    <Route element={<BookDetails />} path='/book/:bookId' />

                </Routes>
            </main>
        </section>
    </Router>
}