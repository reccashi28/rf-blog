import { Link } from 'react-router-dom';

const Navigator = () => {
    return(
        <nav className="navigator">
            <ul className="navigation-ul">
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navigator;