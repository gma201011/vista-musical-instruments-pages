import { useEffect, useState } from 'react';
import { getArtists } from '../../webApi';
import { StyledTitle, StyledText } from './styledItem';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  margin: 3% auto;
`;

const LineWrapper = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid rgba(130, 130, 130, 0.3);
`;

const LetterTitle = styled(StyledTitle)`
  color: ${(props) => props.theme.font.colors.primary_orange};
  font-size: 1rem;
  padding: 10px 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtistText = styled(StyledText)`
  display: block;
  width: 20%;
  @media ${MEDIA_QUERY_MD} {
    width: 25%;
  }
  @media ${MEDIA_QUERY_SM} {
    width: 50%;
  }
`;

const ArtistList = () => {
  const [artist, setArtist] = useState<any>({});

  useEffect(() => {
    getArtists().then((data) => setArtist(data));
  }, []);

  const handleArtistListOrder = () => {
    let letterArr: any = [];
    const artistItem: any = [];
    artist?.map((item: any) => {
      const letterRegex = item.name.replace(/[^a-zA-Z]/g, '');
      const letter = letterRegex.length > 0 ? letterRegex.substring(0, 1) : '';
      if (letterArr.indexOf(letter) <= -1) {
        letterArr.push(letter);
      }
    });
    letterArr = letterArr.sort();
    letterArr.map((item: any) => {
      let tempArtistObjArr: any = [];
      let tempObj: any = {};
      let letterTemp = item;
      tempObj.letter = letterTemp;

      artist.forEach((item: any) => {
        const letter = item.name.replace(/[^a-zA-Z]/g, '').substring(0, 1);

        if (letterTemp === letter) {
          tempArtistObjArr.push(item);
        }
      });
      tempObj.artistList = tempArtistObjArr;
      artistItem.push(tempObj);
    });
    return artistItem;
  };

  const handleRenderArtistList = () => {
    if (!artist.length) return;
    const artistList = handleArtistListOrder();
    return artistList.map((item: any) => {
      return (
        <LineWrapper key={item.letter}>
          <div>
            <LetterTitle>{item.letter}</LetterTitle>
            <ItemContainer>
              {item.artistList.map((artist: any) => {
                return <ArtistText key={artist.id}>{artist.name}</ArtistText>;
              })}
            </ItemContainer>
          </div>
        </LineWrapper>
      );
    });
  };

  return <Wrapper>{artist && handleRenderArtistList()}</Wrapper>;
};

export default ArtistList;
