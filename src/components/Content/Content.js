import './content.css';
// import BlogsList from './BlogsLists/BlogsList';

const Content = ({blogs}) => {

console.log(blogs);
    return(
        <div className="content-title">
            <h1>{blogs[0].title}</h1>
            <h5>hello</h5>
            <h5>hello</h5>
            {/* <BlogsList blogs={blogs} /> */}
        </div>
    );
}

export default Content;