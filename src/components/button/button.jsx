// comman button styles
import styled, { css } from 'styled-components';

const Button = styled.button`
    border: 1px hidden black;
    background-color: #464545;
    color: white;
    border-radius: 15px;
    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
    font-weight: 600;
    
    :hover {
        border: 1.5px solid black;
        border-radius: 8px;
        background-color: #464545;
        color: white;
    }
    :focus{
        border: 1.5px solid black;
        border-radius: 8px;
        background-color: white;
        color: #464545;
        outline: none;
    }

    ${(props) => props.width && css`width: ${props.width};`}

    ${(props) => {
    const style = {
        small: css`
        padding: 10px 12px;
        font-size: 12px;
        `,
        medium: css`
        padding: 12px 18px;
        font-size: 1em;
        `,
        large: css`
        padding: 16px 18px;
        font-size: 18px;
        `,
        // medium是default
    }[props.size || 'medium'];

    return style;
    }}

    ${(props) => {
    const style = {
        primary: css`
        background: #e0446d;
        color: white;
        `,
        secondary: css`
        background: #f5f8fd;
        color: #008fb4;
        `,
        search: css`
        border: hidden;
        background-color: #5cac8e;
        color: white;
        :hover {
        background-color: #437764;
        color: white;
        border-radius: 15px;
        border: hidden;
        }
        `,
    }[props.variant];

    return style;
    }}
    `;

export default Button;
