import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomToolTip from "aod-dependencies/Tooltip/CustomToolTip";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
        </div>
        <CustomToolTip
          // <TooltipDarkMode>
          darkMode={darkMode}
          // </TooltipDarkMode>
          content="Tooltip example"
        >
          <p> Hover Here</p>
        </CustomToolTip>
      </Wrapper>
    </div>
  );
}

export default App;
