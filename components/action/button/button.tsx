import React, { ReactNode } from 'react';
import * as Styled from './button.styled';

export type ButtonProps = {
  /**
   * for content nested inside the Button component.
   */
  children: ReactNode;

  /**
   * Disabeld attribute
   */
  disabled?: boolean;

  /**
   * to handle click events
   */
  onClick?: () => void;

  /**
   * specify button type
   */
  type?: 'button' | 'submit';

  /**
   * configurable button variant
   */
  variant: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
};

export const Button = ({ children, disabled = false, onClick = () => {}, type = 'button', variant }: ButtonProps) => {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} type={type} variant={variant}>
      {children}
    </Styled.Button>
  );
};
