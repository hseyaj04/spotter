import React, { useState, createContext } from 'react';

// Create the context
const SessionDataContext = createContext();

const SessionContext = ({ children }) => {
    const [session, setSession] = useState({
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
      });

  return (
    <SessionDataContext.Provider value={{ session, setSession }}>
      {children}
    </SessionDataContext.Provider>
  );
};

// Export both the context and the provider
export { SessionDataContext, SessionContext as default };