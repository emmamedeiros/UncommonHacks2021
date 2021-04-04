/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled";
import tw from "tailwind.macro";


import Layout from "../components/Layout/Layout"
import { Title, SectionHeader, BodyText } from "../components/Typography/Typography"

const Credits = () => (
    <div css={tw`bg-pink`}>
    <Layout css={tw``}>
        <Title>Credit where credit is due.</Title>
        <BodyText>What, you thought we made 119,271 pieces of art ourselves? Hardly. We're indebted to the following sources:</BodyText>
        <SectionHeader css={tw`mb-1`}>Assets</SectionHeader>
        <BodyText>Bluu Next font, by the criminally underrated Velvetyne Type Foundry</BodyText>
    </Layout>
    </div>
)

export default Credits