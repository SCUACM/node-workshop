# SCU ACM Node Tutorial
+ This is a simple tutorial that will cover basic Node.js, Express, and Socket.io usage.
+ You will be creating an API and web chat application.

## Getting Started

### Installing Node.js and NPM
+ If you are using Windows, please use a Linux VM.
+ [Install NVM](https://github.com/creationix/nvm#install-script)
+ Install the latest version of node: `nvm install 8`
+ Check that it worked with: `node --version` and `npm version`

### Getting the Source Code
+ Install `git` if you have not already.
+ `cd` to the directory you want to install this repo in.
+ Clone this repo: `git clone https://github.com/SCUACM/node-tutorial`
+ `cd` into the newly created `node-tutorial` directory.
+ If you `ls`, you should be able to see `package.json`.

### Project File Structure
+ `/package.json` - NPM file that specifies app details and dependencies.
+ `/node_modules` - Folder for all your app's NPM dependencies.
+ `/data` - Raw data for our API
+ `/lib` - Server code.
+ `/lib/routes` - Routing code.
+ `/public` - Public-facing (client) code.
+ `/public/scripts` - Client Javascript (scripting).
+ `/public/stylesheets` - Client CSS (styling).
+ `/views` - Code to generate HTML pages.
+ `/views/pages` - Main HTML page code.
+ `/views/partials` - HTML snippets used to build the main pages.

### Running the Server
+ Install all node dependencies: `npm install`.
+ You can check that it worked if `node_modules` folder has been created.
+ Run `npm start` to start your server.

### Completed Code
+ If you are looking for the completed code, check out the `solutions` branch:
+ Online: https://github.com/SCUACM/node-tutorial/tree/solutions
+ Locally: `git checkout solutions` (You might need to [`git stash`](https://git-scm.com/docs/git-stash))

## Deploy to the Cloud
+ Create a free account at [Heroku](https://www.heroku.com/).
+ Install Heroku's command-line tool: `npm install --global heroku-cli`
+ Run `heroku login` and enter in your new Heroku account's credentials.
+ Run `heroku create` to create a new Node.js instance.
+ Commit all your changes: `git add --all && git commit -m "Your message"`
+ Run `git push heroku master` to send your changes to the cloud!
+ View your instance on the web: `heroku open`
+ If you make more changes, commit your new changes and re-push to Heroku.

## Moving Forward With Node

### Understanding Node.js "Async"
+ [Single-threaded event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
+ [Non-blocking I/O calls using libuv (async I/O)](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
+ Because single-threaded, no thread context switching overhead (“fast”)
+ Can’t scale Node by increasing the number of CPU cores, but can scale Node by increasing cluster size or upping the thread count in thread pool
+ [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
+ [New `async`/`await` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### Other Resources
+ [MDN Express Web Framework Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
+ [Node.js Official Documentation](https://nodejs.org/en/docs/)
+ [Debugging Node.js Applications](https://nodejs.org/en/docs/guides/debugging-getting-started/)
+ [Run your Node.js app on a VPS](https://medium.com/@utkarsh_verma/configure-nginx-as-a-web-server-and-reverse-proxy-for-nodejs-application-on-aws-ubuntu-16-04-server-872922e21d38)
