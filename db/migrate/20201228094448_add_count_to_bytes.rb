class AddCountToBytes < ActiveRecord::Migration[6.0]
  def change
    add_column :bytes, :count, :integer
  end
end
