import styled from 'styled-components';
import FeaturedArtist from './Featured/FeaturedArtist';
import Creator from './Creator/Creator';

const Wrapper = styled.div`
  max-width: 100%;
`;

const Artist = () => {
  return (
    <Wrapper>
      <FeaturedArtist />
      <Creator />
    </Wrapper>
  );
};

export default Artist;
