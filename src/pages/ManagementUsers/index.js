import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import { Link } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { logout } from '../../services/auth';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function ManagementUsers({ history }) {

   const USER = "@POTSHOP:user";
   const recebeUser = JSON.parse(localStorage.getItem(USER));
   const [name, setName] = useState(recebeUser.name);
   const [email, setEmail] = useState(recebeUser.email);
   const [password, setPassword] = useState("");
   


   const [listUsers, setListUsers] = useState([]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get("/users");
         setListUsers(response.data);
      }
      loadList();
   }, []);
   async function deletar(user_id) {
      try {
         await confirmAlert({
          title: 'ATENÇÃO',
          message: 'Você realmente deseja deletar o usuário?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => api.delete("/users/"+user_id)+logout()+document.location.reload(true)
            },
            {
              label: 'Não'
            }
          ]
        })
       
      } catch (erro) {
        confirmAlert({
          title: 'Atenção!',
          message: 'Erro ao deletar!',
          buttons: [
            {
              label: 'ok'
             
            }
          ]
        })
      }
    }
   async function handleSubmit(event) {
      event.preventDefault();
      try {
         const user = {
            name,
            email,
            password
         };
         await api.put("/users/" + recebeUser._id, user);
         toast.success("Alterado com Sucesso!!");
         history.push("/login");
      } catch (erro) {
         toast.error("Erro ao Alterar!!");
      }
   }

   return (
      <>
      <Container>

         <div className="cont">

            <section className="login">
               <h1>ALTERAR USUÁRIO</h1>

               <form onSubmit={handleSubmit}>

                  <input
                     className="txt"
                     type="text"
                     placeholder={name}
                     value={name}
                     id="nome"
                     onChange={event => setName(event.target.value)}
                     required
                  />

                  <input
                     className="txt"
                     type="email"
                     placeholder={email}
                     value={email}
                     id="email"
                     onChange={event => setEmail(event.target.value)}
                     required
                  />

                  <input
                     className="txt"
                     type="password"
                     placeholder="Senha"
                     id="senha"
                     onChange={event => setPassword(event.target.value)}
                     required
                  />

                  <div>
                     <button className="button" type="submit">Salvar</button><br />
                     <button className="button" style={{backgroundColor: "black",marginTop:"20px"}} onClick={event=>deletar(recebeUser._id)}>Remover Conta</button>
                     <hr className="voltar" />
                     <Link className="link" to="../">
                        Voltar{" "}
                     </Link>
               </div>
               </form>
              
            </section>
         </div>
         <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </Container>
    
      </>
   );
}