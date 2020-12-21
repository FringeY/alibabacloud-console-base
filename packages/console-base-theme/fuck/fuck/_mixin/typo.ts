import {
  css
} from 'styled-components';

/** ------
 * 排版相关
 * ------ */
export interface IPropsEllipsisLines {
  lines: number;
  lineHeight: number;
}

// 基础字体
export const baseFont = css`
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

// 你需要为之设定一个宽度
export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ellipsisLines = css<IPropsEllipsisLines>`
  display: -webkit-box;
  min-height: ${props => props.lineHeight * props.lines}px;
  line-height: ${props => props.lineHeight}px;
  overflow: hidden;
  -webkit-line-clamp: ${props => props.lines};
  -webkit-box-orient: vertical;
`;

export const lineWrap = css`
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
`;

export const clearfix = css`
  *zoom: 1;
  
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  
  &:after {
    clear: both;
  }
`;