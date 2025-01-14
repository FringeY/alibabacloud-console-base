export { default } from './error-prompt';

export { default as convertToErrorDetailedInfo } from './util/convert-to-error-detailed-info';
export { default as createErrorToIgnore } from './helper/create-error-to-ignore';

export type {
  TErrorPromptArg as ErrorPromptArg,
  TErrorPromptArgExtra as ErrorPromptArgExtra,
  IError as ErrorWithDetails,
  IErrorPlain as ErrorDetailedInfo,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn
} from './types';
