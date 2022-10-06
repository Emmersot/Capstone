import React, {useState} from 'react';
import '.././Search.css';
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';


function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <input min={0}defaultValue={1}type="number" /><PersonIcon />
      </h2>
        <Button onClick={() => navigate('./search')}>Search Listings</Button>
    </div>
  )
}

export default Search