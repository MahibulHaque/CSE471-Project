import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BsArrowRight } from "react-icons/bs";
import {
  Container,
  DataWrapper,
  EventCard,
  GridContainer,
  TextContainer,
} from "./EventScreenElement";
import { Pagination } from "@mui/material";

function getFormattedDate(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}

const EventScreen = () => {
  const handlePaginationChange = (e, value) => {
    setPage(value);
  };
  const [page, setPage] = useState(1);

  const { data } = useQuery(
    ["events", page],
    async () =>
      await axios.get(
        `https://www.robotevents.com/api/v2/events?start=2022-04-26T00%3A00%3A00-04%3A00&page=${page}&myEvents=false`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjg3MTc2MGVkOTM0NzE3MjAwOTMwYmE0NmU0NTczNjJmYmYyMDJlZTdmMDE5MzczMDkzYmE2YTNlYmRjZmQ5ZTIyOGNlMDRmMDFlYTMyZTIiLCJpYXQiOjE2NTA4OTE4NDIuNjMxOTkzMSwibmJmIjoxNjUwODkxODQyLjYzMTk5NTksImV4cCI6MjU5NzY2NjY0Mi42MjU5MDk4LCJzdWIiOiIxMDE3NzkiLCJzY29wZXMiOltdfQ.J4Bel7TRSH8d4e3R7l_hOVPWSm3J23KTTfYUiIZkfJbgkO1d01d2p0QIkd4rjtbfuhi9z4424rp1o4g8KOi8ZwYyMm25ajKhqJvOvz96vxEkfLmPkbfjEgO3eTUtr7yJ91KjgkgbhN06aqramfoLHOeHNSWWmDjyXO_uQVdMl_yntVpP6YsSPA9gir3W10EpN6HrL8ItF9BpKiPUzBD2WziQWA63ARH-7CWMRhXhyfCkOsgnLNfwGd1yneF6YqUyx58sudEmmbfaJHscEA_mOs9xwDZLbbG8GT03XzE4_HKsoye7SGG1ZcBMN0HgIDdG3W1cohg-HI6C60AXC8kOODTD1SfjISyANnzTbU7DJD1-W61Pzc19OHIAAoDUja2hGM-U-Fqu4B8CQwf-GrpMtwOfuSdUODu7F9BlorSAQD5oYhaHZdh0vMF-MSeFdYjm44dhi96P6TllW6aE2kYyQWsXymr2DCLyNtxMIl7VNEt58P4YIz_P21XYeu_rprVt6TGNJLODsJnRL9TSCNvAkm_LRT_8otPUVLrdv91LNQoQm45flDiMqLOukvpusKvrRhZTNRlRMYIHTaHdeX7rWM7RfF6smH54EdZY8_9EugtcL7MSw5yTQ45c7tzQvtqYK26bH3ToJlCMf0e098xQLRugMaZnthIStkeIcRSpdaw",
          },
        }
      ),
    { keepPreviousData: true }
  );
  return (
    <Container>
      <TextContainer>
        <h1>Find Ongoing Events</h1>
        <p>
          Participate in real life robotics events across the globe and take
          your skill to the next level.
        </p>
      </TextContainer>
      {data && (
        <DataWrapper>
          <GridContainer>
            {data.data.data.map((event, index) => (
              <EventCard key={index}>
                <h1>{event.name}</h1>
                <p>
                  Start Date:{" "}
                  <span>{getFormattedDate(new Date(event.start))}</span>
                </p>
                <p>
                  End Date:{" "}
                  <span className="end__date__container">
                    {getFormattedDate(new Date(event.end))}
                  </span>
                </p>
                <div>
                  <span>
                    <div></div>
                    {event.location.country}
                  </span>
                  <a href="">
                    See more
                    <BsArrowRight />
                  </a>
                </div>
              </EventCard>
            ))}
          </GridContainer>
          <Pagination
            count={data.data.meta.last_page}
            variant="outlined"
            color="primary"
            className="pagination"
            page={page}
            onChange={handlePaginationChange}
          />
        </DataWrapper>
      )}
    </Container>
  );
};

export default EventScreen;
