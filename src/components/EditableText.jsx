import React, { useState } from 'react';
import Showdown from 'showdown';

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const [draftText, setDraftText] = useState(initialText);

  const converter = new Showdown.Converter();

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setDraftText(text);
    setIsEditing(false);
  };
  const handleSave = () => {
    setText(draftText);
    setIsEditing(false);
  };

  const handleChange = (e) => setDraftText(e.target.value);

  return (
    <div className="editable-text">
      {isEditing ? (
        <div>
          <textarea
            value={draftText}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button onClick={handleSave} className="mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded">Save</button>
          <button onClick={handleCancel} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
        </div>
      ) : (
        <div
          className="editable-text-content"
          onClick={handleEdit}
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(text) }}
        />
      )}
    </div>
  );
};

export default EditableText;