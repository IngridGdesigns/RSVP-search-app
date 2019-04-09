import React from 'react';
import PropTypes from 'prop-types';

const GuestList = props => 
    <ul> 
        { props.guests.map((guest, index) =>
        // when mapping you need a unique key value
        <li key={index}> 
            <span>{guest.name}</span>
            <label>
            <input type="checkbox"checked={guest.isConfirmed}/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li> 
        )}
  </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired
}

export default GuestList
{/* <li className="pending"><span>Safia</span></li>
    <li className="responded"><span>Iver</span>
      <label>
        <input type="checkbox" checked/> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li>
    <li className="responded">
      <span>Corrina</span>
      <label>
        <input type="checkbox" checked/> Confirmed
      </label>
      <button>edit</button>
      <button>remove</button>
    </li> */}