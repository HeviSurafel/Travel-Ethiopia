import React, { useState, useEffect } from "react";

function EventList() {
  const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch events from API or mock data
//     getEvents().then(data => setEvents(data));
//   }, []);

//   const handleDeleteEvent = async (eventId) => {
//     await deleteEvent(eventId);
//     setEvents(events.filter(event => event.id !== eventId));
//   };

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Events</h2>
      <button className="bg-green-600 text-white py-2 px-4 rounded mb-6">Add Event</button>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Event Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className="px-4 py-2">{event.name}</td>
              <td className="px-4 py-2">{event.date}</td>
              <td className="px-4 py-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
