
const BlogsList = ({blogs}) => {
    // console.log(blogs)
    return(
        <div>
           { blogs.map( (blog) => (
               <div className="bloglist-content">
                    <h5>{blog.title}</h5>
                    <p>{blog.content}</p>
                    <button>Delete</button>
               </div>
                
            )) }
        </div>
    );
}

export default BlogsList;