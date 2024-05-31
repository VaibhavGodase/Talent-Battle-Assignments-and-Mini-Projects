
import React, { useState } from "react";
import "./style.css"
import Menu from "./menuApi";
import MenuCart from "./MenuCart";
import Navbar from "./Navbar";


const uniquelist = [...new Set(Menu.map((curElem) => {
    return curElem.category
})
),
    "ALL"
]
console.log(uniquelist);

const Restaurant = () => {
    const [MenuData, setMenuData] = useState(Menu)
    const [MenuList, setMenuList] = useState(uniquelist)
    const filterItem = (category) => {
        if (category === "ALL") {
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category

        })
        setMenuData(updatedList)
    }

    return (
        <>
            <Navbar filterItem={filterItem} MenuList={MenuList} />
            <MenuCart MenuData={MenuData} />
        </>
    )
};

export default Restaurant;
