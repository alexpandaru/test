import styled, { css } from 'styled-components';
import { Flex, Text } from '@lib/ui';

export const StudycaseWrapper = styled(Flex)`
  padding: 11.5% 0 3%;
`;

export const Project = styled(Flex)`
  margin-bottom: 8%;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const Marquee = styled(Flex)`
  width: 100vw;
  left: -5.9vw;
  margin: 0 auto;
  white-space: nowrap;
  display: block;
  transform: rotate(-1.5deg);

  ${(props) => {
    if (props.align === 'left') {
      return css`
        transform: rotate(-1.5deg);
      `;
    }
    if (props.align === 'right') {
      return css`
        transform: rotate(1.5deg);
      `;
    }
  }}
`;

export const MarqueeText = styled(Text)`
  display: inline-block;
  overflow-x: hidden;
  text-indent: 0;
  font-weight: 600;
  font-size: calc(6.4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(10.5rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  border-top: 1px solid ${(props) => props.theme.palette.text.main};
  border-bottom: 1px solid ${(props) => props.theme.palette.text.main};
  will-change: transform;
  margin-top: 7%;
  margin-bottom: 11%;

  -webkit-text-fill-color: ${(props) => props.theme.palette.background};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.palette.text.main};

  ${(props) => props.theme.breakpoints.sm} {
    margin-top: 4%;
    margin-bottom: 8%;
    border-width: 2px;
    line-height: calc(12rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    -webkit-text-stroke-width: 2px;
  }

  :hover {
    color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    -webkit-text-fill-color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    -webkit-text-stroke-color: transparent;
    font-style: italic;
    text-decoration: line-through;
  }
`;

export const Content = styled(Flex)`
  flex-direction: column;

  ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }
`;

export const Title = styled(Text)`
  font-size: calc(3.2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(3.7rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;
  margin-bottom: 1%;

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(3.2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(3.7rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    margin-bottom: 4%;
  }
`;

export const SubTitle = styled(Text)`
  font-size: calc(2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 600;
  line-height: calc(2.4rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;
  margin: 4% 0 3%;

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(1.8rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.1rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(1.05rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    margin: 4% 0 3%;
  }
`;

export const Description = styled(Text)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: calc(1.4rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 300;
  line-height: calc(1.9rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(1.1rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.6rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(0.4rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.3rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }
`;