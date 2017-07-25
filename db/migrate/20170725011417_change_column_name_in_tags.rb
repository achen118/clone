class ChangeColumnNameInTags < ActiveRecord::Migration[5.1]
  def change
    rename_column :tags, :user_id, :author_id
  end
end
