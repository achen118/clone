json.extract! notebook, :id, :title, :description, :author_id
json.notes do
  json.array! notebook.notes.ids
end
