import React, { useState } from 'react';

function EventManager() {
  const [eventName, setEventName] = useState("");
  const [guestList, setGuestList] = useState([]);

  const handleAddGuest = () => {
    const guestName = prompt("Enter guest name:");
    if (guestName) setGuestList([...guestList, guestName]);
  };

  return (
    <div>
      <h2>Create an Event</h2>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Event Name"
      />
      <button onClick={handleAddGuest}>Add Guest</button>
      <ul>
        {guestList.map((guest, index) => <li key={index}>{guest}</li>)}
      </ul>
    </div>
  );
}

export default EventManager;
