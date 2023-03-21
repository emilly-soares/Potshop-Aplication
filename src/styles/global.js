import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
   
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body, html {
  height: 100vh;
  font-family: "Source Sans Pro", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

  .txt {
    border-radius: 6px;
    height: 50px;
    margin: 5px;
    background-color: #FFFFFF;
    font-size: 14px;
    width: 350px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 4px -2px #e0e0e0;
    -moz-box-shadow: 0 4px 4px -2px #e0e0e0;
    -webkit-box-shadow: 0 4px 4px -2px #e0e0e0;
    &::placeholder {
      padding-left: 5px;
      color: #2E2E2E;
    }
  }


.cont{
  padding: 100px;
}



 .button {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    background-color:#6400E4;
    height: 60px;
    border: 0;
    border-radius: 6px;
    width: 350px;
    font-size: 16px;
    font-weight: bold;
  }


    a {
    font-size: 14;
    text-decoration: none;
    cursor: pointer;
  }
  
  .login{
  width: 400px;
  background: #fff;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
   }

 `;