import React, { useState, createContext } from 'react';

// Create the context
const SessionDataContext = createContext();

const SessionContext = ({ children }) => {
    const [sessionData, setSessionData] = useState({
      data: {
          lecturer: "",          // String: ID of the lecturer
          course: "",            // String: ID of the course
          qrCode: {
            data: "",            // String: QR code data
            expiresAt: ""        // String: Expiration date of the QR code (ISO format)
          },
          attendees: [],         // Array: List of attendees
          status: "inactive",    // String: Status of the session
          _id: "",               // String: Unique identifier for the session
          createdAt: "",         // String: Date of creation (ISO format)
          updatedAt: "",         // String: Date of last update (ISO format)
          __v: 0                 // Number: Version key (used by MongoDB)
      },
      qrDataURL: "",             // String: URL of the QR code image

    });

  return (
    <SessionDataContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionDataContext.Provider>
  );
};

// Export both the context and the provider
export { SessionDataContext, SessionContext as default };