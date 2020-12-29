class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :byte
end
