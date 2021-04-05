/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useState, useEffect } from "react"
import styled from "@emotion/styled";
import axios from "axios";
import tw from "tailwind.macro";

import Layout from "../components/Layout/Layout"
import { Title, SectionHeader, BodyText } from "../components/Typography/Typography"
import Artwork from "../components/Artwork/Artwork"

import spyglass from './search.svg'
import Button from "../components/Button/Button"

const Homepage = () => {
    const initialArtworks = [];
    const initialSearch = {
        query: "computers"
    }

    const [artworks, setartworks] = useState(initialArtworks);
    const [search, setsearch] = useState(initialSearch);

    const makeSearchQuery = term => `https://api.artic.edu/api/v1/artworks/search?q=${term}&limit=30&fields=id,title,image_id,date_end,artist_display,place_of_origin`
    const makePreviewImgSrc = imgId => `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`

    function cutString(s, n) {
        let cut= s.indexOf(' ', n);
        if (cut === -1) return s;
        return s.substring(0, cut)
    }

    function sanitize(res) {
        return(res.data?.data?.map((artwork) => ({
            img_url: makePreviewImgSrc(artwork.image_id),
            title: cutString(artwork.title, 20),
            origin: cutString(artwork.place_of_origin, 20),
            date: artwork.date_end,
            artist: cutString(artwork.artist_display, 20)
        })))
    }

    function simpleSearch(query) {
        axios.get(makeSearchQuery(query)).then(
            (res) => setartworks(sanitize(res))
        ).catch(e => console.log(e))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        simpleSearch(search.query);
    }
    // Init: search computers
    useEffect(() => simpleSearch("computer"), [])

    return(
        <div css={tw`bg-white`}>
        <Layout css={tw``}>
            <Title css={tw`text-blue`}>Show me</Title>
            <form 
                css={tw`bg-black my-4 px-4 py-2 flex items-center max-w-md`}
                onSubmit={(e) => {e.preventDefault(); handleSubmit(e); return false}}
            >
                <img css={tw`mr-4`} src={spyglass} alt="Search, you fool!"></img>
                <input 
                    css={tw`font-text text-white bg-black border-none focus:outline-none focus:text-white`}
                    type="text" 
                    name="searchbar" 
                    value={search.query} 
                    placeholder="some art" 
                    onChange={(e) => 
                    setsearch({...search, query: e.target.value})}
                />
                <div css={tw`ml-auto`}>
                <Button onClick={(e) => {e.preventDefault(); handleSubmit()}} text="Go!"/>
                </div>
            </form>
            <hr css={tw`border border-shadow mb-4`}/>
            <div css={css`
                display: grid;
                grid-auto-flow: row;
                gap: 2rem;
                grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))
            `}>
            { artworks.map((artwork, key) => <Artwork artwork={artwork} key={key}/>)}
            </div>
            { artworks.length === 0 
            ? <h1 css={tw`font-display text-blue`}>Be patient, art shall come</h1>
            : null
            }
        </Layout>
        </div>
    )
}

export default Homepage