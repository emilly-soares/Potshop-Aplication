import React from "react";
import { ContainerImg } from "./style.js";

export default function Categories(props) {
   return (
      <ContainerImg>

         <div className="bloco">
            <img className="blocoimg"
               src={props.image} alt="icon categorias" />
            <h2 className="cat">{props.description}</h2>
            <h2 className="cat">Dimesão: {props.dimension}</h2>
            <h2 className="cat">R${props.price},00</h2>
         </div>

      </ContainerImg>
   );
}