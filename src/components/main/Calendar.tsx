import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import styled from "styled-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Container = styled.div`
height: 100%;
  .MuiDateCalendar-root {
    width: 100%;
    height: 100%;
    max-height: none;
    overflow: hidden !important;
    .MuiPickersCalendarHeader-root {
      padding: 0;
      margin-top: 0;
      button {
        color: var(--main-color);
        &:hover {
          background-color: var(--back-r);
        }
      }
    }
    .MuiPickersCalendarHeader-label {
      color: var(--sub-color-b);
    }
  }
  .MuiDayCalendar-header {
    justify-content: space-between;
    span {
      color: var(--gray-3);
    }
  }
  .MuiDayCalendar-monthContainer {
    overflow: hidden;
  }
  .MuiDayCalendar-weekContainer {
    justify-content: space-between;
    button {
      color: var(--sub-color-b);
      &:hover {
        background-color: var(--back-r);
      }
    }
    .MuiPickersDay-today {
      color: var(--sub-color-wh);
      background-color: var(--main-color);
      border: none;
      &:hover {
        color: var(--sub-color-b);
      }
    }
    .Mui-selected {
      background-color: var(--main-color) !important;
      color: var(--sub-color-wh);
    }
  }
  .MuiDayCalendar-monthContainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .MuiPickersYear-root {
    button {
      color: var(--sub-color-b);
      &:hover {
        background-color: var(--back-r);
      }
    }
    .Mui-selected {
      background-color: var(--main-color);
      color: var(--sub-color-wh);
      &:hover {
        color: var(--sub-color-b);
      }
    }
  }
`;

const Calendar = () => {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Container>
  );
};

export default Calendar;
