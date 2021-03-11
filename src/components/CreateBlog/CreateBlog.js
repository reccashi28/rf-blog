const CreateBlog = () => {
    return(
        <div className="create-blog home">
            <h1>Create Blog</h1>
            <div>
                <form action="submit">
                    <label htmlFor="blog-title"></label>
                    <input type="text"/>
                </form>
            </div>

        </div>
    );
}

export default CreateBlog;