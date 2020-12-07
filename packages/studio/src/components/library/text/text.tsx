import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { variant as createVariant } from "@xstyled/system";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
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

export const Text = styled.p<Props>`
  ${base}
  ${system}
  /* generated */
  ${variant}
`;
