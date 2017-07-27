class ChangeColumnInTaggings < ActiveRecord::Migration[5.1]
  def change
    rename_column :taggings, :tag_id, :tag_name
  end
end
