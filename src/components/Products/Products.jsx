import React, { useState } from "react";
import CardProducts from "./cardProducts";


function Products({product,title,img,text}) {


  const[products,setProducts]=useState(false)

  

const handleChange=()=>setProducts(!products)

  return (
    <>
    <div >
      <h1>{product}</h1>
      {products ===false?
      <div className="container-products">
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
    <input  onClick={handleChange} type='submit' value='ver mas'></input>
      </div>
    :null}
    { products===true?
    <>
    <div className="container-products">
    <CardProducts
      title={title}
      img={img}
      text={text}
    />
    <CardProducts
      title={title}
      img={img}
      text={text}
    />
    <CardProducts
      title={title}
      img={img}
      text={text}
    />
    <CardProducts
      title={title}
      img={img}
      text={text}
    />
    </div>
      <div className="container-products">
      <CardProducts
        title='mesa2'
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <CardProducts
        title={title}
        img={img}
        text={text}
      />
      <input  onClick={handleChange} type='submit' value='ver menos'></input>
      </div></>
      :null}
      </div>
    </>
  );
}

export default Products;
