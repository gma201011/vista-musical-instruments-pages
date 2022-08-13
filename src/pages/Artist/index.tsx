import styled from 'styled-components';
import FeaturedArtist from './Featured/FeaturedArtist';

const Wrapper = styled.div`
  max-width: 100%;
`;

const Artist = () => {
  return (
    <Wrapper>
      <FeaturedArtist />
    </Wrapper>
  );
};

export default Artist;
