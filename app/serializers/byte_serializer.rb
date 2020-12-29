class ByteSerializer
  include JSONAPI::Serializer
  attributes :content, :count

  attribute :vote_count do |byte|
    byte.votes.length
  end
end
