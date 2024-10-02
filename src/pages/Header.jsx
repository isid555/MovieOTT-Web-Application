import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import "./Header.css"
import Search from "../components/Search";
function Header(){
    return(
        <header>
            <a href="/" className={"logo"}>
                Cinema
            </a>
            <ul className={"nav"}>

                {
                    navListData.map((item)=>{
                        return(
                            <NavListItem key={item.id} item={item}/>
                        )
                    })
                }
            </ul>

        <Search/>
        </header>
    )
}

export default Header