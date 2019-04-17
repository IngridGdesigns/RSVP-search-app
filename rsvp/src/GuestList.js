import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props => 
    <ul> 
        { props.guests.map((guest, index) =>
    // when mapping you need a unique key value
    //key property is used to help identify which items have changed, added, or removed
        <Guest key={index} 
            name={guest.name} 
            isConfirmed={guest.isConfirmed} 
            isEditing={guest.isEditing}
            handleConfirmation={() => props.toggleConfirmationAt(index)} 
            handleToggleEditing={() => props.toggleEditingAt(index)}

            /> 
        )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired
}

export default GuestList;
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