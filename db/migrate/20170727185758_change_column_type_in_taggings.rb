class ChangeColumnTypeInTaggings < ActiveRecord::Migration[5.1]
  def change
    change_column :taggings, :tag_name, :string
  end
end
