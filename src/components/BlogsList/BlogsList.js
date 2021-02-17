
const BlogsList = ({blogs, handleDelete}) => {
    // console.log(blogs)
    return(
        <div>
           { blogs.map( (blog) => (
               <div className="bloglist-content" key={blog.id}>
                    <h5>{blog.title}</h5>
                    <p>{blog.content}</p>
                    <button onClick= { () => handleDelete(blog.id)}>Delete</button>
               </div>
                
            )) }
        </div>
    );
}

export default BlogsList;