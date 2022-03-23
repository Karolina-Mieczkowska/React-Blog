import { useNavigate } from 'react-router';
import Image from './Image';

const HomePage = () => {

    const history = useNavigate();

    const handleClick = () => {
        history('/create')
    }

    return (
        <div className="home-page">
            <Image/>
            <h1>Keep the Moment</h1>
            <button className="btn btn__add" onClick={handleClick}>Add Blog</button>
        </div>
    );
}
 
export default HomePage;