class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)
    if params[:note][:title] == ""
      @note.title = "Untitled Note"
    end
    @note.author = current_user
    if @note.save
      if params[:note][:tags]
        params[:note][:tags].each do |tag|
          existing_tag = Tag.find_by(name: tag)
          if !existing_tag
            Tag.create(name: tag, author_id: current_user.id)
          end
          Tagging.create(tag_name: tag, note_id: @note.id)
        end
      end
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])
    if @note && @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy
  end

  def index
    render json: [] if current_user.notes.empty?
    if params[:notebook_id]
      @notes = current_user.notes.select do |note|
        note.notebook_id == params[:notebook_id].to_i
      end
      @notes = @notes.sort_by { |note| note.updated_at }
      @notes = @notes.reverse
    elsif params[:tag_name]
      tag = current_user.tags.find_by(name: params[:tag_name])
      @notes = tag.notes.sort_by { |note| note.updated_at }
      @notes = @notes.reverse
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
    params.require(:note).permit(:title, :body, :author_id, :notebook_id, :plain_text_body)
  end

end
