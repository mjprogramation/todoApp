# TodoApp
Advanced ToDo app with better UX

Check the demo hosted on Firebase: https://todoapp-3eed7.web.app/

This is not a single page app.

# Instructions
First clone this repository.
```bash
$ git clone https://github.com/mjprogramation/todoApp
```
Install dependencies. Make sure you already have nodejs & npm installed in your system.
```bash
$ npm install # or yarn
```
to run it localy (this commande uses express to serve the app on port 3001 if you want to change the port, edite server.js file)

```bash
$ npm start
```
to save change you've made 

```bash
$ npm run build-dev
```
### this commande will keep watching any changes on code and rebuild to the public folder

for production use:

```bash
$ npm run build-dev
```
to make any changes in bootstrap sass file use:

```bash
$ npm run sass
```
or to keep sass watching for changes use:

```bash
$ npm run sass-watch
```
web pack configration included in the webpack.config.js file, takes src/App.js as input and public/js/main.js as output

# Dependencies
#### `React`
#### `React-dom`
#### `React-icons`
### dev-dependencies
#### `Express`
#### `Webpack & dependencies`
#### `Babel & dependencies`
#### `Sass`
