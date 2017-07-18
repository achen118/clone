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
    @notebook = Notebook.find_by(id: params[:id])
    if @notebook.update_attributes(notebook_params)
      render json: @notebook
    else
      render json: @notebook.errors.full_messages
    end
  end

  def destroy
    @notebook = Note.find_by(id: params[:id])
    @notebook.destroy
    render json: @notebook
  end

  private

  def notebook_params
    params.require(:notebook).permit(:author_id, :title, :description)
  end

end
