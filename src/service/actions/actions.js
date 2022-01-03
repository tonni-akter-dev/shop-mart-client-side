import {products} from '../constants'
export const homeproducts =(data)=>{
    // console.warn("action",data)
    return {
        type:products,
        data:data
    }
}
