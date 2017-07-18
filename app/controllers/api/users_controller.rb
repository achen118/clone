class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new({
      username: /[^@]*/.match(params[:user][:user_credential]),
      email: params[:user][:user_credential],
      password: params[:user][:password],
      image_url: "https://res.cloudinary.com/malice/image/upload/c_scale,w_100/v1500414084/default-profile-pic_bhulg4.svg"
    })
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:user_credential, :password)
  end

end
