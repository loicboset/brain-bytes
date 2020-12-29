class AddByteToVote < ActiveRecord::Migration[6.0]
  def change
    add_reference :votes, :byte, null: false, foreign_key: true
  end
end
