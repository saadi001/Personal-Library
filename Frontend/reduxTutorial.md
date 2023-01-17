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

## Counter 
<code>

1. state - count:0
2. action - increment, decrement, reset
3. reducer
4. store

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
</code>

## payload in Action
<code>
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
</code>

## combine multiple reducer 
<code>
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
</code>