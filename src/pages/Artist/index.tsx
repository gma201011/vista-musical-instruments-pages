import styled from 'styled-components';

const Test = styled.div`
  color: ${(props) => props.theme.font.colors.primary_orange};
`;

const Artist = () => {
  return (
    <>
      <Test>Artist</Test>
    </>
  );
};

export default Artist;
