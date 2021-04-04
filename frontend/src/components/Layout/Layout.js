/** @jsx jsx */
import { Link } from "react-router-dom";
import { jsx } from "@emotion/core"
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import logo from './logo.svg';


const Wrapper = styled.div`
${tw`min-h-screen p-12 text-black`}
`;

const Footer = styled.footer`
${tw`flex items-center border-t-2 border-white-400 mt-4 py-4`}
`;

const Layout = (props) => {
    return(
        <Wrapper>
            <header css={tw`mb-8`}><Link to="/"><img src={logo} alt="Show me some art!"/></Link></header>
            { props.children }
            <Footer>
                <h3 css={tw`font-display`}>showmesome.art</h3>
                <div css={tw`ml-auto`}>
                    <Link css={tw`font-text no-underline text-black hover:text-blue`} to="/credits">credits</Link>
                </div>
            </Footer>
        </Wrapper>
    )
}

export default Layout