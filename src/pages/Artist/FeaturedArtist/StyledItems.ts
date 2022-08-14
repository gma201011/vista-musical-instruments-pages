import styled from 'styled-components';
import { StyledTitle, StyledText, StyledButton } from '../styledFont';
import {
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../../constants';

export const CoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${(props) => props.theme.background.colors.primary_black};
  @media ${MEDIA_QUERY_XL} {
    padding-top: 48%;
    height: 0;
    overflow: hidden;
  }
`;

export const StyledImg = styled.img`
  max-width: 100%;
  @media ${MEDIA_QUERY_XL} {
    position: absolute;
    top: 0;
    width: 100%;
  }
  @media ${MEDIA_QUERY_LG} {
    width: 100%;
  }
  @media ${MEDIA_QUERY_MD} {
    width: 50%;
    height: auto;
  }
  @media ${MEDIA_QUERY_SM} {
    width: 100%;
    height: auto;
  }
`;

export const ArtistListWrapper = styled.div`
  width: 90%;
  margin: 3% auto;
`;

export const LineWrapper = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid rgba(130, 130, 130, 0.3);
  &:last-child {
    border-bottom: none;
  }
`;

export const LetterTitle = styled(StyledTitle)`
  color: ${(props) => props.theme.font.colors.primary_orange};
  font-size: 1rem;
  padding: 10px 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ArtistText = styled(StyledText)`
  display: block;
  width: 20%;
  @media ${MEDIA_QUERY_MD} {
    width: 25%;
  }
  @media ${MEDIA_QUERY_SM} {
    width: 50%;
  }
`;

export const TextWrapper = styled.div`
  top: 25%;
  left: 55%;
  width: 25%;
  position: absolute;
  color: ${(props) => props.theme.font.colors.primary_white};
  @media ${MEDIA_QUERY_MD} {
    top: 33%;
    width: 40%;
  }
  @media ${MEDIA_QUERY_SM} {
    position: static;
    text-align: center;
    background: ${(props) => props.theme.background.colors.primary_black};
    width: 100%;
  }
`;

export const ResponsiveContent = styled(StyledText)`
  @media ${MEDIA_QUERY_MD} {
    font-size: 12px;
  }
  @media ${MEDIA_QUERY_SM} {
    font-size: 13spx;
  }
`;

export const ResponsiveButton = styled(StyledButton)`
  @media ${MEDIA_QUERY_SM} {
    margin-bottom: 15px;
  }
`;