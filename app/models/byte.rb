class Byte < ApplicationRecord

  has_many :votes

  validates :content, presence: true
  validates :count, presence: true, numericality: { only_integer: true }
end
