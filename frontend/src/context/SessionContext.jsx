import React, { useState, createContext, useEffect } from 'react';

// Create the context
const SessionDataContext = createContext();

const SessionContext = ({ children }) => {
  // Initialize state with data from localStorage if available
  const [sessionData, setSessionData] = useState(() => {
    const storedSessionData = localStorage.getItem('sessionData');
    return storedSessionData
      ? JSON.parse(storedSessionData)
      : {
          data: {
            lecturer: "", // String: ID of the lecturer
            course: "", // String: ID of the course
            qrCode: {
              data: "", // String: QR code data
              expiresAt: "", // String: Expiration date of the QR code (ISO format)
            },
            attendees: [], // Array: List of attendees
            status: "inactive", // String: Status of the session
            _id: "", // String: Unique identifier for the session
            createdAt: "", // String: Date of creation (ISO format)
            updatedAt: "", // String: Date of last update (ISO format)
            __v: 0, // Number: Version key (used by MongoDB)
          },
          qrDataURL: "", // String: URL of the QR code image
        };
  });

  // Persist sessionData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
  }, [sessionData]);

  return (
    <SessionDataContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionDataContext.Provider>
  );
};

// Export both the context and the provider
export { SessionDataContext, SessionContext as default };