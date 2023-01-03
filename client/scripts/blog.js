var Form = {

    render: _.template(`
            <div class='blog-list-item'>
                <div class="blog-list-item-title"><%= title %>  </div>
                <div class="blog-list-item-byline">
                    <span class="blog-list-item-byline-author"> <%= author %> </span>
                </div>
                <span class="blog-list-item-lede"> <%= body %> </span>
            </div>

      `)

};


export default Form