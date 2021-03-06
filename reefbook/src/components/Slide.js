/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 80%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide