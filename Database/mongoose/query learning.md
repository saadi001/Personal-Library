## MongoDB query practise

1.$eq =Matches values that are equal to a specified value.

```
with filtering
db.practise.find({age: {$eq: 17}}, {age:1})
```

2.$ne = Matches all values that are not equal to a specified value.

```
with filtering
db.practise.find({age: {$ne: 17}}).project({age: 1})
```

3.$gte =
Matches values that are greater than or equal to a specified value.

```
db.practise.find({age: {$gte: 17}})
```

4.$lte = Matches values that are less than or equal to a specified value.xx

```
db.practise.find({age: {$lte: 17}})
```

5.$in = it check is all field available in $in array. if found return otherwise not just like or.

```
 db.practise.find({gender: "Female", age: {$in:[17,18]}}).project({age:1,gender:1})
```

6.$nin = it return all that is not matched from the array.

```
 db.practise.find({gender: "Female", age: {$nin:[17,18]}}).project({age:1,gender:1})
```

7.$and = perform logical and. this is implicit and. we should use this when do it multiple time for same field.

```
db.practise.find({
        $and: [
            {age: {$lt: 50}},
            {"skills.name": "JAVASCRIPT"}
            ]
    })
```

if we want to use same field but with condition

```
db.practise.find({
    $and: [
        { age: { $ne: 18 } },
        { age: { $lt: 21 } }
    ]
})
```

8.$or = perform logical or. we should use this when do it multiple time for same field.

```
db.practise.find({
        $or: [
            {age: {$lt: 50}},
            {"skills.name": "JAVASCRIPT"}
            ]
    })
```

9.$not = return logical not

```
db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
```

10.$nor = return without selected condition

```
db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )
```

11.$exists = return as input given with exists true/false. check only field is exists even null field will be return.

```
db.spices.find( { saffron: { $exists: true } } )
```

12.$type = return as query type.

```
db.spices.find( { age: { $type: "string" } } )
```

13.$all = return the array the query values included but every query data should match. same as and.

```
db.spices.find( {interests: {$all: ['Traveling','Cooking', 'Reading']}} )
```

14.$elemMatch = matches documents that contain an array field with at least one element that matches all the specified query criteria.

```
db.spices.find( {skills: {$elemMatch: {name: "Java", level: "intermediate"}}} )
```

15.$size = return the array with that size.

```
db.spices.find( {skills: {$size: 2}} )
```

### update Operators

16. $set: update the value exactly the value for the field.

```
db.products.updateOne(
   { _id: 100 },
   { $set:
      {quantity: 500}
   }
)
```

17. $addToSet: adds a value to an array unless the value is already present, in which case $addToSet does nothing to that array.

```
db.products.updateOne(
   { _id: 1 },
   { $addToSet: { tags: "accessories" } }
)
```

$each Modifier allows the $addToSet operator to add multiple values to the array field.

```
db.inventory.updateOne(
   { _id: 2 },
   { $addToSet: { tags: { $each: [ "camera", "electronics", "accessories" ] } } }
 )
```

18. $push: The $push operator appends a specified value to an array.

```
db.students.updateOne(
   { _id: 1 },
   { $push: { scores: 89 } }
)
```

19. $unset: deletes a particular field. it will delete in order for same field. If the field does not exist, then $unset does nothing.

```
db.products.updateOne(
   { sku: "unknown" },
   { $unset: { quantity: "", instock: "" } }
)

it will remove quantity and instock field.
```

20. $pop: The $pop operator removes the first or last element of an array. Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.

```
db.students.updateOne( { _id: 1 }, { $pop: { scores: -1 } } )

it will remove first element.
```

21. $pull: removes from an existing array all values that matches a specified condition.

```
db.stores.updateMany(
    { },
    { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
)

it will remove "apples" and "oranges" from the fruits array "carrots" from the vegetables array but if has multiple only one will be remove.
```

22. $pullAll: removes all the matched value .

```
db.survey.updateOne(
   { _id: 1 },
   { $pullAll: { scores: [ 0, 5 ] } } )

it will remove all 0 and 5 from the array.
```

22. $deleteOne: delete one document only.

```
db.employees.deleteOne({ "age": 39 })

it will delete where age is 39 but the first one, we usually delete with id.
```

another interesting is if we do not send any argument then it will delete first document of the collection.

```
db.employees.deleteOne({})
```

23. $deleteMany: delete all filtered document.

```
db.employees.deleteMany({ "age": { $gt: 38 } })

it will delete all where age is more than 39
```

if we do not send any argument then it will delete all of the collection.

```
db.employees.deleteMany({})
```

24. createCollection: create collection in cluster

```
db.createCollection(‘Collection_name’);
```

25. dropCollection: drop collection from cluster

```
db.collectionName.drop()
```
26. $sort: The $sort modifier orders the elements of an array during a $push operation.

```
db.students.updateOne(
   { _id: 2 },
   { $push: { tests: { $each: [ 40, 60 ], $sort: 1 } } }
)

it will push to tests array and sort it in ascending way.
```
