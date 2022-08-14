import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants';

export const StyledTitle = styled.h2`
  font-size: 60px;
  font-family: Roboto Condensed, Roboto, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  @media ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }
  @media ${MEDIA_QUERY_SM} {
    font-size: 24px;
    font-weight: 600;
    padding-top: 15px;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  font-family: Roboto Condensed, Roboto, sans-serif;
  line-height: 1.5;
  margin: 1rem 0;
`;

export const StyledButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #f37920;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.font.colors.primary_white};
  cursor: pointer;
  display: inline-flex;
  font-family: Roboto, HelveticaNeue, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 700;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: 8px 38px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &: active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;