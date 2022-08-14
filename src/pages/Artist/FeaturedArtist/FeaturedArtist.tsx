import ArtistInfo from './ArtistInfo';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../../constants';
import { CoverWrapper, StyledImg } from './StyledItems';

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
