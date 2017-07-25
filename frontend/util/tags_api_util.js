export const fetchAllTags = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tags'
  });
};

export const fetchNotesFromTag = tagName => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags/${tagName}/notes`
  });
};

export const addTagToNote = (noteId, tag) => {
  return $.ajax({
    method: 'POST',
    url: `/api/notes/${noteId}/tags`,
    data: { tag }
  });
};

export const addTag = tag => {
  return $.ajax({
    method: 'POST',
    url: `/api/tags`,
    data: { tag }
  });
};

export const deleteNotebook = (noteId, tag) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/notes/${noteId}/tags/${tag.name}`
  });
};
