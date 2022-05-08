import { Box, Flex, Image, Text, Link } from "@chakra-ui/react"

type ProjectData = {
    name: string, 
    image: any,
    description: string, 
    link: string
    background: string
}


const Project = ({ name, image, description, link, background } : ProjectData) => {
    return( 
        <Flex flexDirection="column" gap={4} justifyContent="flex-start" alignItems="center" bg="#FFF" w="300px" h="300px" borderRadius="10px">
            <Box boxSize="80px" bg={background} width="300px" height="100px" borderTopRadius="10px" paddingTop="10px">
                <Image src={image} alt="projectImage" boxSize="90px" padding="5px" margin="auto"/>
            </Box>
            <Box>
                <Link href={link} isExternal fontWeight="bold" fontSize="28px" textAlign="left">{name}</Link>
            </Box>
            <Box>
                <Text width="200px">
                    {description}
                </Text>
            </Box>
        </Flex>
    )
}

export default Project 