import styled from 'styled-components';
import { StyledTitle, StyledText, StyledButton } from '../styledItem';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../../constants';

const TextWrapper = styled.div`
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

const ResponsiveContent = styled(StyledText)`
  @media ${MEDIA_QUERY_MD} {
    font-size: 12px;
  }
  @media ${MEDIA_QUERY_SM} {
    font-size: 13spx;
  }
`;

const ResponsiveButton = styled(StyledButton)`
  @media ${MEDIA_QUERY_SM} {
    margin-bottom: 15px;
  }
`;

const ArtistInfo = () => {
  return (
    <>
      <TextWrapper>
        <StyledTitle>Featured Artists</StyledTitle>
        <ResponsiveContent>
          Zane Carney talks LA jazz and new album 'Alter Ego'.
        </ResponsiveContent>
        <ResponsiveButton>READ MORE</ResponsiveButton>
      </TextWrapper>
    </>
  );
};

export default ArtistInfo;
