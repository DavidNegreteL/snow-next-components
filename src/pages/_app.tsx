import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import DesignSystem from "../../design-stystem/design.system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DesignSystem.snowball}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
