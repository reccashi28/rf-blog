import { Link } from 'react-router-dom';

const Navigator = () => {
    return(
        <nav className="navigator">
            <div className="navigation-ul">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/blogs">Blogs</Link>
                <Link className="link" to="/create">New Blog</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navigator;