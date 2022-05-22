import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { listCartItemsReducer } from './reducers/cartReducer'
import { productListReducer } from '../redux/reducers/ProductReducer'


const reducer = combineReducers({
//   cartItemsList: listCartItemsReducer,
  productsList: productListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
 (applyMiddleware(...middleware))
)

export default store