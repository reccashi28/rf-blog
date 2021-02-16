import './content.css';
import BlogsList from '../BlogsList/BlogsList';

const Content = ({blogs}) => {

console.log(blogs);
    return(
        <div className="content-title">
            <h1>{blogs[0].title}</h1>
            <BlogsList  blogs={blogs}/>
        </div>
    );
}

export default Content;