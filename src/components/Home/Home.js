import React from 'react'
import { CartState } from '../../context/Context'
import SingleItem from '../SingleItem/SingleItem'
import "./Home.css"
const Home = () => {

    const {state: {items}} = CartState()
    console.log(items)

    return (
        <div className="home">
            {/* <Filters /> */}
            <div className="itemContainer">
                {items.map((item)=>{
                    return <SingleItem item = {item} key = {item.id}/>
                })}
            </div>
        </div>
    )
}

export default Home
