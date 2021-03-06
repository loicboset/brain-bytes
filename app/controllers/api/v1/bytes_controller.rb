class Api::V1::BytesController < ApplicationController
  # FOR TESTING API
  skip_before_action :authenticate_user!, only: [ :index ]
  # protect_from_forgery with: :null_session

  def index
    bytes = Byte.all.order('created_at DESC')
    render json: ByteSerializer.new(bytes).serializable_hash.to_json
  end

  def create
    byte = Byte.new(byte_params)
    byte.user = current_user
    if byte.save
      render json: ByteSerializer.new(byte).serializable_hash.to_json
    else
      render json: { error: byte.errors.messages }, status: 422
    end
  end

  def update
    byte = Byte.find(params[:id])
    if byte.update(byte_params)
      render json: ByteSerializer.new(byte).serializable_hash.to_json
    else
      render json: { error: byte.errors.messages }, status: 422
    end
  end

  private

  def byte_params
    params.permit(:title, :content)
  end
end
