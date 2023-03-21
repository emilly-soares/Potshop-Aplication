import styled from "styled-components";

export const Container = styled.div` .content {
   width: 80%;
   margin: 0 auto;
   margin-top: 10px;
   justify-content: center;
   align-content: center;

}

.content>div {
   background-color: #fff;
   background: #fff;
}

@media screen and (max-width: 580px) {
   .content {
      width: 100%;
   }
}

`;