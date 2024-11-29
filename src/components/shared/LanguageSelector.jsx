import { Box, Text } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { LANGUAGE_VERSIONS } from "../../constants"; // Assuming you still have the language constants

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:{" "}
      </Text>
      <MenuRoot isLazy>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {language}
          </Button>
        </MenuTrigger>
        <MenuContent bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              value={lang}
              onClick={() => onSelect(lang)}
              color="white"
              bg={lang == language ? "#31363F" : "transparent"}
              _hover={{ bg: "#31363F" }}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.500" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default LanguageSelector;
