class AddVehicleId < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, t.integer :vehicle_id
  end
end
