when we create node js server and we want to host in vercel then we need to add code named vercel.json.

code: 

```json
{
     "version": 2,
     "builds": [
          {
               "src": "./index.js",
               "use": "@vercel/node"
          }
     ],
     "routes": [
          {
               "src": "/(.*)",
               "dest": "/"
          }
     ]
}
```