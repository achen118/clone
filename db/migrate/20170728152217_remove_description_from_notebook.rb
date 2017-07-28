class RemoveDescriptionFromNotebook < ActiveRecord::Migration[5.1]
  def change
    remove_column :notebooks, :description
  end
end
