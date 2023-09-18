import React,{useState} from "react";
import Data from "./Data";
import Card from "./Card";
import List from "./List";


const App = () => {


  const[itemsName,setItemsName] = useState([]);
  const[itemsPrice,setItemsPrice] = useState([]);
  const[object,setObject] = useState([{name:"",price:""}]);
  const[sum,setSum]=useState(0);

  // const[product,setProduct]=useState([]);

  const inputChange1 = (e) => {
      console.log("clicked");
      // console.log(e.target.name);
      // setItems(e.target.name);
      // setProduct((oldItems)=>{
      //     return <li>{([...oldItems,items])}</li>;
      // })
    
      Data.filter((val)=>{
        if(e.target.id===val.id)
        {
          // console.log(val.pname);
          const id=e.target.id;
          let newname=val.pname;
          let newprice=val.pprice;
          console.log(newname);
          console.log(newprice);
          (setItemsName((oldItems) => {  
            return ([...oldItems,newname]);
          }));
        }
      })
     console.log(itemsName);
      Data.filter((val)=>{
        if(e.target.id===val.id)
        {
          const id=e.target.id;
          // console.log(val.pname);
          let newname=val.pname;
          let newprice=val.pprice;
          (setItemsPrice((oldItems) => {
            return ([...oldItems,newprice]);
          }));
        }
      })
      
      console.log(itemsName);
      console.log(itemsPrice);

      let aobject = [{}];

      for(let i=0; i<itemsName.length; i++)
      {
         if(aobject[i]==undefined)
         {
          aobject[i]={};
          aobject[i].name = itemsName[i];
          aobject[i].price = itemsPrice[i];
         }
         else
         {
          aobject[i].name = itemsName[i];
          aobject[i].price = itemsPrice[i];
         }
      }
      // console.log(aobject);
      return setObject(aobject);
      // console.log(object);

      // return object;

  }

  
const sCard = (val) => { 
    return (
      <Card id={val.id} key={val.id} pimg={val.pimg} pname={val.pname} pprice={val.pprice} pcontent={val.pcontent} pclick={inputChange1}/>
    )
  }

  const bill = () => {
    let s=0;
    for(let i=0; i<itemsPrice.length; i++)
    {
        s=s+itemsPrice[i];
    }
    setSum(s);
  }

  return (
    <>
      <h1 className="header">Maybelline New York</h1>
      <h2 className="weltext">Welcome To Our Online Store</h2>
      <div className="container">
      {Data.map(sCard)}
      </div>

      <section className="cartsection">
      <p className="csheader">Your Shopping Cart</p>
      <p className="display">
        <div className="iName">
            {
              itemsName.map((itemval)=>{
                return<div>{itemval}</div>
              })
            }
          </div>
          <div className="iPrice">
            {
              itemsPrice.map((itemval)=>{
                return<div>Rs {itemval}</div>
              })
            }
        </div>
      </p>
      </section>
      <div className="bb"><button onClick={bill} className="billButton">Calculate Bill</button></div>
      <p className="bill">Your total Bill is Rs {sum}</p>
    </>
  )
}
export default App;