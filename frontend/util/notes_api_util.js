export const fetchAllNotes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notes'
  });
};

export const fetchSingleNote = noteId => {
  return $.ajax({
    method: 'GET',
    url: `/api/notes/${noteId}`
  });
};

export const addNote = note => {
  return $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: { note }
  });
};

export const updateNote = note => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notes/${note.id}`,
    data: { note }
  });
};

export const deleteNote = note => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${note.id}`
  });
};
