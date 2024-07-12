import React from 'react';
import styled from 'styled-components';
import Photo1 from '../images/photo1.png';
import photo2 from '../images/photo3.png';
import photo3 from '../images/photo2.png';
import photo4 from '../images/photo4.png';

const PhotoAlbum = () => {
  return (
    <PhotoAlbumContainer>
      <Photo className="photo1">
        <img src={Photo1} alt="Photo 1" />
        <Info1>Orders received<br />124/day</Info1>
      </Photo>
      <Photo className="photo2">
        <img src={photo2} alt="Photo 2" />
        <Info3>Deliveries completed<br />85/day</Info3>
      </Photo>
      <Photo className="photo3">
        <img src={photo3} alt="Photo 3" />
        <Info>Total customers<br />10,456</Info>
      </Photo>
      <Photo className="photo4">
        <img src={photo4} alt="Photo 4" />
      </Photo>
    </PhotoAlbumContainer>
  );
};

export default PhotoAlbum;

const PhotoAlbumContainer = styled.div`
  position: relative;
  width: 700px; /* Adjust the size according to your needs */
  height: 600px; /* Adjust the size according to your needs */
  margin-left: 50px; /* Ensure the whole set is on the left side with some margin */
`;

const Photo = styled.div`
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &.Photo1 {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 200px;
    height: 300px; /* Portrait */
    z-index: 1;
  }

  &.photo2 {
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    width: 300px;
    height: 200px; /* Landscape */
    z-index: 2;
  }

  &.photo3 {
    top: 50%;
    right: 10%;
    transform: translate(0, -50%);
    width: 300px;
    height: 200px; /* Landscape */
    z-index: 4; /* Highest z-index */
  }

  &.photo4 {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 200px;
    height: 200px; /* Square */
    z-index: 3;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 8px;
  left: 10px;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

const Info1 = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
  background: red;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

const Info3 = styled.div`
  position: absolute;
  top: 160px;
  left: 10px;
  background: green;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
`;

