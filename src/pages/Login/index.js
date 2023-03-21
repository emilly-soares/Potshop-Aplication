import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";

import { login } from "../../services/auth.js";

import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Login({ history }) {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         const user = {
            email,
            password
         };
         const response = await api.post("/session", user);
         const { token, user: userData } = response.data;
         if (token) {
            login(token, userData);
            
         }
         history.push("/");
        
      } catch (erro) {
         toast.error("Senha ou E-mail, inválidos!");
      } 
   }
   return (

      <Container>
         <div id="espaco"></div>
         <section className="login">

            <h1 className="titulo">Login</h1>

            <form onSubmit={handleSubmit}>

               <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={event => setEmail(event.target.value)}
                  required
                  className="txt"

               />

               <input
                  type="password"
                  placeholder="Senha"
                  id="senha"
                  onChange={event => setPassword(event.target.value)}
                  required
                  className="txt"
               />
               <div>

                  <button className="button" type="submit">Entrar</button>
                  <p className="cad">Primeiro Acesso?</p>
                  <Link to="cadastro">
                     <button className="button" type="submit">Cadastre-se</button>
                  </Link>
               </div>
               <ToastContainer autoClose={4000} position={toast.POSITION.BOTTOM_LEFT} />
            </form>
         </section>
      </Container>

   );
}