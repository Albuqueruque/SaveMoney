import React, { useState } from "react";
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
} from "./style";

import AddNew from "../../Assets/Images/add-new.png";
import Remove from "../../Assets/Images/remove.png";

export const Card = () => {
  const [reload, setReload] = useState(true);

  const [cardFieldsGanhosList, setCardFieldsGanhosList] = useState([]);
  const [cardFieldsGanhos, setCardFieldsGanhos] = useState({
    valorRecebido: "",
    origemRecebido: "",
  });

  const [cardFieldsGastoList, setCardFieldsGastoList] = useState([]);
  const [cardFieldsGasto, setCardFieldsGasto] = useState({
    itemComprado: "",
    precoItem: "",
    tipoItem: "",
  });

  const addCardGasto = (e) => {
    console.log("Adicionando card");
    console.log("CardFields:", cardFieldsGasto);
    e.preventDefault();
    if (cardFieldsGastoList.length < 10) {
      let list = cardFieldsGastoList;
      list.push(cardFieldsGastoList);
      setCardFieldsGastoList(list);
      setReload(!reload);
    }
  };

  const removeCardGasto = (e, i) => {
    console.log("Removendo card");
    e.preventDefault();
    if (cardFieldsGastoList.length > 1) {
      let list = cardFieldsGastoList;
      list.splice(i, 1);
      setCardFieldsGastoList(list);
      setReload(!reload);
    }
  };

  const addCardGanho = (e) => {
    console.log("Adicionando card");
    console.log("CardFields:", cardFieldsGanhos);
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
    if (cardFieldsGanhosList.length > 1) {
      let list = cardFieldsGanhosList;
      list.splice(i, 1);
      setCardFieldsGanhosList(list);
      setReload(!reload);
    }
  };

  return (
    <Container>
      <ContainerPage>
        <ContainerGasto>
          <ContainerButton>
            <ButtonInital onClick={(e) => addCardGasto(e)}>
              Adicionar gastos
            </ButtonInital>
          </ContainerButton>
          {cardFieldsGastoList.map((object, i) => {
            return (
              <TheCard>
                <ContainerCard key={i}>
                  <ContainerAddRemove>
                    <Button>
                      <IconCard src={AddNew} onClick={(e) => addCardGasto(e)} />
                    </Button>
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
                      <InputType />
                    </ContainerInside>
                    <ContainerInside>
                      <FieldType>Quanto lhe custou?</FieldType>
                      <InputType />
                    </ContainerInside>
                    <ContainerInside>
                      <FieldType>Qual foi o tipo do gasto?</FieldType>
                      <InputType />
                    </ContainerInside>
                  </Inside>
                </ContainerCard>
              </TheCard>
            );
          })}
        </ContainerGasto>

        <ContainerGanhos>
          <ContainerButton>
            <ButtonInital onClick={(e) => addCardGanho(e)} primary>Adicionar ganhos</ButtonInital>
          </ContainerButton>
          {cardFieldsGanhosList.map((object, i) => {
            return (
              <TheCard>
                <ContainerCard key={i}>
                  <ContainerAddRemove>
                    <Button>
                      <IconCard src={AddNew} onClick={(e) => addCardGanho(e)} />
                    </Button>
                    <Button>
                      <IconCard src={Remove} onClick={(e) => removeCardGanho(e)} />
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
              </TheCard>
            );
          })}
        </ContainerGanhos>
      </ContainerPage>
    </Container>
  );
};
