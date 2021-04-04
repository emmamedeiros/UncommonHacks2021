/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import { BodyText } from "../Typography/Typography"

// Name, artist, source, title...leave the rest, oncloser
const blurringImage = props => css`
    padding-bottom: 100%;
    background-color: \#272727;
    background-position: center center;
    background-size: cover;
    background-image: url(${props.url});
    background-blend-mode: 'normal';
    &:hover {
        background-blend-mode: multiply;
    }
`;

const Container = styled.div`
${tw`w-full border-4 border-pink hover:border-black h-80 relative`}
${blurringImage}
`;

const Artwork = (props) => (
    // 
    <Container url={props.artwork.img_url} css={tw`text-white`}>
        <div css={tw`absolute w-full h-full opacity-0 hover:opacity-100 p-4`}>
            <div>
            <h3 css={tw`text-3xl font-display pb-4`}>{props.artwork.title}</h3>
            <BodyText css={tw`text-pink`}>by</BodyText>
            <BodyText css={tw`mb-3`}>{props.artwork.artist}</BodyText>
            <BodyText css={tw`text-pink`}>from</BodyText>
            <BodyText css={tw`mb-3`}>{props.artwork.display_org}</BodyText>
            </div>
        </div>
    </Container>
)

export default Artwork