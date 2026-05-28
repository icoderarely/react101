import React from "react";

const Note = ({ note, deleteNode }) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${note.priority === "High" ? "border-l-red-600" : note.priority === "Medium" ? "border-l-yellow-600" : "border-l-green-600"}`}
    >
      <h3 className="text-lg font-bold">📝 {note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>🏷️ Category: </strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>⚡ Priority: </strong> {note.priority}
      </p>
      <p className="mt-2">🗒️ {note.description}</p>

      <button
        onClick={() => deleteNode(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
