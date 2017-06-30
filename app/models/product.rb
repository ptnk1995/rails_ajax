class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true

  scope :newest, ->{order created_at: :desc}
end
