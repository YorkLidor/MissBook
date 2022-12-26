const { Outlet, Link } = ReactRouterDOM

export function AboutUs() {

    return <section className="about">
        <h3>About aour shop</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi, architecto suscipit iure doloremque minima deserunt exercitationem neque quidem, officia dolor earum quasi possimus quam iusto. Minus sequi aliquid praesentium?</p>

        <nav>
            <Link to="/about">Main</Link> |
            <Link to="/about/team">Team</Link> |
            <Link to="/about/vision">Vision</Link>
        </nav>
        <div className="nested-route">
            <Outlet />
        </div>

    </section>
}
