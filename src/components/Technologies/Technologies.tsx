import { Flex, Heading, Container } from "@chakra-ui/react"

import node from "../../assets/node-js-logo.png"
import TS from "../../assets/ts-icon.png"
import reactIcon from "../../assets/react-icon.png"
import english from "../../assets/english.png"
import chakraUI from "../../assets/chakra-ui-icon.png"

import Technology from "./Technology"

const Technologies = () => {
    return(
        <>
            <Heading>About My Skills</Heading>
            <Flex flexDirection="row" justifyContent="flex-start" gap={2} alignItems="center" bg="gray.300" flexWrap="wrap" borderRadius="20px" borderTopWidth={10} borderBottomWidth={10} borderTopColor="blue.500" borderBottomColor="blue.500">
                <Technology text="I'm currently learning ReactJS; I already got some skills!" image={reactIcon}/>
                <Technology text="I have lots of experience with NodeJS, since I've worked on many projects that need it." image={node}/>
                <Technology image={english} text="I've been studying english for 10 years, so I'm an advanced speaker!" />
                <Technology image={TS} text="I'm a beginner in TypeScript, but I can handle myself with it on React/NextJS projects! Also, I can code in JavaScript!" 
                />
                <Technology image={chakraUI} text="I'm getting started with Chakra UI. This portfolio was built using it."  />
            </Flex>
        </>
            
    );
}

export default Technologies