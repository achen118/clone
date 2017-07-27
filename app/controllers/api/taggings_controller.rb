class Api::TaggingsController < ApplicationController

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = current_user.notes.taggings.find_by(name: params[:tag_name])
    @tagging.destroy!
    render :show
  end

  private

  def tagging_params
    params.require(:tagging).permit(:note_id, :tag_name)
  end

end
