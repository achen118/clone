class RemoveDefaultFromTags < ActiveRecord::Migration[5.1]
  def change
    change_column :tags, :user_id, :integer, default: nil
  end
end
