import { Provider } from "./components/ui/provider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="dark">
          <App />
        </Theme>
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
