import React, { useEffect, useState } from "react";
import { ContainerHeader,Logo,LogoContainer, Button, BottomBox, ContainerButton } from "./style";
import MoneySave from "../../Assets/Images/Money-save-Logo.png"

export const Header  = ()=> {

    return(
        <ContainerHeader>
            <BottomBox>
                <LogoContainer>
                    <Logo  src={MoneySave}/>
                </LogoContainer>
            </BottomBox>
        </ContainerHeader>
    )
}