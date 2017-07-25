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

  def index
    @tags = current_user.tags.sort_by { |tag| tag.name }
  end

  def show
    @tag = current_user.tags.find(params[:name])
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
