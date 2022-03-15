import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="create">New Blog</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;