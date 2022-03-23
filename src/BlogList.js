import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const BlogList = () => {
    
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="blog-list">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && blogs.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>
                            {(Array.from(blog.body).slice(0,122).join('')) + '...'}
                            <Link to={`/blogs/${blog.id}`}>Read More</Link>
                        </p>
                    </div>
                ) 
            })}
        </div>
    );
}
 
export default BlogList;