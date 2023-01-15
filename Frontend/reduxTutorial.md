# redux Tutorial

### what is redux & why?
* A small js library
* For managing medium/large amount of states globally in our app
* It's like useContext and UseReducer

### some common terms related to redux
* React-redux: redux is used with some common packages such as react-redux.
* Redux-toolkit: recommended way to write redux logic for building redux easily.
* redux devtools extension: helps to debug redux code easily. 

### How redux works:
* define state
* dispatch an action(type & payload)
* reducer update state based on Action Type
* store will update the view

![redux-image](https://user-images.githubusercontent.com/28184926/168863620-b2ffa708-8c0b-4b90-b81d-45212248b055.png)

### what do you need to start redux practise
* init npm by `npm init -y`
* install redux by `npm install redux`
* start writing code by creating index.js file.


## Concepts
* state: consider what states you want to manage
<code>
     const initialCounterState = {
          count: 0
     }
     const initialUserState = {
          users: [{name: 'sheikh saadi'}]
     }
</code>


* action: action is a obejct where has 2 kind of data - type, payload
<code>
     {
          type: 'INCREMENT'
     }
</code>

**We can write it into an function**
<code>
     const incrementCounter = () =>{
          return {
               type: "INCREMENT"
          }
     }
</code>

**then whenever we call this function it return that type is INCREMENT**
<code>
     const decrementCounter = () =>{
          return{
               type: "DECREMENT"
          }
     }
</code>

**If we need to pass data with type then we will payload**
<code>
     const addUser = () =>{
          return{
               type: "ADD_USER",
               payload: {name: "sheikh saadi"}
          }
     }
</code>


**another way**
<code>
     const addUser2 = (user) =>{
          return {
               type: "ADD_USER2",
               payload: {name: user}
          }
     }
</code>


* Reducer: reducers are pure function which handles all logic. it updates the state depends on action type
<code>
     const reducerCounter = (state=initialCounterState, action) =>{
          switch (action.type) {
               case "INCREMENT":
               return{
                    ...state,
                    count: state.count + 1
               }
               case "DECREMENT":
               return{
                    ...state,
                    count: state.count - 1
               }
               default:
                    state;
          }
     }
</code>

* store: It holds the states. It has 3 important methods- getState(), dispatch(), suscribe()
create store
<code>
const store = createStore(reducerCounter);

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(incrementCounter())
</code>