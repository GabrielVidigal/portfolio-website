"use client";
import React, { useState } from "react";

const Timeline = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (event) => {
    if (selectedEvent === event) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
    }
  };

  return (
    <div className="relative">
      <ul className="flex justify-between items-center">
        {events.map((event, index) => (
          <li
            key={index}
            className={`flex items-center ${
              event === selectedEvent ? "text-blue-500" : "text-white-500"
            } cursor-pointer`}
            onClick={() => handleClick(event)}
          >
            <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
            <span className="ml-2">{event.title}</span>
          </li>
        ))}
      </ul>
      {selectedEvent && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          {selectedEvent.description}
        </div>
      )}
      <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-gray-300"></div>
    </div>
  );
};

export default Timeline;
