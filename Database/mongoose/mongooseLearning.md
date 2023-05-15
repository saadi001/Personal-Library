#### what is mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

**How mongoose works**
![mongoose](./introduction-to-mongoose-0-1638899576.webp)

### setup

* download and install mongodb community server. 
* download and install mongodb compass (It will give a graphic user interface)

**To work with typescript a project, we will do this steps then.**

1. After opening the folder in vs code studio, command: npm init -y
2. install typescript as dev dependencies. command: npm install typescript --save-dev
3. install express. command: npm install express --save
4. install mongoose. command: npm install mongoose --save
5. install ts-node-dev as dev dependencies. command: npm i ts-node-dev --save-dev
6. in package.json, in scripts we will write: "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
7. then to run we will command: npm run dev

**A basic demo**

```ts
const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5000;

// database
async function main() {
     try {
          await mongoose.connect('mongodb://127.0.0.1:27017/test');
          console.log("Database connected successful");
     }catch(err){
          console.log(`Failed to connect database, ${err}`);
     }
   }

main();

app.get('/', (req, res) => {
     res.send('Hello World!')
})

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})
```