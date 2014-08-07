class CreateTimezones < ActiveRecord::Migration
  def up
    create_table :timezones do |t|
      t.integer :difference
      t.string :abbreviation
      t.string :name
      t.text :cities

      t.timestamps
    end
  end

  def down
    drop_table :timezones
  end
end

