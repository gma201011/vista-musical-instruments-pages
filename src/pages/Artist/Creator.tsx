import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledTitle, StyledText } from './styledItem';
import { getCreators } from '../../webApi';
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_XL,
} from '../../constants';
import { useViewport } from '../../hooks/useViewport';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Wrapper = styled.div`
  background: ${(props) => props.theme.background.colors.primary_black};
  color: ${(props) => props.theme.font.colors.primary_white};
  padding: 8% 0;
  text-align: center;
`;

const ArtistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35%;
  grid-template-columns: 33% 33% 33%;
  padding: 3% 0;
  margin: 0 auto;
`;

const ImgContainer = styled.div`
  max-width: 100%;
  height: auto;
`;

const StyledImg = styled.img`
  width: 80%;
  object-fit: cover;
  @media ${MEDIA_QUERY_MD} {
    width: 70%;
  }
  @media ${MEDIA_QUERY_SM} {
    width: 60vw;
    position: relative;
    left: -40%;
  }
`;

const StyledName = styled(StyledText)`
  font-size: 100%;
  font-weight: 700;
  @media ${MEDIA_QUERY_XL} {
    font-size: 150%;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 15% 0;
  position: relative;
  height: 100%;
  .swiper-pagination {
    display: relative;
    top: 95%;
  }
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.8;
    height: 0.7rem;
    width: 0.7rem;
  }
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.font.colors.primary_orange};
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 10px;
  }
`;

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Creator;
