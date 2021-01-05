class ByteSerializer
  include JSONAPI::Serializer
  attributes :title, :content, :created_at

  attribute :vote_count do |byte|
    byte.votes.length
  end

  attribute :author do |byte|
    "#{byte.user.first_name} #{byte.user.last_name}"
  end

  attribute :user_id do |byte|
    byte.user.id
  end
end
