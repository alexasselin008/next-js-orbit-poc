import "../css/main.css";
import { ShareGateTheme, ThemeProvider, createThemeVars } from "@orbit-ui/components";

createThemeVars([ShareGateTheme]);

function App({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={ShareGateTheme} colorScheme="light">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;