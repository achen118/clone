json.extract! notebook, :id, :title, :author_id
json.notes do
  json.array! notebook.notes.ids
end
