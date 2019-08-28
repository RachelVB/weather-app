
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


If you ever get this error:
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

This is an error stating that you are sending 2 res (responses) to the server and this is not allowed in express. 


How to set up SSH keys:
```
AndrewRcheliMac:web-server arvanbuskirk$ ssh-keygen -t rsa -b 4096 -C "info@vbnet-works.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/arvanbuskirk/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/arvanbuskirk/.ssh/id_rsa.
Your public key has been saved in /Users/arvanbuskirk/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:mHEwYmf5/jcmaDu5+jiF/hTTiRaSIe5cxQraHQofMok info@vbnet-works.com
The key's randomart image is:
+---[RSA 4096]----+
| . .+ *o.        |
|E =oo=o*.        |
|   B.==+o        |
|  .o+.o*.+ .     |
|    o ooS o      |
|      ..oo       |
|     . ..+       |
|      oo= o +    |
|      o*=+ + .   |
+----[SHA256]-----+
AndrewRcheliMac:web-server arvanbuskirk$ ls -a -l ~/.ssh
total 24
drwx------   5 arvanbuskirk  staff   160 Aug 27 21:54 .
drwxr-xr-x+ 63 arvanbuskirk  staff  2016 Aug 21 19:50 ..
-rw-------   1 arvanbuskirk  staff  3389 Aug 27 21:54 id_rsa
-rw-r--r--   1 arvanbuskirk  staff   746 Aug 27 21:54 id_rsa.pub
-rw-r--r--   1 arvanbuskirk  staff  1409 Mar 18 16:56 known_hosts
AndrewRcheliMac:web-server arvanbuskirk$ eval "$(ssh-agent -s)"
Agent pid 43366
AndrewRcheliMac:web-server arvanbuskirk
```

How to link our new SSH keys to our heroku account:
```
AndrewRcheliMac:web-server arvanbuskirk$ heroku keys:add
Found an SSH public key at /Users/arvanbuskirk/.ssh/id_rsa.pub
? Would you like to upload it to Heroku? Yes
Uploading /Users/arvanbuskirk/.ssh/id_rsa.pub SSH key... done
AndrewRcheliMac:web-server arvanbuskirk$ 
```


How to deploy our app to Heroku:
```
AndrewRcheliMac:web-server arvanbuskirk$ heroku create weather-application
Creating ⬢ weather-application... !
 ▸    Name weather-application is already taken
AndrewRcheliMac:web-server arvanbuskirk$ heroku create vanbus-weather-app
Creating ⬢ vanbus-weather-app... done
https://vanbus-weather-app.herokuapp.com/ | https://git.heroku.com/vanbus-weather-app.git
AndrewRcheliMac:web-server arvanbuskirk$ 
```

How to gain access to heroku remotely:
```
AndrewRcheliMac:web-server arvanbuskirk$ heroku git:remote -a vanbus-weather-app
set git remote heroku to https://git.heroku.com/vanbus-weather-app.git
AndrewRcheliMac:web-server arvanbuskirk$ 
```



