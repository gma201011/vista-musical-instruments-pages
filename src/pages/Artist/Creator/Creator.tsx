import { useEffect, useState } from 'react';
import { StyledTitle } from '../styledFont';
import { getCreators } from '../../../webApi';
import { useViewport } from '../../../hooks/useViewport';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  CreatorWrapper,
  ArtistContainer,
  ImgContainer,
  StyledImg,
  StyledName,
  StyledSwiper,
} from './StyledItems';

const Creator = () => {
  const [creator, setCreator] = useState<any>({});
  const { width } = useViewport();

  const isMobileDevice = width < 767;

  useEffect(() => {
    getCreators().then((data) => setCreator(data));
  }, []);

  const handleRenderCreator = () => {
    return creator?.creator?.map((item: any) => {
      return (
        <ImgContainer key={item.id}>
          <StyledImg src={item.path} alt='' />
          <StyledName>{item.name}</StyledName>
        </ImgContainer>
      );
    });
  };

  const handleRenderCreatorSwiper = () => {
    return creator?.creator?.map((item: any) => {
      return (
        <SwiperSlide key={item.id}>
          <ImgContainer key={item.id}>
            <StyledImg src={item.path} alt='' />
            <StyledName>{item.name}</StyledName>
          </ImgContainer>
        </SwiperSlide>
      );
    });
  };

  return (
    <CreatorWrapper>
      <StyledTitle>#MONOCREATORS #GOPLAY</StyledTitle>
      {isMobileDevice ? (
        <StyledSwiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={120}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {handleRenderCreatorSwiper()}
        </StyledSwiper>
      ) : (
        <ArtistContainer>{handleRenderCreator()}</ArtistContainer>
      )}
    </CreatorWrapper>
  );
};

export default Creator;
