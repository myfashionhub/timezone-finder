class CreateEntries < ActiveRecord::Migration
  def up
    create_table :entries do |t|
      t.string :city
      t.integer :user_id
      t.integer :timezone_id

      t.timestamps
    end
  end

  def down
    drop_table :entries
  end
end
