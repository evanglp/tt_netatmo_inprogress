import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faCloudShowersHeavy,
  faWind
} from "@fortawesome/free-solid-svg-icons";

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-items: stretch;
  grid-area: nav;
  background-color: #ffffff;
  border-radius: 25px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1em;

  > div {
    margin-right: 0.5em;
  }

    > div:last-child {
      margin: 0;
    }
  }
`;

function WeatherNav() {
  return (
    <GridItem>
      <StyledLink to="/temperature">
        <Content>
          <div>
            <FontAwesomeIcon icon={faTemperatureHigh} />
          </div>
          <h3>Temperature</h3>
        </Content>
      </StyledLink>

      <StyledLink to="/rain">
        <Content>
          <div>
            <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </div>
          <h3>Rain</h3>
        </Content>
      </StyledLink>

      <StyledLink to="/wind">
        <Content>
          <div>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <h3>Wind</h3>
        </Content>
      </StyledLink>
    </GridItem>
  );
}

export default WeatherNav;
