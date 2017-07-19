class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    if !params[:user][:email].include?("@") || !params[:user][:email].include?(".")
      render json: ["Please enter a valid email address"], status: 422
    else
      @user = User.new({
        username: /[^@]*/.match(params[:user][:email]),
        email: params[:user][:email],
        password: params[:user][:password],
        image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg"
      })
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    render json: @user
  end

end
