import React, { ForwardedRef } from "react";
import styled from "styled-components";

interface props {
    placeholder? : string;
}

const InputText = React.forwardRef(({placeholder} : props, 
    ref : ForwardedRef<HTMLInputElement>) => {
        return(
            <InputTextStyle placeholder={placeholder} 
            ref={ref} />  
        )
});

const InputTextStyle = styled.input.attrs({ type: 
    "text"})`
    padding: 0.25rem 0.75rem;
    boarder : 1px solid ${({theme}) => theme.color.border};
    boarder-radius : ${({theme}) => theme.borderRadius.dafault};
    font-size : 1rem;
    line-height : 1.5rem;
    text-color : ${({theme}) => theme.color.text};
`;

export default InputText;