import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
  compose,
  variant,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";
import { Flex } from "../flex";
import { Spinner } from "../spinner";

type DefaultProps = {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "basic" | "primary" | "transparent" | "link";
};

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  DefaultProps;

const base = ({ theme }: any) => theme.components.buttons.base;
const variants = variant({ scale: "components.buttons.variants" });

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  appearance: button;
  ${base}
  ${variants}
  ${compose(space, layout, flexbox, position)}
`;

export type ButtonProps = StyledComponentProps<
  "button",
  any,
  StyledButtonProps,
  never
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, isLoading, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      disabled={isLoading || disabled}
      isLoading={isLoading}
      {...props}
    >
      {isLoading && (
        <Spinner
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size="body"
        />
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={isLoading ? 0 : 1}
      >
        {children}
      </Flex>
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: "basic",
};
