import { useEffect, useState } from 'react';
import { getArtists } from '../../../webApi';
import {
  ArtistListWrapper,
  LineWrapper,
  LetterTitle,
  ItemContainer,
  ArtistText,
} from './StyledItems';

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

  return (
    <ArtistListWrapper>{artist && handleRenderArtistList()}</ArtistListWrapper>
  );
};

export default ArtistList;
