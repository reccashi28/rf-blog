import './content.css';
import BlogsList from '../BlogsList/BlogsList';

const Content = ({blogs}) => {

console.log(blogs);
    return(
        <div className="content-title">
            <BlogsList  blogs={blogs}/>
        </div>
    );
}

export default Content;