import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Title = styled.h1`
${tw`font-display text-6xl leading-none`}
`;

const SectionHeader = styled.h2`
${tw`font-display text-3xl`}
`;

const BodyText = styled.p`
${tw`font-text text-base`}
`;

export {
    Title,
    SectionHeader,
    BodyText
}