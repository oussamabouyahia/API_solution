import Model from '../src/model.js'
import View from '../src/view.js'
import Controller from '../src/controller.js'
import Blog from '../scripts/blog.js'
import api from '../scripts/api.js'





describe("Model functions", function () {
  describe('AddBlogs', function () {
    it("should add blogs to the state ", function () {
      var model = new Model();
      model.addBlogs([{ body: 'blog body', title: 'blog title' }])
      expect(model.blogs).toEqual([{ body: 'blog body', title: 'blog title' }]);
    });

    it("sould contain filtering to not add empty blogs or blogs with empty titles ", function () {
      var model = new Model();
      model.addBlogs([{ body: '', title: 'blog title' }, { body: 'blog body', title: '' }, { body: 'blog body', title: 'blog title' }])
      expect(model.blogs).toEqual([{ body: 'blog body', title: 'blog title' }]);
    });

    it("sould replace all the old items in the state ", function () {
      var model = new Model();
      model.addBlogs([{ body: 'blog body', title: 'blog title' }])
      model.addBlogs([{ body: 'new blog body', title: ' new blog title' }])
      expect(model.blogs).toEqual([{ body: 'new blog body', title: ' new blog title' }]);
    });

  })
})





describe("View functions", function () {
  describe('renderBlogs', function () {
    it("should  render blogs to the dom ", function () {
      var view = new View();
      view.renderBlogs([{ body: 'blog body', author: 'anonymos', title: 'blog title', createdAt: '02/02/2000' }])
      var blogs = $('#blogs').children().length
      expect(blogs).toEqual(1)
    });

    it("should  empty the dom before rendering ", function () {
      var view = new View();
      view.renderBlogs([{ body: 'blog body', author: 'anonymos', title: 'blog title', createdAt: '02/02/2000' }])
      view.renderBlogs([{ body: ' new blog body', author: 'anonymos', title: 'blog title', createdAt: '02/02/2000' }])
      var blogs = $('#blogs').children().length
      expect(blogs).toEqual(1)
    });

    it("should  use the render function from blog.js file   ", function () {
      var view = new View();
      spyOn(Blog, 'render')
      view.renderBlogs([{ body: 'blog body', author: 'anonymos', title: 'blog title', createdAt: '02/02/2000' }])
      expect(Blog.render).toHaveBeenCalled()
    });
  })
})


describe("ajax functions", function () {
  describe('readAll', function () {
    it('should return the data from the api', function(done) {
      api.readAll('https://blog-server-rbk.herokuapp.com/api/test',function(result) {
        expect(result).toEqual('test passed');
        done();
      });
    });
  })
})




describe("controller functions", function () {
  describe('fetch', function () {
    it("should  use the readAll function from api.js to get data from the api ", function () {
      var controller = new Controller(new Model(), new View());
      spyOn(api, 'readAll')
      controller.fetch()
      expect(api.readAll).toHaveBeenCalled()
    })
  })
})






