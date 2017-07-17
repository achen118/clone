export const fetchAllNotebooks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  });
};

export const fetchSingleNotebook = notebookId => {
  return $.ajax({
    method: 'GET',
    url: `/api/notebooks/${notebookId}`
  });
};

export const fetchNotesFromNotebook = notebookId => {
  return $.ajax({
    method: 'GET',
    url: `/api/notebooks/${notebookId}/notes`
  });
};

export const addNotebook = notebook => {
  return $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: { notebook }
  });
};

export const updateNotebook = notebook => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/notebooks/${notebook.id}`,
    data: { notebook }
  });
};

export const deleteNotebook = notebook => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${notebook.id}`
  });
};
