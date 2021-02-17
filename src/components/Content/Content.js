import './content.css';
import BlogsList from '../BlogsList/BlogsList';

const Content = ({blogs, handleDelete}) => {

console.log(blogs);
    return(
        <div className="content-title">
            <BlogsList  blogs={blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Content;