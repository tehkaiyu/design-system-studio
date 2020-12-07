import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  /** generated */
  background-color: backgroundLighter;
  box-shadow: xs;
  border-style: solid;
  border-radius: sm;
  border-width: normal;
  border-color: borderColor;
`;

export const Card = styled.section<Props>`
  ${base}
  ${system}
`;
