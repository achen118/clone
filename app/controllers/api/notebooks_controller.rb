class Api::NotebooksController < ApplicationController

  def create
    @notebook = Notebook.new(notebook_params)
    if @notebook.save
      render json: @notebook
    else
      render json: @notebook.errors.full_messages
    end
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook && @notebook.update_attributes(notebook_params)
      render json: @notebook
    else
      render json: @notebook.errors.full_messages
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    @notebook.destroy
    render json: @notebook
  end

  def index
    @notebooks = current_user.notebooks.sort_by { |notebook| notebook.title }
  end

  def show
    @notebook = current_user.notebooks.find_by(params[:id])
  end

  private

  def notebook_params
    params.require(:notebook).permit(:author_id, :title, :description)
  end

end
