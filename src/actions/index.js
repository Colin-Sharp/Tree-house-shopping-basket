import { ADD_TO_BASKET,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './types'


export const addToBasket= (id)=>{
    return{
        type: ADD_TO_BASKET,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
