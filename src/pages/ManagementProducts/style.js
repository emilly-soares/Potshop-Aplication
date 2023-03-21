import styled from "styled-components";

export const Container = styled.div`
  margin-top:100px;
  margin-left: 10% ;
  width: 80%;
  max-width: 1500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
   @media screen and (min-width: 100px) and (max-width:800px) {
     width:100%;
     margin-left:0%;
}
  
`;

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;


`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;


export const FormContainer = styled.form`
  margin-left: 10% ;
  margin-top:100px;
  width: 80%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "width: 100%"}
  }
  @media screen and (min-width: 100px) and (max-width:800px) {
     width:100%;
     margin-left:0%;
}
@media screen and (min-width: 501px) and (max-width:1200px) {
     width:70%;
     margin-left:15%;
}
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 100px) and (max-width:500px) {
     width:100%;
     margin-left:0%;
}
@media screen and (min-width: 501px) and (max-width:1200px) {
     width:100%;
     margin-left:0%;
}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  @media screen and (min-width: 100px) and (max-width:1200px) {
     width:100%;
     margin-left:0%;
}
`;

export const Label = styled.label``;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #3A05E9;
  color: white;
  height: 42px;
  margin-top:19px;
  width: 18%;
  @media screen and (min-width: 100px) and (max-width:1200px) {
    width: 20%;
     margin-left:40%;
}
`;

export const Title = styled.h2``;
