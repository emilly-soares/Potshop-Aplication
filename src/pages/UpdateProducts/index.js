import { FormContainer, Label, Input, InputArea, Button, Container, Title } from './style';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

export default function UpdateProducts({ history }) {
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [dimension, setDimension] = useState("");
   const [image, setImage] = useState("");

   const url_atual = window.location.href;
   const id = url_atual.substring(45);

   const [list, setList] = useState([0]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get("/products");
         setList(response.data);
      }
      loadList();
   },[]);

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         list.map(z => {
            if (z._id === id) {
               api.put("/products/" + id, {
                  id,
                  description,
                  price,
                  dimension,
                  image
               });
               toast("Alterado com Sucesso");
            }
         })
        
         history.push("/products");

      } catch (err) {
         toast.error("Erro ao Alterar !" + err)
      }
   }

   return (
      <>
         <FormContainer onSubmit={handleSubmit}>
            <InputArea>
               <Label>Descrição</Label>
               <Input name="desc" onChange={event => setDescription(event.target.value)} />
            </InputArea>
            <InputArea>
               <Label>Valor</Label>
               <Input name="val" placeholder="R$" type="number" onChange={event => setPrice(event.target.value)} />
            </InputArea>
            <InputArea>
               <Label>Dimensão</Label>
               <Input name="dim" onChange={event => setDimension(event.target.value)} />
            </InputArea>
            <InputArea>
               <Label>Imagem</Label>
               <Input name="img" onChange={event => setImage(event.target.value)} />
            </InputArea>
            <Button type="submit">SALVAR</Button>
         </FormContainer>
         <Container>
         </Container>
         <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </>
   );
}
