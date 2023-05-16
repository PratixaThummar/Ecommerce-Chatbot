import React from "react";
import Menu from './MenuAPI'
import Menucard from './Menucard'
import Botdata from './Botdata'

const Product = (steps) => {
  console.log(steps)

  const handleProductClick = (product) => {
    console.log(`User clicked on product ${product.name}`);
    const message = `You selected ${product.name}. It costs ${product.price}. How many would you like to buy?`;
    console.log(message);
    steps.updateStep({
      id: "product_list",
      message: message,
      replace: true,
      metadata: { product: product },
    });
  };
  const [menuData, setmenuData] = React.useState(Menu)
  // const [Data, setbotData] = React.useState(Menu)

  return (
    <div className="container">
        {/* <Menucard menuData={menuData}></Menucard> */}
        <Botdata Data={menuData}></Botdata>

      </div>
    
  );
}
export default Product;
