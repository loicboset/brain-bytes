class VoteSerializer
  include JSONAPI::Serializer
  attributes :user_id, :byte_id
end
