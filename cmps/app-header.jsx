//כמו לניק אבל גם מוסיף קלאס אקטיב 
const { NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full main-layout">
        <div className="header-container">
            <h1>Miss Book App</h1>
            <nav className="app-nav">
                <NavLink to="/">Home page</NavLink> |
                <NavLink to="/book">Books</NavLink> |
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    </header>
}