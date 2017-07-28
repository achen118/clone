json.extract! note, :id, :title, :body, :plain_text_body, :updated_at, :author_id
json.notebook_id note.notebook.id
json.tags do
  json.array! note.tags.pluck(:name)
end
