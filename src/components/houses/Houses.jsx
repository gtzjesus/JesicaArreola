import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import House from './House';

const StyledHouses = styled.div`
  color: var(--color-black);
  overflow-x: hidden;
`;

const HousesArea = styled.div`
  // Code logic to cover the full screen of the device user is in
  margin: 0 auto;
  max-width: var(--width-filled-window);
`;

const HousesAreaSlider = styled.div`
  // Code logic for slider (multiple videos)
  white-space: nowrap;
  transition: ease 1100ms;
`;

function Houses() {
  // Code logic for delay carousel
  const delay = 7500;

  const [index, setIndex] = useState(0);
  const [houses, setHouses] = useState([]);
  const [touchStart, setTouchStart] = useState(0);

  const timeoutRef = useRef(null);

  const housesAreaRef = useRef(null);

  // Handle reseting the time
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // Code logic to fetch Houses data from backend when component mounts
  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch(
          'https://jesicaarreola-backend-d9d5783c3027.herokuapp.com/api/houses'
        );
        if (!response.ok) {
          throw new Error('Failed fo fetch houses');
        }

        const data = await response.json();
        setHouses(data); // Update the state with fetched houses
      } catch (error) {
        console.log(error);
      }
    }
    fetchHouses();
  }, []);

  // Code logic useEffect react hook for setting the timeout functionality
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === houses.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, houses]);

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
