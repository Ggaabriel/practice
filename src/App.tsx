import { useEffect } from "react";
import RoutersContainer from "./RoutersContainer/Routers";
import Menu from "./components/Menu/Menu";
import { webApp } from "./tg";

function App() {
    useEffect(() => {
        if (webApp !== undefined) {
            webApp.ready();
            webApp.expand();

            webApp.enableClosingConfirmation();

            webApp.onEvent("viewportChanged", () => {
                webApp.expand();
            });
        }
    }, []);
    return (
        <>
            <Menu />
            <RoutersContainer />
        </>
    );
}

export default App;
