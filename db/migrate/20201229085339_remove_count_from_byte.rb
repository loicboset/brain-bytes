class RemoveCountFromByte < ActiveRecord::Migration[6.0]
  def change
    remove_column :bytes, :count, :integer
  end
end
