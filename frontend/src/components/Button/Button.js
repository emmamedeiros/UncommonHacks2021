/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import tw from "tailwind.macro";
import styled from "@emotion/styled";

const Container = styled.button`
    ${tw`flex px-2 py-1 rounded-full shadow-none font-display text-black bg-yellow`}
`;

const Button = (props) => (
    <Container 
        onClick={() => props.onClick}
    >
        { props.img_src 
        ? <img src={props.img_src} css={tw`mr-2`}alt="Button"></img> 
        : null
        }
        {props.text}
    </Container>
)

export default Button