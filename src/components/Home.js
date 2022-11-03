import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fooddata from "./Data";

const Home = () => {
  const [menu, setMenu] = useState(Fooddata);

  const filteritems=(curritems)=>{
   const updateitems =Fooddata.filter((curr,index)=>{
    return curr.category === curritems;
   });
    setMenu(updateitems)
  }

  return (
    <section className="container mt-2">
      <h1 className="text-center mb-2" style={{ fontWeight: "500px" }}>
        Search Your Food
      </h1>
      <div className="btn-container d-flex justify-content-around mr-2">
        <Button onClick={()=>filteritems("punjabi")} variant="primary">Punjabi Food</Button>
        <Button onClick={()=>filteritems("vadapav")} variant="secondary">VadaPaav</Button>
        <Button onClick={()=>filteritems("Pizza")} variant="success">Pizza</Button>
        <Button onClick={()=>filteritems("Chai")} variant="danger">Chai</Button>
        <Button onClick={()=>filteritems("Frankie")} variant="primary">Frankie</Button>
        <Button onClick={()=>setMenu(Fooddata)} variant="danger">All</Button>
      </div>
      <div className="container mt-3">
        <div className="row d-flex justify-content-around align-items-center">
          {menu.map((ele, i) => {
            return (
              <Card style={{ width: "22rem",border:'none' }} className='mx-2 mt-4'>
                <Card.Img variant="top" src={ele.imgdata} style={{height:'16rem'}} className='mt-3'/>
                <Card.Body>
                  <Card.Title>{ele.rname}</Card.Title>
                  <Card.Text>
                    Price: {ele.price}
                  </Card.Text>
  
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
