import styled, { css } from "@xstyled/styled-components";
import { variant as createVariant } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  font-family: body;
  margin: 0;
`;

/* generated */
const variant = createVariant({
  key: "text.variant",
  prop: "variant",
  default: "body",
  variants: {
    heading: css`
      font-size: heading;
      line-height: heading;
      font-weight: normal;
    `,
    subHeading: css`
      font-size: subHeading;
      line-height: subHeading;
      font-weight: medium;
    `,
    caption: css`
      font-size: caption;
      line-height: caption;
      font-weight: normal;
    `,
    body: css`
      font-size: body;
      line-height: body;
      font-weight: normal;
    `,
  },
});

export const Text = styled.p<StyledProps>`
  ${base}
  ${system}
  /* generated */
  ${variant}
`;
