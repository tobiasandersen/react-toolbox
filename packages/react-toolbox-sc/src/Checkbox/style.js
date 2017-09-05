import { css } from 'styled-components';

const checkboxSize = '18px';

export const field = css`
  display: block;
  height: ${checkboxSize};
  margin-bottom: 15px;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
`;

export const input = css`
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0;
  
  &[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
  }
`

const baseCheck = css`
  background-color: transparent;
  border: 2px solid rgb(117, 117, 117);;
  border-radius: 2px;
  cursor: pointer;
  height: ${checkboxSize};
  position: relative;
  display: inline-block;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .2s;
  transition-property: background-color;
  vertical-align: top;
  width: ${checkboxSize};

  &:after {
    position: absolute;
    top: -1px;
    left: 4px;
    width: 7px;
    height: 12px;
    content: "";
    border-color: #fff;
    border-style: solid;
    border-top: 0;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left: 0;
    transform: rotate(45deg);
  }
`

const checked = props => {
  const background = '#3F51B5';

  return css`
    background-color: ${background};
    border-color: ${background};
  `
}

export const check = css`
  ${baseCheck}
  ${props => props.checked && checked}
`