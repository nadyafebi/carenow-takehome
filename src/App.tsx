import Navbar from "./components/Navbar";
import TreatmentForm from "./components/TreatmentForm";
import { VStack, Center, Card, Heading, Box } from "@chakra-ui/react";

function App() {
  return (
    <VStack bg="canvas.400" minHeight="100dvh">
      <Navbar />
      <Center paddingY="65px" width="100%">
        <Card boxShadow="lg" maxWidth="400px" padding={6} width="100%">
          <Heading size="lg">Treatment Entry</Heading>
          <Box marginTop={4}>
            <TreatmentForm />
          </Box>
        </Card>
      </Center>
    </VStack>
  );
}

export default App;
