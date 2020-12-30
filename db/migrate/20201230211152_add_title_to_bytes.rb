class AddTitleToBytes < ActiveRecord::Migration[6.0]
  def change
    add_column :bytes, :title, :string
  end
end
