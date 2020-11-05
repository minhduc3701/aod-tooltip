"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var CustomCheckBox_1 = require("aod-dependencies/Checkbox/CustomCheckBox");
var CustomToolTip_1 = require("aod-dependencies/Tooltip/CustomToolTip");
icons_1.initializeIcons();
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode })),
            react_1["default"].createElement(CustomToolTip_1["default"]
            // <TooltipDarkMode>
            , { 
                // <TooltipDarkMode>
                darkMode: darkMode, 
                // </TooltipDarkMode>
                content: "Tooltip example" },
                react_1["default"].createElement(CustomCheckBox_1["default"], { label: "Check box", darkMode: darkMode })))));
}
exports["default"] = App;
