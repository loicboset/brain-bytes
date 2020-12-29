class Byte < ApplicationRecord

  validates :content, presence: true
  validates :count, presence: true, numericality: { only_integer: true }
end
