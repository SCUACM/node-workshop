# SCU ACM Node Workshop
+ This is a simple workshop that will cover basic Node.js, Express, and Socket.io usage.
+ You will be creating a web chat application and deploying it to the Cloud.

## Getting Started

### Installing Node.js and NPM (non-Windows)
+ [Install NVM](https://github.com/creationix/nvm#install-script)
+ Install the latest version of Node.js: `nvm install 10`
+ Check that it worked: `node --version` and `npm --version`
+ Update NPM to the latest version: `npm install --global npm`

### Installing Node.js and NPM (Windows)
+ If you are using Windows, you can use a Linux VM or...
+ Install [NVM for Windows](https://github.com/coreybutler/nvm-windows)
+ Install the latest version of Node.js: `nvm install latest`
+ Close and re-open Command Prompt
+ Check that it worked: `node --version` and `npm --version`
+ Update NPM to the latest version: `npm install --global npm`

### Getting the Source Code
+ Install `git` if you have not already.
+ `cd` to the directory you want to install this repo in.
+ Clone this repo: `git clone https://github.com/SCUACM/node-workshop`
+ `cd` into the newly created `node-workshop` directory.
+ If you `ls`, you should be able to see `package.json`.

### Project File Structure
+ `/package.json` - File that specifies app details and dependencies for NPM.
+ `/node_modules` - Folder for all your app's NPM dependencies.
+ `/public` - Public-facing (client) code.
+ `/public/scripts` - Client Javascript (scripting).
+ `/public/stylesheets` - Client CSS (styling).
+ `/public/index.html` - Our frontend's main HTML file.
+ `/server.js` - Main file that holds all our server code.

### Running the Server
+ Install all node dependencies: `npm install`.
+ You can check that it worked if `node_modules` folder has been created.
+ Run `npm start` to start your server.

### Completed Code
+ If you are looking for the completed code, check out the `solutions` branch:
+ Online: https://github.com/SCUACM/node-workshop/tree/solutions
+ Locally: `git checkout solutions` (You might need to [`git stash`](https://git-scm.com/docs/git-stash))

## Deploy to the Cloud
+ Create a free account at [Heroku](https://www.heroku.com/).
+ [Install Heroku's command-line tool based on your OS.](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
+ Run `heroku login` and enter in your new Heroku account's credentials.
+ Run `heroku create` to create a new Node.js instance.
+ Commit all your changes: `git add --all && git commit -m "Your message"`
+ Run `git push heroku master` to send your changes to the Cloud!
+ View your instance on the web: `heroku open`
+ If you make more changes, commit your new changes and re-push to Heroku.

## Moving Forward With Node

### Understanding Node.js "Async"
+ [Single-threaded event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
+ [Non-blocking I/O calls using libuv (async I/O)](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
+ Because single-threaded, no thread context switching overhead (“fast”)
+ Can’t scale Node.js by increasing the number of CPU cores, but can scale Node by increasing cluster size or upping the thread count in thread pool
+ [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
+ [New `async`/`await` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### Other Resources
+ [MDN Express Web Framework Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
+ [Node.js Official Documentation](https://nodejs.org/en/docs/)
+ [Debugging Node.js Applications](https://nodejs.org/en/docs/guides/debugging-getting-started/)
+ [Run your Node.js app on a VPS](https://medium.com/@utkarsh_verma/configure-nginx-as-a-web-server-and-reverse-proxy-for-nodejs-application-on-aws-ubuntu-16-04-server-872922e21d38)
