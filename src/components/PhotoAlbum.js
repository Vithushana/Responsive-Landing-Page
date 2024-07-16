import React from 'react';
import styled from 'styled-components';
import Photo1 from '../exp_img/Image Collection.png';
import sign1 from '../exp_img/fluent_arrow-growth-24-filled.png';

const PhotoAlbum = () => {
  return (
    <PhotoAlbumContainer>
      <Photo className="photo1">
        <img src={Photo1} alt="Photo 1" />
        <Info1>
          <Sign src={sign1} alt="Sign" />
          <TextWrapper>
            <SmallText>Orders received</SmallText>
            <LargeText>124/day</LargeText>
          </TextWrapper>
        </Info1>
        <Info3>
          <Sign src={sign1} alt="Sign" />
          <TextWrapper>
            <SmallText>Deliveries completed</SmallText>
            <LargeText>85/day</LargeText>
          </TextWrapper>
        </Info3>
        <Info>
          <Sign src={sign1} alt="Sign" />
          <TextWrapper>
            <SmallText>Total customers</SmallText>
            <LargeText>10,456</LargeText>
          </TextWrapper>
        </Info>
      </Photo>
    </PhotoAlbumContainer>
  );
};

export default PhotoAlbum;

const PhotoAlbumContainer = styled.div`
  position: relative;
  margin-right: 50px;
  margin-top: 50px;
  height: 800px;
`;

const Photo = styled.div`
  position: relative;
  border-radius: 8px;

  img {
    display: block;
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 550px;
  left: 200px;
  background: white;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Info1 = styled(Info)`
  top: -20px;
  left: 300px;
  background: white;
  border-radius: 8px;
`;

const Info3 = styled(Info)`
  top: 175px;
  right: -50px;
  left: 530px;
  border-radius: 8px;
  background: white;
`;

const Sign = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const SmallText = styled.span`
  font-size: 12px;
`;

const LargeText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
