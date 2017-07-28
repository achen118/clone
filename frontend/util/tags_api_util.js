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

export const addTagToNote = (noteId, tagName) => {
  return $.ajax({
    method: 'POST',
    url: `/api/taggings`,
    data: {
      tagging: {
        tag_name: tagName,
        note_id: noteId
      }
    }
  });
};

export const addTag = tag => {
  return $.ajax({
    method: 'POST',
    url: `/api/tags`,
    data: { tag }
  });
};

export const deleteTag = tag => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tags/${tag.name}`
  });
};

export const deleteTagFromNote = (noteId, tagName) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/taggings/${tagName}`,
    data: {
      tagging: {
        tag_name: tagName,
        note_id: noteId
      }
    }
  });
};

export const updateTag = (oldTagName, newTag) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/tags/${oldTagName}`,
    data: {
      tag: {
        name: newTag.name
      }
    }
  });
};
