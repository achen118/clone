export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tags'
  });
};

export const addTagToNote = (noteId, tag) => {
  return $.ajax({
    method: 'POST',
    url: `/api/notes/${noteId}/tags`,
    data: { tag }
  });
};

export const deleteNotebook = (noteId, tag) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${noteId}/tags/${tag.name}`
  });
};
