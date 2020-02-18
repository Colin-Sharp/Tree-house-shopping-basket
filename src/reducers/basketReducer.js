import tree1 from '../images/tree1.svg'
import tree2 from '../images/tree2.svg'
import tree3 from '../images/tree2.svg'
import tree4 from '../images/tree2.svg'
import tree5 from '../images/tree2.svg'
import { ADD_TO_BASKET, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/types'


const initState = {
  items: [
    { id: 1, title: 'Weaver Bird', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 200, img: tree1 },
    { id: 2, title: 'Jungle', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 300, img: tree2 },
    { id: 3, title: 'Cabin', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 350, img: tree3 },
    { id: 4, title: 'Tin House', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 500, img: tree4 },
    { id: 5, title: 'Fairy Tail', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 500, img: tree5 },

  ],
  addedItems: [],
  total: 0

}
const basketReducer = (state = initState, action) => {

  if (action.type === ADD_TO_BASKET) {
    let addedItem = state.items.find(item => item.id === action.id)
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }

    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }

  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 30
    }
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 30
    }
  }

  else {
    return state
  }

}

export default basketReducer;