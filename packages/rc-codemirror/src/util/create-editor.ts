import CodeMirror, {
  Editor
} from 'codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';

import '../addon/lint/json'; // 官方的 JSON Lint 有问题 https://github.com/scniro/react-codemirror2/issues/21

import {
  IPropsCodeMirror
} from '../types';

export default function createEditor(div: HTMLDivElement, value: string, conf: IPropsCodeMirror['conf'] = {}): Editor {
  return CodeMirror(div, {
    value,
    theme: conf.theme ?? (conf.readOnly ? 'mdn-like' : 'oceanic-next'),
    mode: 'text/plain', // 支持的 mode 可以查看 mode 模块的末尾
    indentUnit: 2,
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: !conf.readOnly,
    gutters: conf.readOnly ? [] : ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lint: !conf.readOnly,
    foldGutter: true,
    autoCloseBrackets: '()[]{}\'\'""',
    autoCloseTags: true,
    matchBrackets: true,
    extraKeys: {
      Tab: false
    },
    ...conf
  });
}