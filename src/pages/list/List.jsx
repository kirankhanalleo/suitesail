import React, { useState } from 'react';
import "./List.css";
import Navbar from '../../components/navbar/Navbar';
import DatePicker from "react-datepicker";
import { useLocation } from 'react-router-dom';
import SearchItem from '../../components/searchItem/SearchItem';
function List() {
  const location = useLocation();
  const[destination,setDestination]=useState(location.state.destination);
  const[startDate,setStartDate]=useState(location.state.startDate);
  const[endDate,setEndDate]=useState(location.state.endDate);
  const[options,setOptions]=useState(location.state.options);
  console.log(location);
  return (
    <div>
      <Navbar type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearch__Title">Search</h1>
            <div className="listSearch__Item">
              <label>Destination</label>
              <input type="text" placeholder={destination} id="" />
            </div>
            <div className="listSearch__Item">
              <label>Check-in Date</label>
              <span>
              <DatePicker selected={startDate}  minDate={new Date()} onChange={(date) => setStartDate(date)} className="head date-picker" />
              </span>
            </div>
            <div className="listSearch__Item">
              <label>Check-out Date</label>
              <span>
              <DatePicker selected={endDate}  minDate={new Date()} onChange={(date) => setEndDate(date)} className="head date-picker" />
              </span>
            </div>
            <div className="listSearch__Item">
              <label>Options</label>
              <div className="listSearch__options">
                <div className="listSearch__OptionsItem">
                  <span className="optionItem__Text">Min Price <small>per night</small></span>
                  <input type="number" name="" />
                </div>
                <div className="listSearch__OptionsItem">
                  <span className="optionItem__Text">Max Price <small>per night</small></span>
                  <input type="number" name="" />
                </div>
                <div className="listSearch__OptionsItem">
                  <span className="optionItem__Text">Adults</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="listSearch__OptionsItem">
                  <span className="optionItem__Text">Children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="listSearch__OptionsItem">
                  <span className="optionItem__Text">Rooms</span>
                  <input type="number" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="searchResults">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List