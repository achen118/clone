class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)
    @note.author = current_user
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages
    end
  end

  def update
    @note = current_user.notes.find(params[:id])
    if @note && @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy
    render :show
  end

  def index
    if params[:notebook_id]
      @notes = current_user.notes.select do |note|
        note.notebook_id == params[:notebook_id].to_i
      end
    elsif params[:tag_name]
      tag = current_user.tags.find_by(name: params[:tag_name])
      @notes = tag.notes
    else
      @notes = current_user.notes.sort_by { |note| note.updated_at }
      @notes = @notes.reverse
    end
  end

  def show
    @note = current_user.notes.find(params[:id])
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end

end
