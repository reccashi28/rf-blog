const BlogsList = ({blogs}) => {
    // console.log(blogs)
    return(
        <div>
            <h2>{blogs[1].title}</h2>
            <p>{blogs[1].content}</p>
        </div>
    );
}

export default BlogsList;