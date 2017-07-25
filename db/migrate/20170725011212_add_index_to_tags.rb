class AddIndexToTags < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, :user_id
  end
end
