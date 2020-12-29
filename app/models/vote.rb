class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :byte

  validates :count, presence: true
  validates :user_id, presence: true
  validates :byte_id, presence: true

  validates :user_id, uniqueness: { scope: :byte_id,
    message: "a user can only give one vote per byte" }
end
