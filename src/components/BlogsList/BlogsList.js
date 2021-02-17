
const BlogsList = ({blogs, handleDelete}) => {
    // console.log(blogs)
    return(
        <div>
           { blogs.map( (blog) => (
               <div className="bloglist-content" key={blog.id}>
                   <div>
                        <h5 className="blogpost-title">{blog.title}</h5>
                        <p>{blog.content}</p>
                   </div>
                    
                    <button className="delete-post" onClick= { () => handleDelete(blog.id)}>Delete</button>
               </div>
                
            )) }
        </div>
    );
}

export default BlogsList;