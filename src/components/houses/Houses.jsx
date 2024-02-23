import { useEffect, useState } from 'react';
import styled from 'styled-components';
import House from './House';

const StyledHouses = styled.div`
  height: 100vh;
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

  /* white-space: nowrap;
  overflow-x: scroll; /* Enable horizontal scrolling */
  /* display: flex; */
`;

// const HousesDots = styled.div`
//   // Code logic for achievement dots, where user can navigate between apps
//   text-align: center;

//   // @MEDIAQUERY logic for bigger devices
//   @media (min-width: 150.15em) {
//     text-align: right;
//     padding-right: var(--padding-xxxlarge);
//   }
// `;

// const HousesDot = styled.div`
//   // Code logic for displaying single dot
//   display: inline-block;
//   height: 20px;
//   width: 20px;
//   border-radius: 50%;
//   cursor: pointer;
//   margin: 15px 7px 0px;
//   background-color: var(--color-black);

//   // @MEDIAQUERY logic for bigger devices
//   @media (min-width: 78.15em) {
//     height: 30px;
//     width: 30px;
//     margin: 20px 10px 0px;
//   }
// `;

function Houses() {
  const [houses, setHouses] = useState([]);

  // Code logic to fetch Houses data from backend when component mounts

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch(
          'https://jesicaarreola-backend-d9d5783c3027.herokuapp.com/houses'
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
          {/* <!-- Map the array of dehousessigns and display all as new House Component --> */}
          {houses.map((house) => (
            <House key={house.id} {...house} />
          ))}
        </HousesAreaSlider>
      </HousesArea>
    </StyledHouses>
  );
}

export default Houses;
