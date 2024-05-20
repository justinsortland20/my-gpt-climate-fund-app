import React from 'react';
import EditableText from './components/EditableText';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Evanston Climate Fund</h1>
      <EditableText initialText="This is an editable text box. Click to edit me!" />
    </div>
  );
};

export default App;