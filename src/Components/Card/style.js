import styled,{keyframes} from "styled-components";



export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 10% auto auto auto;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const HeaderCard = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
`

export const ContainerGasto = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
  /* background: gold; */
`;



export const ContainerGanhos = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
  /* background: hotpink; */
`;

const AnimationEnter = keyframes`
  from{
    opacity: 0.1;
    transform : scale(0.85);
    transform: translateY(-2.5em);
  };
  to{
    opacity: 1;
    transform : scale(1); 
    transform: translateY(0em);
    transition: opacity 300ms ease-in;
  };
`

const AnimationLeave = keyframes`
  from{
    opacity: 1;
    transform : scale(1); 
    transform: translateY(0em);
    transition: opacity 300ms ease-in;
  };
  to{
    opacity: 0.1;
    transform : scale(0.45);
    transform: translateY(-3em);
  };
`

export const TheCard = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin: 0% 5% 5% 5%;
  animation: ${AnimationEnter} 0.5s;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 0.0625rem solid #707070;
  border-radius: 0.625rem;
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 2rem;
  background:  #d2effa;
`;

export const ContainerAddRemove = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
  position: relative;
  margin-top: 0.2rem;
`;

export const Button = styled.span`
  &:hover {
    opacity: 0.45;
  }
`;

export const IconCard = styled.img`
  height: 2.2rem;
`;

export const ContainerButton = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
`;

export const ButtonInital = styled.button`
  background: ${(props) => (props.primary ? "#d2effa" : "#387bff")};
  color: ${(props) => (props.primary ? "#387bff" : "#d2effa")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  font-family: "Poppins";
`;

export const Inside = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  border: 0.0625rem solid #707070;
  border-radius: 0.625rem;
  background: #387bff;
`;

export const ContainerInside = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 0.5rem;
  color: #707070;
`;

export const FieldType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: normal;
  color: #ffff;
  margin: 5px;
`;

export const InputType = styled.input`
  font-size: 14px;
  padding: 10px;
  margin: 5px;
  border: 0.04rem inset  #707070;
  border-radius: 3px;
`;



export const InputSearch = styled.input`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  font-family: "Poppins";
  ::placeholder {
       color: #86939e;
       opacity: 0.65;
   }
`;

export const ContainerList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 90%;
  height: 100%;
  border: 0.0625rem ;
  border-radius: 0.625rem;
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 2rem;
  justify-content: flex-start;
  background: #387bff;
`