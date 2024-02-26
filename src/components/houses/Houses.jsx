import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import House from './House';

const StyledHouses = styled.div`
  color: var(--color-black);
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

const HousesDots = styled.div`
  // Code logic for achievement dots, where user can navigate between apps
  text-align: center;

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 150.15em) {
    text-align: right;
    padding-right: var(--padding-xxxlarge);
  }
`;

const HousesDot = styled.div`
  // Code logic for displaying single dot
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: var(--color-black);

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 78.15em) {
    height: 30px;
    width: 30px;
    margin: 20px 10px 0px;
  }
`;

function Houses() {
  // Code logic for delay carousel
  const delay = 1000;

  const [houses, setHouses] = useState([]);
  const [index, setIndex] = useState(0);

  // Code logic useRef react hook to clear time on user's interaction
  const timeoutRef = useRef(null);
  // Handle reseting the time
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === houses.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval);
  }, [houses.length]);

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

  return (
    <StyledHouses>
      <HousesArea>
        <HousesAreaSlider index={index}>
          {houses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </HousesAreaSlider>
      </HousesArea>
      {/* <!-- Dots for User Navigation Container --> */}
      <HousesDots>
        {houses.map((_, idx) => (
          <HousesDot
            key={idx}
            className={`HousesDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
              resetTimeout(); // Reset timeout when manually navigating
            }}
          ></HousesDot>
        ))}
      </HousesDots>
    </StyledHouses>
  );
}

export default Houses;
