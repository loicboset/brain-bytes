class ByteSerializer
  include JSONAPI::Serializer
  attributes :content

  attribute :vote_count do |byte|
    byte.votes.length
  end

  attribute :author do |byte|
    "#{byte.user.first_name} #{byte.user.last_name}"
  end
end
