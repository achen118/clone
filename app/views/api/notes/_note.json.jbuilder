json.extract! note, :id, :title, :body, :plain_text_body, :author_id
json.notebook_id note.notebook.id
json.tags do
  json.array! note.tags.pluck(:name)
end
json.updated_at note.updated_at.strftime("%A, %B %-d %Y, %l:%M %p")
json.created_at note.created_at.strftime("%A, %B %-d %Y, %l:%M %p")
