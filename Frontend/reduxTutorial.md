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
```js
     const initialCounterState = {
          count: 0
     }
     const initialUserState = {
          users: [{name: 'sheikh saadi'}]
     }
```


* action: action is a obejct where has 2 kind of data - type, payload
```js
     {
          type: 'INCREMENT'
     }
```

**We can write it into an function**
```js
     const incrementCounter = () =>{
          return {
               type: "INCREMENT"
          }
     }
```

**then whenever we call this function it return that type is INCREMENT**
```js
     const decrementCounter = () =>{
          return{
               type: "DECREMENT"
          }
     }
```

**If we need to pass data with type then we will payload**
```js
     const addUser = () =>{
          return{
               type: "ADD_USER",
               payload: {name: "sheikh saadi"}
          }
     }
```


**another way**
```js
     const addUser2 = (user) =>{
          return {
               type: "ADD_USER2",
               payload: {name: user}
          }
     }
```


* Reducer: reducers are pure function which handles all logic. it updates the state depends on action type
```js
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
```

* store: It holds the states. It has 3 important methods- getState(), dispatch(), suscribe()
create store
```js
const store = createStore(reducerCounter);

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(incrementCounter())
```

## Counter 

1. state - count:0
2. action - increment, decrement, reset
3. reducer
4. store

```js
const { createStore } = require("redux")

//constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

// state
const initialState = {
     count : 0
}

// action
const incrementCounterAction = () =>{
     return{
          type: INCREMENT
     }
} 
const decrementCounterAction = () =>{
     return{
          type: DECREMENT
     }
}
const resetCounterAction = () =>{
     return{
          type: RESET
     }
}

// reducer
const counterReducer = (state=initialState, action) =>{
     switch (action.type) {
          case INCREMENT:
               return{
                    ...state,
                    count: state.count + 1
               }               
          case DECREMENT:
               return{
                    ...state,
                    count: state.count - 1
               }               
          case RESET:
               return{
                    ...state,
                    count: 0
               }               
     
          default:
               state;
     }
}

// store
const store = createStore(counterReducer);

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
```

## payload in Action
```js
const { createStore } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const initialProductState = {
     product: ['sugar', 'milk'],
     numberOfProduct: 2
}

const getProductAction = () => {
     return{
          type: GET_PRODUCTS
     }
}

const addProductAction = (product) => {
     return {
          type: ADD_PRODUCTS,
          payload: product
     }
}

const productReducer = (state=initialProductState, action) =>{
     switch (action.type) {
          case GET_PRODUCTS:
               return{
                    ...state,
               }
          case ADD_PRODUCTS:
               return{
                    product: [...state.product, action.payload],
                    numberOfProduct: state.numberOfProduct + 1
               }
          default:
               state;
     }
}
const store = createStore(productReducer);

store.subscribe(()=>{
     console.log(store.getState())
})
store.dispatch(getProductAction())
```

## combine multiple reducer 
```js
const { createStore, combineReducers } = require("redux");

// product constant 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// cart constant 
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// product state
const initialProductState = {
     product: ['sugar', 'milk'],
     numberOfProduct: 2
}
// cart state 
const initialCartState = {
     cart: ["carrot"],
     numberOfProduct: 1
}
// product action 
const getProductAction = () => {
     return {
          type: GET_PRODUCTS
     }
}
const addProductAction = (product) => {
     return {
          type: ADD_PRODUCTS,
          payload: product
     }
}
// cart action 
const getCartAction = () => {
     return {
          type: GET_CART
     }
}
const addCartAction = (product) => {
     return {
          type: ADD_CART,
          payload: product
     }
}

// product reducer 
const productReducer = (state = initialProductState, action) => {
     switch (action.type) {
          case GET_PRODUCTS:
               return {
                    ...state,
               }
          case ADD_PRODUCTS:
               return {
                    product: [...state.product, action.payload],
                    numberOfProduct: state.numberOfProduct + 1
               }
          default:
               return state;
     }
}

// cart reducer 
const cartReducer = (state=initialCartState, action) =>{
     switch (action.type) {
          case GET_CART:
               return{
                    ...state
               }
          case ADD_CART:
               return{
                    cart: [...state.cart, action.payload],
                    numberOfProduct: state.numberOfProduct + 1
               }     
          default:
               return state;
     }
}

// combine reducer 
const rootReducer = combineReducers({
     productR: productReducer,
     cartR: cartReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
     console.log(store.getState())
})

store.dispatch(getProductAction())
store.dispatch(addProductAction('shosha'))
store.dispatch(getCartAction())
store.dispatch(addCartAction('cini'))
```

## Middleware
* for extra feature,middlepoint of dispatching an action and handledby reducer, performing async tasks, login etc
* Example of popular redux middlewares packages: redux-logger, redux-thunk
* `npm install redux-logger`
Example: 

```js
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// product constant 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// product state
const initialProductState = {
     product: ['sugar', 'milk'],
     numberOfProduct: 2
}
// product action 
const getProductAction = () => {
     return {
          type: GET_PRODUCTS
     }
}
const addProductAction = (product) => {
     return {
          type: ADD_PRODUCTS,
          payload: product
     }
}

// product reducer 
const productReducer = (state = initialProductState, action) => {
     switch (action.type) {
          case GET_PRODUCTS:
               return {
                    ...state,
               }
          case ADD_PRODUCTS:
               return {
                    product: [...state.product, action.payload],
                    numberOfProduct: state.numberOfProduct + 1
               }
          default:
               return state;
     }
}
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
     console.log(store.getState())
})

store.dispatch(getProductAction())
store.dispatch(addProductAction('shosha'))
```
## API calling - async actions using redux-thunk
```js
/* 
* async function api calling
* api url: `https://jsonplaceholder.typicode.com/todos`
* middleware redux thunk
* axios api
*/

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos"

// state 
const initialTodosState = {
     todos: [],
     isLoading: false,
     error: null
}

// action 
const getTodosRequest = () =>{
     return {
          type: GET_TODOS_REQUEST
     }
}
const getTodosSuccess = (todos) =>{
     return {
          type: GET_TODOS_SUCCESS,
          payload: todos
     }

}
const getTodosFailed = (error) =>{
     return{
          type: GET_TODOS_FAILED,
          payload: error
     }
}

// reducer 
const todosReducer = (state=initialTodosState, action) =>{
     switch (action.type) {
          case GET_TODOS_REQUEST:
               return{
                    ...state,
                    isLoading: true
               }
          case GET_TODOS_SUCCESS:
               return{
                    ...state,
                    todos: action.payload,
                    isLoading: false
               }
          case GET_TODOS_FAILED:
               return{
                    ...state,
                    error: action.payload,                    
                    isLoading: false
               }
          default:
               return state;
     }
}

// async action creator 
// thunk-middleware allows us to return a function instead of object
const fetchData = () =>{
     return (dispatch) =>{
          dispatch(getTodosRequest())
          axios.get(TODOS_URL)
          .then((res)=>{
               const todos = res.data;
               const titles = todos.map((title) => title.title) //if we want only titles
               dispatch(getTodosSuccess(titles))
          })
          .catch((err)=>{
               const errorMessage = err.message;
               dispatch(getTodosFailed(errorMessage))
          })
     }
}

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(fetchData())
```