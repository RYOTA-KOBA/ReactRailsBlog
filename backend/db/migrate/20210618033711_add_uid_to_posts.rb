class AddUidToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts,:uid,:integer
  end
end
