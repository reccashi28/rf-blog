const BlogsList = ({blogs}) => {
    console.log(blogs)
    return(
        <div>
            <p>{blogs[1].title}</p>
            <h1>hello</h1>
        </div>
    );
}

export default BlogsList;