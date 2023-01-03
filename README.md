# blog-client

This assignment constitutes the beginning of a multi-sprint journey exploring client-server architecture.
Today, you'll build a blog client that allows you to share bopera://operiuslogs with your fellow students. You'll do this
using `$.ajax` to send (POST) and fetch (GET) JSON data to and from a remote server.

## High Level Goals of this Sprint

- Increase your vocabulary and understanding around Hypertext Transfer Protocol
- Successfully implement a request-response based chat application using JavaScript
- Gain experience interacting with a REST API (in this case the Parse REST API)
- Gain exposure to common Browser Security themes

## Key HTTP Vocabulary

The following reading will expose you to a lot of vocabulary having to do with HTTP. You don't need to memorize these terms yet, but be prepared to revisit them and commit them to memory when you begin your job hunt as you can expect to be asked about them during phone screens.

- [Request-Response Communication](https://en.wikipedia.org/wiki/Request%E2%80%93response)
- The [HTTP Session](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session) section of Wikipedia's [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) page
- The [Request Methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) section of Wikipedia's [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) page
- [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Don't read this entirely, but at least look into what each of the NXX (e.g. 2XX, 3XX) sections mean.

### Browser Security

  - Read all about [Cross-site scripting (XSS)]. You may find this
    [Interactive Tutorial on Cross-site scripting (XSS)](https://xss-game.appspot.com)
    or this one on [from Google](https://www.google.com/about/appsecurity/learning/xss/) helpful. Note that these tutorials
    are pretty hard, you don't have to complete them if you don't find them useful.

## Tools You'll Use

### ES6

The *ECMAScript* specification is a scripting language specification upon which JavaScript implementations (such as those found in web browsers like Chrome) are based. In June 2015, the 6th edition of the ECMAScript standard was finalized, and is commonly referred to as ES6. This was the first major update to the language since 2009. Since then, the committe that decides on language updates has released ES7, ES8 and ES9 (about one update per year) with several smaller but important language improvements.

The [ES6 compatability table](http://kangax.github.io/compat-table/es6/) will show you what features unlocked in es6 and beyond.

We encourage you to try experimenting with some new features. Here are some suggested ones for this sprint:

- arrow functions
- spread (...) operator
- rest parameters
- object literal extensions
- for...of loops (a new for loop, what!!)
- template strings

### Package Management

A [package manager](https://en.wikipedia.org/wiki/Package_management_system) is a tool for automating the process of installing, upgrading, configuring and managing dependencies ([underscore], [jquery], etc) for projects. Most package managers run through a command-line interface.

Today, you'll use a popular package manager called **npm** to install and keep track of the tools your client-side code requires.

###  API

We've set up a remote server but Later (as part of a different sprint) you'll build your own (local) server and replace the (remote) one you're using today.

Since you'll eventually reuse parts of your solution to this sprint, try to make your code
readable/maintainable so that future-you doesn't get angry at present-you for making things messy.


The message objects you send to the server (via POST requests) should be in the following format:

```js
var blog = {
  _id: "62023a5d8fa3a",
  title: 'first blog',
  author:'blogger',
  body: 'hello guys it is my first blog ',
  createdAt: '2018-11-10T05:05:26.037Z',
  updatedAt: "2021-04-17T05:05:26.037Z",
  imageUrl: "https://source.unsplash.com/1600x900/?turntable",
  likes: "501"

};
```

Don't worry for now you will only need the `title` , `author` , `body` and `createdAt`

To get you started, here's an example POST request. Note that any messages you POST to the server are
viewable by _everyone_, so be nice.

```js
$.ajax({
  // This is the url you should use to communicate with the API server.
  url: 'https://react-blogging-app.onrender.com/api/blogs',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('blog: blog sent');
  },
  error: function (data) {
    console.error('blog: Failed to send blog', data);
  }
});
```


## Bare minimum requirements

### npm

This sprint uses [npm](https://www.npmjs.com/)  to manage its dependencies. npm comes bundled with Node, and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

Here are a few tips to help get up and running:

- To install all the dependencies run npm install
- npm's configuration file is package.json
- npm downloads packages into node_modules

Install this sprint's dependencies:

[ ] Run npm install

### Separation of Concerns
As you write the functions that will power your blog applciation, consider what job each of these functions is doing and in which file that function should ideally live. Take note of times where you are mixing concerns and attempt to split functions up into smaller functions so that it's easier to place similar or related concerns together into one file.

The files included in this project suggest one possible arrangement for the separation of concerns and project orgranization. Use the proposed structure or refactor to one you find more intuitive.

### blogs

Look inside the **client/src** and **client/scripts** folder and start coding.


- [ ] Display blogs retrieved from the  server.
    - [ ] Read about [Underscore's easy templating abilities](https://css-tricks.com/lodge/learn-jquery/24-templating-underscore/), then create a template function to render a message to HTML. Alternatively, you may use jQuery to construct DOM nodes and compose them together to create the desired HTML output. Underscore's template system is quite extensive and you can read about it's advanced capabilities [here](http://2ality.com/2012/06/underscore-templates.html).
    - [ ] Be sure to use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable XSS attacks. See the section about escaping below.

    **Note**: If you issue an XSS attack, you must make it innocuous enough to be educational, rather than disruptive. Basically you should scope your attacks to be `console.log`s or **minor** style changes. The following are **not** allowed:
      - alerts
      - adding or removing dom elements
      - auto-posting
      - DDOS attacks

- [ ] Setup a way to refresh the displayed blogs ( by clicking on the logo).

- [ ] Allow users to select an author name and send blogs

#### A Note About Escaping

Escaping is the way we ensure that when users input things to our sites, we don't allow them to write our site's code for us. For example, what if someone's author name was `<script>$('body').prepend('you got pwned')</script>`?  If we didn't escape, that 'author name' would get executed just like any other code, and all the sudden you'll have a new div on your site that says 'you got pwned', anytime that person's author name is displayed.

Now that might seem trivial, but understand that attacks like this can affect (or transmit) your  data too. That's not cool.

You'll need to figure out a way to effectively protect your app against cross-site scripting (XSS) attacks issued by your class-mates during this sprint. Part of the fun of this sprint is figuring out how to do so.

As always, google is your friend :). If you're curious, you can read about some of the nuances associated with escaping html [here](http://wonko.com/post/html-escaping).


## Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

For each of the features below, write new describe blocks, with tests before implementing.

- [ ] Allow users to search for a blog by it's title or by author name by completing the needed functions

## Nightmare Mode

If you've made it this far you're in for some real fun, it's time to convert your blogging application into a Medium clone. If you don't know Medium  we recommend you to visit it so that you can direct your remaining efforts towards mimicking the functionality and styling of a real Medium feed.

Recognizing that there are constraints in place given that your classmates are not using the same code base as you (of course you could organize!), feel free to conduct this refactor as you see fit. If you wish you may use the following as recommendations for the features you should implement to complete the refactor successfully:

- The ability to add the picture inside the blogs
- The ability to like a blog and display the number of likes for every blog 
- The ability save blogs and show them in the saved blogs page (you can not send them to server so try in only in front side)
- Styling that looks as close as possible to an actual Medium  feed. You might consider the wildly popular CSS framework [Bootstrap](http://getbootstrap.com/) to help you out

[XSS Filter Evasion Cheat Sheet]:https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
[XSS Prevention Cheat Sheet]:https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
[Cross-site scripting (XSS)]:https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
[Package Management]:https://en.wikipedia.org/wiki/Package_management_system
[underscore]:http://underscorejs.org/
[jquery]:http://jquery.com/
[npm]:https://npmjs.org/