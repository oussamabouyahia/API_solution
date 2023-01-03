class Model {
    constructor() {
        //a state of the model 
        this.blogs = []
    }
     

    // a function to add blogs to the state
    //this function should filter to not add empty blogs
    addBlogs(blogs) { 
        this.blogs = blogs.filter(element=> element.author && element.body && element.title) 
        return this.blogs 
    }
    getBlogs(blogs) {
        return this.blogs
    }
}


export default Model