import React from 'react';
import styled from 'styled-components';

import {
  H1,
  List
} from '@alicloud/demo-rc-elements';

import {
  mixinTextDisabled,
  mixinTextBrand,
  mixinTextBrandHover,
  mixinTextBrandActive,
  mixinTextAccent,
  mixinTextAccentHover,
  mixinTextAccentActive,
  mixinTextTitle,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextTertiary,
  mixinTextInverse,
  mixinTextHelp,
  mixinTextInfo,
  mixinTextSuccess,
  mixinTextWarning,
  mixinTextError,
  mixinTextDanger,
  mixinTextEmphasis,
  mixinTextCode
} from '../../../src';

const ScMixinTextDisabled = styled.span`
  ${mixinTextDisabled}
`;
const ScMixinTextBrand = styled.span`
  ${mixinTextBrand}
`;
const ScMixinTextBrandHover = styled.span`
  ${mixinTextBrandHover}
`;
const ScMixinTextBrandActive = styled.span`
  ${mixinTextBrandActive}
`;
const ScMixinTextAccent = styled.span`
  ${mixinTextAccent}
`;
const ScMixinTextAccentHover = styled.span`
  ${mixinTextAccentHover}
`;
const ScMixinTextAccentActive = styled.span`
  ${mixinTextAccentActive}
`;
const ScMixinTextTitle = styled.span`
  ${mixinTextTitle}
`;
const ScMixinTextPrimary = styled.span`
  ${mixinTextPrimary}
`;
const ScMixinTextSecondary = styled.span`
  ${mixinTextSecondary}
`;
const ScMixinTextTertiary = styled.span`
  ${mixinTextTertiary}
`;
const ScMixinTextInverse = styled.span`
  ${mixinTextInverse}
`;
const ScMixinTextHelp = styled.span`
  ${mixinTextHelp}
`;
const ScMixinTextInfo = styled.span`
  ${mixinTextInfo}
`;
const ScMixinTextSuccess = styled.span`
  ${mixinTextSuccess}
`;
const ScMixinTextWarning = styled.span`
  ${mixinTextWarning}
`;
const ScMixinTextError = styled.span`
  ${mixinTextError}
`;
const ScMixinTextDanger = styled.span`
  ${mixinTextDanger}
`;
const ScMixinTextEmphasis = styled.span`
  ${mixinTextEmphasis}
`;
const ScMixinTextCode = styled.span`
  ${mixinTextCode}
`;

export default function MixinText(): JSX.Element {
  return <>
    <H1>mixins for text</H1>
    <List>
      <ScMixinTextDisabled>disabled</ScMixinTextDisabled>
      <ScMixinTextBrand>brand</ScMixinTextBrand>
      <ScMixinTextBrandHover>brand-hover</ScMixinTextBrandHover>
      <ScMixinTextBrandActive>brand-active</ScMixinTextBrandActive>
      <ScMixinTextAccent>accent</ScMixinTextAccent>
      <ScMixinTextAccentHover>accent-hover</ScMixinTextAccentHover>
      <ScMixinTextAccentActive>accent-active</ScMixinTextAccentActive>
      <ScMixinTextTitle>title</ScMixinTextTitle>
      <ScMixinTextPrimary>primary</ScMixinTextPrimary>
      <ScMixinTextSecondary>secondary</ScMixinTextSecondary>
      <ScMixinTextTertiary>tertiary</ScMixinTextTertiary>
      <ScMixinTextInverse>inverse</ScMixinTextInverse>
      <ScMixinTextHelp>help</ScMixinTextHelp>
      <ScMixinTextInfo>info</ScMixinTextInfo>
      <ScMixinTextSuccess>success</ScMixinTextSuccess>
      <ScMixinTextWarning>warning</ScMixinTextWarning>
      <ScMixinTextError>error</ScMixinTextError>
      <ScMixinTextDanger>danger</ScMixinTextDanger>
      <ScMixinTextEmphasis>emphasis</ScMixinTextEmphasis>
      <ScMixinTextCode>code</ScMixinTextCode>
    </List>
  </>;
}