import React from "react";
import Menu from './MenuAPI'
import Menucard from './Menucard'
import Botdata from './Botdata'
import Traditional from "./Traditional";
import Traditionalcard from "./Traditionalcard";

const Tradition = (steps) => {
    console.log(steps)
    //    const [menuData, setmenuData] = React.useState(Menu)
    const [Data, setbotData] = React.useState(Traditional)

    return (
        <div className="container">
            {/* <Menucard menuData={Data}></Menucard> */}
            <Traditionalcard Data={Data}></Traditionalcard>

        </div>);
}
export default Tradition;
