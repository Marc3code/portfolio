import React from "react";
import { ButtonContainer } from "./style";

const Button = ({label, onClick}) =>{
    return(
        <div>
            <ButtonContainer className="btn" type="button" onClick={onClick}>
                {label}
            </ButtonContainer>
        </div>
    )
}

export default Button;