/* eslint-disable react/prop-types */
import { Box, Button, Text } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { executeCode } from "../../api";
import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toaster.create({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        type: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        isLoading={isLoading}
        variant="outline"
        colorScheme="green"
        mb={3}
        onClick={runCode}
      >
        Run
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.500" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : `Click "Run" to see the output here`}
      </Box>
    </Box>
  );
};

export default Output;
