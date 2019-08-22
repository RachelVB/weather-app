
After starting your server and visiting your new handlebars page, if you are receiving an error such as:

"Error: Failed to lookup view "index" in views directory "/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/src/views"
    at Function.render (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/application.js:580:17)
    at ServerResponse.render (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/response.js:1012:7)
    at app.get (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/src/app.js:24:7)
    at Layer.handle [as handle_request] (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/layer.js:95:5)
    at /Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/web-server/node_modules/express/lib/router/index.js:275:10)"

This means that you have not initiallized your app in the appropriate directory. 
Oudside of your app.js folder, start it again such as: 
"node arc/app.js"


After installing hbs, we need to specify the app.set. 
So in this case we did:

```js
app.set('view engine', 'hbs');
app.set('views', viewsPath);
```
'views' is the default directory that hbs looks for, so if we change the directory to where our hbs files are, we must list it in app.set. 

To prevent any errors when testing your handlbars code, make sure (if you have nodemon running) to start nodemon using the following syntax:
nodemon src/app.js -e js,hbs
This way, it will restart your server when you have any of your extended files. 