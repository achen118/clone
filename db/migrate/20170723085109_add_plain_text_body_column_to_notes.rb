class AddPlainTextBodyColumnToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :plain_text_body, :text
  end
end
