class Editusers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
  end
end
