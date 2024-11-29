import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/shared/CodeEditor";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Toaster />
      <CodeEditor />
    </Box>
  );
}

export default App;
