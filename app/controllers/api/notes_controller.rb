class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: @note.errors.full_messages
    end
  end

  def update
    @note = Note.find_by(id: params[:id])
    if @note.update_attributes(note_params)
      render json: @note
    else
      render json: @note.errors.full_messages
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    @note.destroy
    render json: @note
  end

  def index
    @notes = Note.all
  end

  def show
    @note = Note.find_by(id: params[:id])
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end

end
