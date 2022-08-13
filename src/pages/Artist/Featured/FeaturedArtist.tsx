import styled from 'styled-components';
import ArtistInfo from './ArtistInfo';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../../constants';

const CoverWrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.background.colors.primary_black};
`;

const StyledImg = styled.img`
  max-width: 100%;
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

const ArtistImage = () => {
  return (
    <CoverWrapper>
      <picture>
        <source srcSet='/feature_artist_sm.webp' media={MEDIA_QUERY_SM} />
        <source srcSet='/feature_artist_sm.webp' media={MEDIA_QUERY_MD} />
        <source srcSet='/feature_artist_md.webp' media={MEDIA_QUERY_LG} />
        <StyledImg alt='' loading='lazy' />
      </picture>
      <ArtistInfo />
    </CoverWrapper>
  );
};

export default ArtistImage;
