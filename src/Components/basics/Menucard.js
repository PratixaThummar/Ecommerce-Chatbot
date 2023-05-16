// import React from 'react'
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

function clickbtn(value) {
    // alert(value.name,value.category,value.price)
    alert(`You select: ${value.name} with ${value.category} category and price is ${value.price}`);
    console.log(value.name)
}
function Menucard({ menuData }) {
    const [toggle, setToggle] = useState(true)

    console.log("deatatata", menuData)
    return (
        <>

            <section className="main-card--cointainer bg">
                {menuData.map((currentElement, index) => {
                    const { id, name, category, image, description, price } = currentElement;
                    return (
                        <>
                
                            <div className="center">
                                <div className="article-card">
                                    <img src={image} alt="images" />
                                    <div className="content">
                                        <hr />
                                        <span className="card-footer">{category}</span><span><p className="card-tag " onClick={() => clickbtn(currentElement)}>Add to cart </p></span>
                                        {/* <button className="card-tag " onClick={() => clickbtn(currentElement)}>Order Now {price}</button> */}
                                        <p className='price1'>{price}</p>
                                        {/* <main id="app">
                                            <h1>Aqua Buttons</h1>

                                            


                                        </main> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section >

        </>
    )
}

export default Menucard