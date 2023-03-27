import styled from 'styled-components';
import { Button as BootButton } from 'react-bootstrap';

export const Button = styled(BootButton)<{ variant: string }>`
  width: 100%;
  font-family: ${(props) => props.theme.typography.fontFace};
  font-size: ${(props) => props.theme.typography.base1};
  padding: ${(props) => props.theme.spacings.xsm} ${(props) => props.theme.spacings.default}
    ${(props) => props.theme.spacings.sm} ${(props) => props.theme.spacings.default};
  border: none;
  border-radius: ${(props) => props.theme.radius.xlg};

  ${(props) => applyTheme(props.variant, props.theme)};
`;

// Todo: Build the Design System Interface and export it to replace any type in theme.
const applyTheme = (buttonVariant: string, theme: any) => {
  switch (buttonVariant) {
    case 'primary':
      return `
            background-color: ${theme.colors.darkGray4};
            color: ${theme.colors.black};
            &:hover:not(:disabled), &:focus {
                background-color: ${theme.colors.primary1};
                color: ${theme.colors.white};
            }
            &:disabled {
                background-color: ${theme.colors.disabled};
            }
            `;
    case 'secondary':
      return `
            background-color: ${theme.colors.secondary1};
            color: ${theme.colors.white};
            &:hover:not(:disabled), &:focus {
                background-color: ${theme.colors.secondary2};
            }
            &:focus {
                box-shadow: 0 0 0 0.25rem ${theme.colors.secondary1};
            }
        `;
  }
};
