class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.author = current_user
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = current_user.tags.find_by(name: params[:name])
    if @tag.update_attributes(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = current_user.tags.find_by(name: params[:name])
    @tag.destroy
    render :show
  end

  def index
    @tags = current_user.tags.sort_by { |tag| tag.name }
  end

  def show
    @tag = current_user.tags.find_by(name: params[:name])
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
