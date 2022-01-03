import { products } from '../constants'
const initialState = {
    productData: []
} 
export default function productItems(state = [], action) {
    switch (action.type) {
        case products:
            // console.warn("reducer",action)
            return [
                ...state,
                {productData: action.data}
            ]
        default:
            return state
    }


}
