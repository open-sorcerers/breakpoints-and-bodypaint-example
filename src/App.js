/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { renderBreakpoints, renderVerticalBreakpoints } from '@open-sorcerers/breakpoints'
import { asRem, makePainter, HORIZONTAL_BREAKPOINTS, VERTICAL_BREAKPOINTS } from 'bodypaint'

import logo from './logo.svg';

export const POINTS = asRem(16, HORIZONTAL_BREAKPOINTS)
export const VPOINTS = asRem(16, VERTICAL_BREAKPOINTS)

console.log("POINTS", POINTS, "VERTICAL POINTS", VPOINTS)

export const Breakpoints = renderBreakpoints(POINTS)
export const VBreakpoints = renderVerticalBreakpoints(VPOINTS)

const mq = makePainter({
  useMin: true,
  useHeight: false,
  baseFontSize: 16,
  implicit: true,
  points: {
    ONE: 320,
    TWO: 480,
    THREE: 640,
    FOUR: 800
  }
})

const responsiveBoxStyle = mq({
  background: {
    ONE: 'red',
    TWO: 'orange',
    THREE: 'yellow',
    FOUR: 'green'
  }
})

const boxStyle = css`
  width: 5rem;
  height: 5rem;
  border: 10px solid black;
  display: flex;
  margin: auto;
  ${responsiveBoxStyle}
`
console.log("BOXSTYLE", boxStyle)

const App = () => (
  <>
    <Breakpoints />
    <VBreakpoints />
    <div css={boxStyle} />
  </>
)

export default App;
