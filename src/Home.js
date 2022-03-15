import Image from './Image';

const HomePage = () => {
    return (
        <div className="home-page">
            <Image/>
            <h1>Keep the Moment</h1>
            <button className="btn btn__add">Add Blog</button>
        </div>
    );
}
 
export default HomePage;