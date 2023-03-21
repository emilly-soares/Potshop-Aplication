import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import Products from "../../components/Products";
import api from "../../services/api";


export default function Home() {
   const [list, setList] = useState([]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get("/products");
         setList(response.data);
      }
      loadList();
   }, []);

  
   return (

      <Container>
         <div className="content">
            {list &&
               list.map(l => (
                  <Products
                     _id={l._id}
                     description={l.description}
                     price={l.price}
                     dimension={l.dimension}
                     image={l.image}
                  />
               ))}
         </div>


      </Container >
   );
}





