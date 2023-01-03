import API from '../scripts/api.js'
class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view
        this.author= window.location.search.substr(10), 
        this.view.handleShowForm()
        this.fetch()
        this.view.handleSubmit(this.createBlog.bind(this))
        this.view.handleLogo(this.fetch.bind(this))
        this.view.handleSearch(this.search.bind(this))
    }


    //a function to  get the  data from the api
    fetch() {
        API.readAll('https://react-blogging-app.onrender.com/api/blogs', (data)=>{
        console.log(data)    
        this.model.addBlogs(data)
        this.view.renderBlogs(this.model.getBlogs())
        }, (error)=>{
            console.error(error)
        })
    }

    // a function to send a blog to the api
    createBlog(blog) {
        
        blog.author=this.author
        console.log(blog)
        API.create('https://react-blogging-app.onrender.com/api/blogs',blog, (data)=>{
      console.log(data)
        })
    }
 search(user){
   API.findOne('https://react-blogging-app.onrender.com/api/blogs',user,(data)=>{
    this.model.addBlogs(data)
    this.view.renderBlogs(this.model.getBlogs())
   })

 }


}
export default Controller