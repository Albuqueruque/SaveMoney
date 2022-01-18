import React, { useEffect, useState } from "react";
import { ContainerHeader,Logo,LogoContainer } from "./style";
import MoneySave from "../../Assets/Images/Money-save-Logo.png"

export const Header  = ()=> {

    return(
        <ContainerHeader>
            <LogoContainer>
                <Logo  src={MoneySave}/>
            </LogoContainer>
        </ContainerHeader>
    )
}