import React from "react";

const Card = (props) => {

    
   return (
    <>
                <div className="card">
                    <div>
                        <img src={props.pimg} alt="img of the product" className="pimage"/>
                    </div>
                    <div>
                        <p className="productname">{props.pname}</p>
                        <p className="productcontent">{props.pcontent}</p>
                        <p className="productprice">Rs {props.pprice}</p>
                    </div>
                    <button className="productcart" onClick={props.pclick} id={props.id}>Add To Cart</button>
                </div>
    </>
 )
}
export default Card;