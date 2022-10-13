import React, { useState }  from 'react';
// Import our custom hook.
import './tran.css';
import Dog from './Dog.js';
// Make our ThemeComponent the default export from this file
export default function ThemeComponent() {
  // Pluck values from our ThemeContext by invoking our useTheme hook

  return (
    <>
      <section className="text-center">
        The current value of{' '}
        <code style={{ fontWeight: 'bold' }}>
          {/* darkTheme: {darkTheme.toString()} */}
        </code>
      </section>
        <Dog />
    </>
  );
}
