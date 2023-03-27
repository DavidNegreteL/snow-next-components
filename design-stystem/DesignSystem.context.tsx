import { ThemeProvider } from "styled-components";

export function DesignSystemProvider({
  theme,
  children,
}: {
  theme: any;
  children: React.ReactNode;
}) {
  if (!theme) return <>{children}</>;

  const { dependencies } = theme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
