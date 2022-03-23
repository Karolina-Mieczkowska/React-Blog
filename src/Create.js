import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    />
                <label>Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                    ></textarea>
                {!isPending && <button className="btn btn__add">Add Blog</button>}
                {isPending && <button className="btn btn__add" disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;