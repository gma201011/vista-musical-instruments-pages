import styled from 'styled-components';
import FeaturedArtist from './Featured/FeaturedArtist';
import Creator from './Creator';
import ArtistList from './ArtistList';

const Wrapper = styled.div`
  max-width: 100%;
`;

const Artist = () => {
  return (
    <Wrapper>
      <FeaturedArtist />
      <Creator />
      <ArtistList />
    </Wrapper>
  );
};

export default Artist;
