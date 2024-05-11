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
