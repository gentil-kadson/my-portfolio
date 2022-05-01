import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react"


type StatsItemData = {
    title?: string, 
    content: string,
    image?: any
}

const StatsItem = ({ title, content, image } : StatsItemData) => {
    return(
        <Flex w="300px" h="300px" bg="gray.50" boxShadow="2xl" borderRadius="10px" p={5} m={3} flexDirection="column" justifyContent="space-around" alignItems="center">
                <Heading textAlign="center" marginBottom={4}>{image ? <Box boxSize="90px">
                    <Image src={image} align=""/>
                </Box> : title}</Heading>
                <Text textAlign="justify">{content}</Text>
        </Flex>
    );
}

export default StatsItem