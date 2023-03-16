import React, { createContext, useContext, useReducer } from 'react'

//importing faker
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';

const Cart = createContext();
const Context = ({children}) => {

// data using faker to genrate fake data

    const Items = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        price: faker.finance.amount(),
        image: faker.image.fashion(1234, 2345, true),
        inStock: faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])
    }));
    
    const [state, dispatch] = useReducer(cartReducer, {
        items:Items,
        cart:[]
    })


    return (
        <Cart.Provider value ={{state, dispatch}} >
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState =()=>{
    return useContext(Cart);
}
