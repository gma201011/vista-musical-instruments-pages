import styled from 'styled-components';
import { StyledTitle, StyledText } from '../styledFont';
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../../constants';

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