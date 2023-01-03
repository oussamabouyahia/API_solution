

import Form from '../scripts/blog.js'

class View {

    constructor() {
        //use of jquery to get the elements
        this.$button = $('#button')
        this.$dialog=$('#dialog')
        this.$blogs=$('#blogs')
        this.$logo=$('#logo')
        this.$searchButton=$('#searchButton')
        this.$search=$('#search')
        this.$send=$('#send')
    
    }

    //************************************  DO NOT MODIFY THIS CODE  ************************************

    //handle popup events 
    handleShowForm() {
        this.$button.on('click', this.Popup.bind(this))
    }

    Popup() {
        this.$dialog.dialog({
            height: 450,
            minWidth: 800,
            resizable: false,
            close: () => {
               this.$button.removeClass('nav-selected')
               this.$button.addClass('nav-unselected')
                $('#blog-title').val('')
                $('#blog-body').val('')
            },
            open: () => {
               this.$button.removeClass('nav-unselected')
               this.$button.addClass('nav-selected')
            }
        });
    }

    //************************************ START FROM HERE  ************************************

    // dynamic rendering of the data
    renderBlogs(blogs) {
        this.$blogs.html('')
        blogs.forEach(blog => {
            this.$blogs.append(Form.render(blog))
        });
    }

    // handle logo click event
    handleLogo(callback){
        this.$logo.on('click',callback)
    }

    //handle the form submit event 
    handleSubmit(callback) {
        this.$send.on('submit',(event)=>{
            event.preventDefault()
            console.log(event.target.title)
            var ourBlog = {
                title:event.target.title.value ,
                body: event.target.body.value
                }
                callback(ourBlog)
                this.$dialog.dialog('close')
        })
    }

    handleSearch(callBack){
        this.$searchButton.on('click',(event)=>{
            var userName =this.$search.val()
            callBack(userName)
            this.$search.val("")
        })
    }


    



}

export default View