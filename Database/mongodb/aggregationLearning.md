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

1. $match:  allows us to choose just those documents from a collection that we want to work with
```js
db.practise.aggregate([
    {$match: {gender: "Male", age: {$lt: 40}}}
    ])
```
2. To get only the fields i need. 
```js
db.practise.aggregate([
    {$match: {gender: "Male", age: {$lt: 40}}},
    {$project: {name: 1, gender: 1, age: 1}}
    ])
```
3. $addFields: jodi kono notun field add kore data ante chai. kintu eita original data change kore na. 
```
db.practise.aggregate([
    {$match: {gender: "Male"}},
    {$addFields: {location: "dhaka"}},
    {$project: {gender: 1, location: 1}}
    ])
```