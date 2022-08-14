import { StyledTitle } from '../styledFont';
import {
  TextWrapper,
  ResponsiveContent,
  ResponsiveButton,
} from './StyledItems';

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
