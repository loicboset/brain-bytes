class Api::V1::BytesController < ApplicationController
  # FOR TESTING API
  skip_before_action :authenticate_user!, only: [ :index , :create]
  # protect_from_forgery with: :null_session

  def index
    bytes = Byte.all.order('created_at DESC')
    render json: ByteSerializer.new(bytes).serializable_hash.to_json
  end

  def create
    byte = Byte.create(byte_params)
    if byte.save
      render json: ByteSerializer.new(byte).serializable_hash.to_json
    else
      render json: { error: byte.errors.messages }, status: 422
    end
  end

  private

  def byte_params
    params.permit(:content)
  end
end
