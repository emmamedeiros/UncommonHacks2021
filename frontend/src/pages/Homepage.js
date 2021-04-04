/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState } from "react"
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import Layout from "../components/Layout/Layout"
import { Title, SectionHeader, BodyText } from "../components/Typography/Typography"
import Artwork from "../components/Artwork/Artwork"

/*
                <span 
                    css={tw`${filter.isOn ? 'text-blue' : 'text-blue'}`}
                    onClick={() => {console.log('Click'); setfilter({...filter, isOn: true})}}
                >something</span>
                 / 
            <span css={tw`${filter.isOn ? 'text-grey' : 'text-black'}`}>anything</span>
*/
const Homepage = () => {
    const initialArtworks = [];
    const initialFilter = {
        isOn: false,
        maxYear: 2021,
        limit: 50,
        artist : null,
        type: null,
        title: null
    }

    const [artworks, setartworks] = useState(initialArtworks);
    const [filter, setfilter] = useState(initialFilter);

    // Data pull methods
    // 

    return(
        <div css={tw`bg-white`}>
        <Layout css={tw``}>
            <Title css={tw`text-blue`}>Show me</Title>
            <Title css={tw`mb-6`}>
                anything
            </Title>
            <hr css={tw`border border-shadow mb-4`}/>
            <div css={css`
                display: grid;
                grid-auto-columns: 20rem;
            `}>
            <Artwork artwork={{
                img_url: "https://cdn.shopify.com/s/files/1/0318/0684/9083/articles/Stocksy_txpde895cbaR5z200_Medium_1465416_1440x800.jpg?v=1612995914",
                artist: "Dean Boyer",
                title: "Broken dreams",
                display_org: "University of Chicago"
            }}/>
            </div>
        </Layout>
        </div>
    )
}

export default Homepage