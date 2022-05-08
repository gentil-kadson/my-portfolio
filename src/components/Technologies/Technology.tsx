import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react"

type TechnologyData = {
    image: any, 
    text: string,
}

const Technology = ({ image, text } : TechnologyData) => {
    return(
        <Flex padding={10} borderRadius="10px" flexDirection="column" bg="#FFF" alignItems="center" width="300px" justifyContent="space-around" margin="20px" h="400px">
            <Box boxSize="90px" bg="gray.900" borderRadius="10px" padding="10px">
                <Image src={image} alt="technology-icon"/>
            </Box>
            <Box h="fit-content" w="200px">
                <Text width="fit-content">{text}</Text>
            </Box>
        </Flex>
    );
}

export default Technology 