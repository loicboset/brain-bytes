class Api::V1::VotesController < ApplicationController
  # FOR TESTING API
  # skip_before_action :authenticate_user!, only: [ :create ]
  # protect_from_forgery with: :null_session

  def create
    user_id = current_user.id
    vote = Vote.new(user_id: user_id, byte_id: params[:byte_id])
    if vote.save
      byte = Byte.find(params[:byte_id])
      render json: ByteSerializer.new(byte).serializable_hash.to_json
    else
      render json: { error: vote.errors.messages }, status: 422
    end
  end

end
