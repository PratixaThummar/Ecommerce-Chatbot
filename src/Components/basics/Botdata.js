// import React from 'react'
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

function clickbtn(value) {
    // alert(value.name,value.category,value.price)
    alert(`You select: ${value.name} with ${value.category} category and price is ${value.price}`);
    console.log(value.name)
}
function Botdata({ Data }) {
    const [toggle, setToggle] = useState(true)

    console.log("deatatata", Data)
    return (
        <><section className="main-card--cointainer_bot ">
            {/* map is used to get particular value from ARRAY */}
            {Data.map((currentElement, index) => {
                const { id, name, category, image, description, price } = currentElement;

                return (
                    <><div className='bgcolor'>


                        <div className="card-container_bot" key={id}>
                            <div className="card_bot">
                                <div className="card-body_bot">
                                    <img src={image}
                                        alt="images" className="card-media_bot" />
                                    {/* <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={() => clickbtn(currentElement)}>Order Now {price}</button> */}
                                    {/* <button class="btn btn-light">Light</button> */}

                                    <br />
                                    <button className="card-tag_bot" onClick={() => clickbtn(currentElement)}>Order Now {price}</button>
                                    {/* <span className="card-number card-circle subtle">{id}</span> */}
                                    {/* <span className="card-author subtle">{category}</span> */}
                                </div><br />
                                {/* <h2 className="card-title"> {name}</h2> */}

                                {/* <span className="card-description subtle">
                                    {description}
                                </span>
                                <div className="card-read">Read</div> */}
                            </div>
                        </div>
                    </div>


                    </>
                )
            })}
        </section>
        </>
    )
}

export default Botdata