import React, { ReactNode } from 'react';
import * as Styled from './select.styled';

export type SelectProps = {
  /**
   * for content nested inside the Button component.
   */
  children: ReactNode | ReactNode[];

  /**
   * Disabeld attribute
   */
  disabled?: boolean;
};

// ** Semantic option and ID created from map
/* export const Dropdown = ({ children, disabled = false }: DropdownProps) => {
  return (
    <Styled.Dropdown disabled={disabled}>
      {Array.isArray(children) &&
        children.map((optionChild, index) => {
          return <Styled.DropdownOption id={`option-${index}`}>{optionChild}</Styled.DropdownOption>;
        })}
    </Styled.Dropdown>
  );
}; */
//**In this case it is expected to receive the semantic option elements directly as children when using the selector component */
export const Select = ({ children, disabled = false }: SelectProps) => {
  return <Styled.Select disabled={disabled}>{children}</Styled.Select>;
};
