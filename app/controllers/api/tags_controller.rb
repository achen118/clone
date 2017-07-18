class Api::TagsController < ApplicationController

  def create
    # if params[:note_id]
    #   @tag = Tag.find_by(name: tag_params.tag.name)
    #   @tagging = Tagging.new(note_id: params[:note_id], tag_id: @tag.id)
    # else
    #   @tag = Tag.new(tag_params)
    #   if @tag.save
    #     render json: @tag
    #   else
    #     render json: @tag.errors.full_messages
    #   end
  end

  def destroy
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
