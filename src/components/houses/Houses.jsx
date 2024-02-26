import { useEffect, useState } from 'react';
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

function Houses() {
  const [houses, setHouses] = useState([]);

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
        <HousesAreaSlider>
          {houses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </HousesAreaSlider>
      </HousesArea>
    </StyledHouses>
  );
}

export default Houses;
