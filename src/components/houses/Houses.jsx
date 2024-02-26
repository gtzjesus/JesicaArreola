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
  const delay = 1000;

  const [index, setIndex] = useState(0);
  const [houses, setHouses] = useState([]);

  const timeoutRef = useRef(null);

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

  return (
    <StyledHouses>
      <HousesArea>
        {houses.length > 0 && ( // Check if houses array is not empty
          <HousesAreaSlider
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {houses.map((house) => (
              <House
                key={house.id}
                house={house}
                style={{ width: `${100 / houses.length}%` }}
              />
            ))}
          </HousesAreaSlider>
        )}
      </HousesArea>
    </StyledHouses>
  );
}

export default Houses;