import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
//shared state should be stored in both components nearest shared ancestor
class App extends Component {

    state = {
      isFiltered: false,
      pendingGuest: "",
        guests: [
          {
            name: 'Jaime',
            isConfirmed: false,
            isEditing: false
          },
          {
            name: 'Ed',
            isConfirmed: false,
            isEditing: false
          },
          {
            name: 'Lina',
            isConfirmed: false,
            isEditing: true
          }
        ]
    }
  //HANDLER to confirm guests - it will toggle the confirmation at the specified index
  //map method to change one guest in the array
  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
            guests: this.state.guests.map((guest, index) => {
              if (index === indexToChange) {
                return {
                  ...guest,
                  [property]: !guest[property]
                }
              }
              return guest;
            })
        })
      };
    
      setNameAt = (name, indexToChange) => {
        this.setState({
                guests: this.state.guests.map((guest, index) => {
                  if (index === indexToChange) {
                    return {
                      ...guest,
                     name
                     //becuz name is the name of the property you can use the
                    }
                  }
                  return guest;
                })
            })
          };


    toggleConfirmationAt = index =>
      this.toggleGuestPropertyAt('isConfirmed', index);

    removeGuestAt = (index) => {
      this.setState({
        guests: [
        ...this.state.guests.slice(0, index),
         ...this.state.guests.slice(index + 1)
        ]
        })
    }

    toggleEditingAt = index =>
      this.toggleGuestPropertyAt('isEditing', index);

    toggleFilter = () => 
          this.setState({ isFiltered: !this.state.isFiltered })

    handleGuestsName = (e) => 
          this.setState({ pendingGuest: e.target.value})

  getTotalInvited = () => this.state.guests.length; 

  addNewGuestsSubmitHandler = (e) => {
          e.preventDefault();
          
          this.setState({ guests: [
            {
              name: this.state.pendingGuest,
              isConfirmed: false,
              isEditing: false
            },
            ...this.state.guests
          ],
          pendingGuest: '',
        });
    }

  //getAttendingGuests = () =>
  //getUnconfirmedGuests = () => 

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.addNewGuestsSubmitHandler}>
            <input 
            type="text" 
            onChange={this.handleGuestsName}
            value={this.state.pendingGuest}
            placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main"/>
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox"
            onChange={this.toggleFilter}
            checked={this.state.isFiltered}
            /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
 
        <GuestList 
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        isFiltered={this.state.isFiltered}
        removeGuestAt={this.removeGuestAt}
        />
      </div>
 
    );
  }
}

export default App;
