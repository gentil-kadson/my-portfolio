import { Image, Flex, Box, Heading, Text, Button } from "@chakra-ui/react"
import Me from "../assets/kadson.jpg"

const BasicInfo = () => {
    return(
        <Flex flexDirection="row" justifyContent="space-around">
            <Box boxSize="fit-content" p={10}>
                <Heading marginBottom={3} color="blue.500">Hi, I'm Gentil 👋</Heading>
                <Text fontSize="lg">I'm studying to become a front-end web developer, and here's my portfolio, made by me.</Text>
            </Box>
            <Box boxSize="300px">
                <Image src={Me} alt="Gentil Kadson" borderRadius="full"/>
            </Box>

        </Flex> 
    )
}

export default BasicInfo