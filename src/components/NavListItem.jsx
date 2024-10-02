import React from "react";
import "./NavListItem.css"

function NavListItem({item}){
    return(
        <li>
            <a href={item.link}>{item.name}</a>
        </li>
    )
}
export default NavListItem