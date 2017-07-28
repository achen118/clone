class Api::NotebooksController < ApplicationController

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author = current_user;
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find_by(id: params[:id])
    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find_by(id: params[:id])
    @notebook.destroy
    render :show
  end

  def index
    @notebooks = current_user.notebooks.sort_by { |notebook| notebook.title }
  end

  def show
    @notebook = current_user.notebooks.find_by(id: params[:id])
  end

  private

  def notebook_params
    params.require(:notebook).permit(:author_id, :title)
  end

end
