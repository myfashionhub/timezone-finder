class CreateEntries < ActiveRecord::Migration
  def up
    create_table :entries do |t|
      t.string :name
      t.string :city
      t.integer :difference

      t.timestamps
    end
  end

  def down
    drop_table :entries
  end
end
