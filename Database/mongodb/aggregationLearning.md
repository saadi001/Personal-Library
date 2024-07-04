### what is aggregation?

=> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

### how does mongodb aggregation pipeline works

=> A diagram as example: <br>
input --> $match --> $group --> $sort --> output
<br>

- $match stage: filters those documents we need to work with.
- $group stage: does the aggregation job.
- $sort stage: sorts the resulting document the way required(ascending or descending)
<br>
<p>There is no limit to the number of stages used in the query. Aggregation works in memory. Each stage can use up to 100 MB of RAM. You will get an error from the database if you exceed this limit</p>
If it becomes an unavoidable problem you can opt to page to disk, with the only disadvantage that you will wait a little longer because it is slower to work on the disk rather than in memory. To choose the page to disk method, you just need to set the option allowDiskUse to true like this:

```
db.collectionName.aggregate(pipeline, { allowDiskUse : true })
```

this option is not always available shared services. For example Atlas M0, M2 and M5 clusters disable this option.

### syntax

```jsx
db.collection.aggregate([
    //stage 1
    {}, --> pipeline
    //stage 1
    {}, --> pipeline
    //stage 1
    {}, --> pipeline
])
```

### Data flow

collection --> stage1 --> stage2 --> stage3 --> final output

### Examples

1. $match: allows us to choose just those documents from a collection that we want to work with

```js
db.practise.aggregate([{ $match: { gender: "Male", age: { $lt: 40 } } }]);
```

2. To get only the fields i need.

```js
db.practise.aggregate([
  { $match: { gender: "Male", age: { $lt: 40 } } },
  { $project: { name: 1, gender: 1, age: 1 } },
]);
```

3. $addFields: jodi kono notun field add kore data ante chai. kintu eita original data change kore na.

```js
db.practise.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { location: "dhaka" } },
  { $project: { gender: 1, location: 1 } },
]);
```

4. $out: ekhon amara jodi chai notun collection create kore oikhane notun field soho thakbe tokhon amra $out use korte parbe. $out sobsomoy pipeliner shesh stage hobe.

```js
db.practise.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { location: "dhaka" } },
  { $project: { gender: 1, location: 1 } },
  { $out: "NewCollection" },
]);

//another example
db.universities.aggregate([
  { $group: { _id: "$name", totaldocs: { $sum: 1 } } },
  { $out: "aggResults" },
]);
```

5. $merge: jodi amra original collection e modifiy korte chai taile $merge use korbo.

```js
db.practise.aggregate([
  { $match: { gender: "Male" } },
  { $addFields: { location: "dhaka" } },
  { $merge: "practise" },
]);
```

6. $group: _id diye group key baniye oi field er unique value niye group toiri kore. <br>
$group has some operators:

- $count: Calculates the quantity of documents in the given group.
- $max: maximum value of a document’s field in the collection.
- $min: minimum value of a document’s field
- $avg: average value of a document’s field
- $sum: Sums up the specified values of all documents
- $push: Adds extra values into the array of the resulting document.
- $top: the top element within a group according to the specified sort order.
<br>
#### Examples: 

```js
//basic
db.practise.aggregate([
    {$group: { _id: "$gender"}}
    ])
```

```js
//with sum operator. if we want to see total of every unique item
db.practise.aggregate([
    {$group: { _id: "$address.country", count: {$sum: 1}}}
    ])
```
```js
//with push operator. ei operator diye amra field add kore nite pari jeta amader dorkar. ekhane name field o dekhabe sathe.
db.practise.aggregate([
    {$group: { _id: "$address.country", aroField: {$push: "$name"}}}
    ])
//jodi amra puro document ante chai taile $$ROOT use korbo.
db.practise.aggregate([
    {$group: { _id: "$address.country", aroField: {$push: "$$ROOT"}}}
    ])
```

```js
//sum, max, min, avg operator. _id:null means it will take whole document as one document.
db.practise.aggregate([
    {$group: { 
        _id: null, 
        totalSalary: {$sum: "$age"},
        maxSalary: {$max: "$age"},
        minSalary: {$min: "$age"},
        avgSalary: {$avg: "$age"}
    }}
    ])
```
7. $unwind: amara array field ke group korle unique array er vitore unique value thake na. ek e barbar thake but shudu array diey group hoy. jodi array er moddher prottek unique value alada group korte chai taile $unwind use korte hoy. 

```js
//ekhane friends array er moddhe thaka sobgulo 
db.practise.aggregate([
    {$unwind: "$friends"},
    {$group: {_id: "$friends", count: {$sum: 1}}}
    ])

// amra jodi chai je prottek age er interests(array) gulo ki ki. we can do it with unwind and group with age.
db.practise.aggregate([
    {$unwind: "$interests"},
    {$group: {_id: "$age", interestperAge: {$push: "$interests"}}},
    ])
```