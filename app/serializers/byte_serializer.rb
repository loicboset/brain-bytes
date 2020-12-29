class ByteSerializer
  include JSONAPI::Serializer
  attributes :content, :count
end
