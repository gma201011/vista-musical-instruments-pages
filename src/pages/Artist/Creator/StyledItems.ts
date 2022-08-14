import styled from 'styled-components';
import { StyledText } from '../styledFont';
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XS
} from '../../../constants';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const CreatorWrapper = styled.div`
  background: ${(props) => props.theme.background.colors.primary_black};
  color: ${(props) => props.theme.font.colors.primary_white};
  padding: 8% 0;
  text-align: center;
`;

export const ArtistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35%;
  grid-template-columns: 33% 33% 33%;
  padding: 3% 0;
  margin: 0 auto;
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  height: auto;
`;

export const StyledImg = styled.img`
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

export const StyledName = styled(StyledText)`
  font-size: 100%;
  font-weight: 700;
  @media ${MEDIA_QUERY_XL} {
    font-size: 150%;
  }
  @media ${MEDIA_QUERY_SM} {
    font-size: 150%;
    position: relative;
    left: -15%;
  }
  @media ${MEDIA_QUERY_XS} {
    font-size: 100%;
    position: relative;
    left: -5%;
  }
`;

export const StyledSwiper = styled(Swiper)`
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
  @media ${MEDIA_QUERY_MD} {
    padding: 30% 0;
  }
`;