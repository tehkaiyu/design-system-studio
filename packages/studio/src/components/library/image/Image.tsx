import styled, { css } from "@xstyled/styled-components";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  max-width: 100%;
  height: auto;
  /* generated */
`;

export const Image = styled.img<StyledProps>`
  ${base}
  ${system}
`;
