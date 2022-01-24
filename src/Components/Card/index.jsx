import React, { useEffect, useState } from "react";
import {
  Container,
  TheCard,
  ContainerCard,
  ContainerAddRemove,
  Button,
  IconCard,
  ButtonInital,
  ContainerButton,
  Inside,
  ContainerInside,
  FieldType,
  InputType,
  ContainerGasto,
  ContainerPage,
  ContainerGanhos,
  HeaderCard,
  InputSearch,
  ContainerList,
  ButtonSave
} from "./style";

import Remove from "../../Assets/Images/remove.png";

export const Card = () => {
  const [reload, setReload] = useState(true);

  const [cardFieldsGanhosList, setCardFieldsGanhosList] = useState([]);
  const [cardFieldsGanhos, setCardFieldsGanhos] = useState([{
    valorRecebido: "",
    origemRecebido: "",
  }]);

  const [cardFieldsGastoList, setCardFieldsGastoList] = useState([]);
  const [cardFieldsGasto, setCardFieldsGasto] = useState([{}]);

  async function handleChange(){

    await cardFieldsGasto.push({
      itemComprado:  "Camisa Lacoste",
      precoItem: "250",
      tipoItem: "Roupa"
    })
    console.log("cardFieldsGasto:", cardFieldsGasto.length);
    console.log("cardFieldsGastoList:", cardFieldsGastoList.length);
  }

  const addCardGasto = (e) => {
    e.preventDefault();
    if (cardFieldsGastoList.length < 10) {
      let list = cardFieldsGastoList;
      list.push(cardFieldsGastoList);
      setCardFieldsGastoList(list);
      setReload(!reload);
    }
  };

  const removeCardGasto = (e, i) => {
    e.preventDefault();
    if (cardFieldsGastoList.length > 0) {
      let list = cardFieldsGastoList;
      list.splice(i, 1);
      setCardFieldsGastoList(list);
      setReload(!reload);
    }
  };

  const addCardGanho = (e) => {
    e.preventDefault();
    if (cardFieldsGanhosList.length < 10) {
      let list = cardFieldsGanhosList;
      list.push(cardFieldsGanhosList);
      setCardFieldsGanhosList(list);
      setReload(!reload);
    }
  };

  const removeCardGanho = (e, i) => {
    console.log("Removendo card");
    e.preventDefault();
    if (cardFieldsGanhosList.length > 0) {
      let list = cardFieldsGanhosList;
      list.splice(i, 1);
      setCardFieldsGanhosList(list);
      setReload(!reload);
    }
  };

  console.log("cardFieldsGasto:", cardFieldsGasto.length);
  console.log("cardFieldsGastoList:", cardFieldsGastoList.length);


  return (
    <Container>
      <ContainerPage>
        <ContainerGasto>
          <HeaderCard>
            <ContainerButton>
              <InputSearch placeholder="Pesquise seus gastos" />
            </ContainerButton>
            <ContainerButton>
              <ButtonInital onClick={(e) => addCardGasto(e)}>
                Adicionar gastos
              </ButtonInital>
            </ContainerButton>
          </HeaderCard>
          {cardFieldsGastoList.map((object, i) => {
            return (
              <TheCard>
                <ContainerCard key={i}>
                  <ContainerAddRemove>
                    <Button>
                      <IconCard
                        src={Remove}
                        onClick={(e) => removeCardGasto(e, i)}
                      />
                    </Button>
                  </ContainerAddRemove>
                  <Inside>
                    <ContainerInside>
                      <FieldType>Com o que foi o gasto?</FieldType>
                      <InputType name="intemComprado" value={cardFieldsGasto.intemComprado}/>
                    </ContainerInside>
                    <ContainerInside>
                      <FieldType>Quanto lhe custou?</FieldType>
                      <InputType name="precoItem" value={cardFieldsGasto.precoItem}/>
                    </ContainerInside>
                    <ContainerInside>
                      <FieldType>Qual foi o tipo do gasto?</FieldType>
                      <InputType name="tipoItem"  value={cardFieldsGasto.tipoItem}/>
                    </ContainerInside>
                  </Inside>
                </ContainerCard>
                <ContainerAddRemove>
                  <ButtonSave onClick={() => handleChange()}>
                     Salvar
                  </ButtonSave>
                </ContainerAddRemove>
              </TheCard>
            );
          })}
          { cardFieldsGasto.length > 1 ?
           <ContainerList>
             {cardFieldsGasto.map((i) =>{
               return(
              <FieldType key={i}>{i.itemComprado} R${i.precoItem} {i.tipoItem}</FieldType>
              )
             })
             }   
          </ContainerList>
            : null}
        </ContainerGasto>

        <ContainerGanhos>
          <HeaderCard>
            <ContainerButton>
              <InputSearch placeholder="Pesquise seus ganhos" />
            </ContainerButton>
            <ContainerButton>
              <ButtonInital onClick={(e) => addCardGanho(e)} primary>
                Adicionar ganhos
              </ButtonInital>
            </ContainerButton>
          </HeaderCard>
          {cardFieldsGanhosList.map((object, i) => {
            return (
              <TheCard>
                <ContainerCard key={i}>
                  <ContainerAddRemove>
                    <Button>
                      <IconCard
                        src={Remove}
                        onClick={(e) => removeCardGanho(e)}
                      />
                    </Button>
                  </ContainerAddRemove>
                  <Inside>
                    <ContainerInside>
                      <FieldType>Onde conseguiu a grana?</FieldType>
                      <InputType />
                    </ContainerInside>
                    <ContainerInside>
                      <FieldType>Qual foi o valor?</FieldType>
                      <InputType />
                    </ContainerInside>
                  </Inside>
                
                </ContainerCard>
                <ContainerAddRemove>
                  <ButtonSave>
                     Salvar
                  </ButtonSave>
                </ContainerAddRemove>
              </TheCard>
            );
          })}
          <ContainerList>
            <FieldType>Qual foi o valor?</FieldType>
            <FieldType>Qual foi o valor?</FieldType>
            <FieldType>Qual foi o valor?</FieldType>
            <FieldType>Qual foi o valor?</FieldType>
          </ContainerList>
        </ContainerGanhos>
      </ContainerPage>
    </Container>
  );
};
