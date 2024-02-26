import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import House from './House';

const StyledHouses = styled.div`
  color: var(--color-black);
`;

const HousesArea = styled.div`
  margin: 0 auto;
  max-width: var(--width-filled-window);
  overflow: hidden; /* Ensure the container clips the carousel */
  position: relative; /* Necessary for absolute positioning of carousel */
`;

const HousesAreaSlider = styled.div`
  display: flex;
  transition: ease 1100ms;
`;

function Houses() {
  const [index, setIndex] = useState(0);
  const [houses, setHouses] = useState([]);
  const [touchStart, setTouchStart] = useState(0);

  const housesAreaRef = useRef(null);

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch(
          'https://jesicaarreola-backend-d9d5783c3027.herokuapp.com/api/houses'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }

        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchHouses();
  }, []);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const touchEnd = event.touches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 0) {
      // Swiped left
      handleNext();
    } else if (distance < 0) {
      // Swiped right
      handlePrev();
    }
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === houses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? houses.length - 1 : prevIndex - 1
    );
  };

  return (
    <StyledHouses>
      <HousesArea ref={housesAreaRef}>
        <HousesAreaSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {houses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </HousesAreaSlider>
      </HousesArea>
    </StyledHouses>
  );
}

export default Houses;
