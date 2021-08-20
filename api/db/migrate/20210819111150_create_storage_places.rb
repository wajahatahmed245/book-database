class CreateStoragePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :storage_places do |t|
      t.string :name
      t.string :type

      t.timestamps
    end
  end
end
