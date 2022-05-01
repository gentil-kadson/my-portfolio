import { Container, VStack, Divider } from "@chakra-ui/react"
import BasicInfo from "./components/BasicInfo";
import Stats from "./components/Stats/Stats";

export const App = () => {
  return(
    <Container bg="gray.50" boxShadow="dark-lg" maxW="6xl">
      <VStack w="full" h="full" p={10} spacing={10} alignItems="center" border="3px" borderColor="gray.200">
        <BasicInfo />
        <Divider />
        <Stats />
        <Divider />
      </VStack>
    </Container>
  );
}
