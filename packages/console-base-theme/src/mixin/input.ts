import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

export const mixinInputReset = css`
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  
  &::placeholder {
    color: ${COLOR.INPUT_PLACEHOLDER};
    color: var(--cb-color-input-placeholder, ${COLOR.INPUT_PLACEHOLDER});
  }
  
  &::-ms-clear {
    display: none;
  }
`;
export const mixinInputTextDisabled = css`
  color: ${COLOR.INPUT_TEXT_DISABLED};
  color: var(--cb-color-input-text-disabled, ${COLOR.INPUT_TEXT_DISABLED});
`;
export const mixinInputBgDisabled = css`
  background-color: ${COLOR.INPUT_BG_DISABLED};
  background-color: var(--cb-color-input-bg-disabled, ${COLOR.INPUT_BG_DISABLED});
`;
export const mixinInputBorderDisabled = css`
  border-color: ${COLOR.INPUT_BORDER_DISABLED};
  border-color: var(--cb-color-input-border-disabled, ${COLOR.INPUT_BORDER_DISABLED});
`;
export const mixinInputText = css`
  color: ${COLOR.INPUT_TEXT};
  color: var(--cb-color-input-text, ${COLOR.INPUT_TEXT});
`;
export const mixinInputBg = css`
  background-color: ${COLOR.INPUT_BG};
  background-color: var(--cb-color-input-bg, ${COLOR.INPUT_BG});
`;
export const mixinInputBorder = css`
  border-color: ${COLOR.INPUT_BORDER};
  border-color: var(--cb-color-input-border, ${COLOR.INPUT_BORDER});
`;
export const mixinInputTextHover = css`
  color: ${COLOR.INPUT_TEXT_HOVER};
  color: var(--cb-color-input-text-hover, ${COLOR.INPUT_TEXT_HOVER});
`;
export const mixinInputBgHover = css`
  background-color: ${COLOR.INPUT_BG_HOVER};
  background-color: var(--cb-color-input-bg-hover, ${COLOR.INPUT_BG_HOVER});
`;
export const mixinInputBorderHover = css`
  border-color: ${COLOR.INPUT_BORDER_HOVER};
  border-color: var(--cb-color-input-border-hover, ${COLOR.INPUT_BORDER_HOVER});
`;
export const mixinInputTextFocus = css`
  color: ${COLOR.INPUT_TEXT_FOCUS};
  color: var(--cb-color-input-text-focus, ${COLOR.INPUT_TEXT_FOCUS});
`;
export const mixinInputBgFocus = css`
  background-color: ${COLOR.INPUT_BG_FOCUS};
  background-color: var(--cb-color-input-bg-focus, ${COLOR.INPUT_BG_FOCUS});
`;
export const mixinInputBorderFocus = css`
  border-color: ${COLOR.INPUT_BORDER_FOCUS};
  border-color: var(--cb-color-input-border-focus, ${COLOR.INPUT_BORDER_FOCUS});
`;
export const mixinInputBorderFocusBrand = css`
  border-color: ${COLOR.INPUT_BORDER_FOCUS_BRAND};
  border-color: var(--cb-color-input-border-focus-brand, ${COLOR.INPUT_BORDER_FOCUS_BRAND});
`;