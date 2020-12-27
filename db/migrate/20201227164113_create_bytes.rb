class CreateBytes < ActiveRecord::Migration[6.0]
  def change
    create_table :bytes do |t|
      t.string :content

      t.timestamps
    end
  end
end
