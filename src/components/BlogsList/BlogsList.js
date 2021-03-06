
const BlogsList = ({blogs, handleDelete}) => {
    // console.log(blogs)
    return(
        <div className="blog">
           { blogs.map( (blog) => (
               <div className="bloglist-content" key={blog.id}>
                   <div>
                        <h5 className="blogpost-title">{blog.id}. {blog.title}</h5>
                        <p>{blog.body}</p>
                   </div>
                    
                    <button className="delete-post" onClick= { () => handleDelete(blog.id)}>Delete</button>
               </div>
                
            )) }
        </div>
    );
}

export default BlogsList;