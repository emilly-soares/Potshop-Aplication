import { FormContainer, Label, Input, InputArea, Button, Container, Title } from './style';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { Form } from "../../components/Form";

export default function RegisterProducts() {

   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [dimension, setDimension] = useState("");
   const [image, setImage] = useState("");
   const [products, setProducts] = useState([]);
   const [setOnEdit] = useState(null);



   async function handleSubmit(event) {
      event.preventDefault();
      try {

         if (!description ||
            !price ||
            !dimension ||
            !image)
            toast.error("Preencha todos os campos!!");
         else {
            await api.post("/products", {
               description,
               price,
               dimension,
               image
            });
            toast.success("Produto Cadastrado com Sucesso!!");
         }

      } catch (err) {
         toast.error("Erro ao Cadastrar!" + err)
      }
   }

   const [list, setList] = useState([]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get("/products");
         setList(response.data);
      }
      loadList();
   }, []);

   return (
      <div class="div-container">
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
            <Title>PRODUTOS</Title>

            <Form setOnEdit={setOnEdit} products={products} setProducts={setProducts} />
         </Container>
         <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </div>
   );

}