import styled from 'styled-components';
import { Form as BootForm } from 'react-bootstrap';

export const Select = styled(BootForm.Select)`
  padding: ${(props) => props.theme.spacings.xsm} ${(props) => props.theme.spacings.default}
    ${(props) => props.theme.spacings.sm} ${(props) => props.theme.spacings.default};
  border-radius: ${(props) => props.theme.radius.xlg};
`;
