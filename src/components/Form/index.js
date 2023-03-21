import React from "react";
import api from "../../services/api";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Table, Td, Tr, Th, Thead, Tbody } from './style';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Form() {
   const [products, setProducts] = useState([]);
   const [setOnEdit] = useState(null);

   const getProducts = async () => {
      try {
         const res = await api.get("/products");
         setProducts(res.data.sort((a, b) => (a.description > b.description ? 1 : -1)));
      } catch (error) {
         toast.error(error);
      }
   };

   useEffect(() => {
      getProducts();
   }, [setProducts]);

   const handleDelete = async (id) => {
      await api.delete("/products/" + id)
         .then(({ data }) => {
            const newArray = products.filter((product) => product._id !== id);
            setProducts(newArray);
            toast.success(data);
         })
         .catch(({ data }) => toast.error(data));
      setOnEdit(null);
   };

   return (
      <Table>
         <Thead>
            <Tr>
               <Th>Descrição</Th>
               <Th>Valor</Th>
               <Th>Dimensão</Th>
               <Th>Imagem</Th>
               <Th></Th>
               <Th></Th>
            </Tr>
         </Thead>
         <Tbody>
            {products.map((item, i) => (
               <Tr key={i}>
                  <Td width="30%">{item.description}</Td>
                  <Td width="30%">{item.price}</Td>
                  <Td width="30%">{item.dimension}</Td>
                  <Td width="30%">{item.image.substring(0, 5) + "..."}</Td>
                  <Td alignCenter width="5%">
                     <Link to={"/update/" + item._id}><FaEdit /></Link>

                  </Td>
                  <Td alignCenter width="5%">
                     <FaTrash onClick={() => handleDelete(item._id)} />
                  </Td>
               </Tr>
            ))}
         </Tbody>
      </Table>
   );
};
