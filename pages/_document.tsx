import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head >
                <link
                    rel="preload"
                    href="@orbit-ui/css/font/TT-Interphases-Var-Italic.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="@orbit-ui/css/font/TT-Interphases-Var-Roman.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}