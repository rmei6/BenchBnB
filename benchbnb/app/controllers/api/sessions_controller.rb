class Api::SessionsController < ApplicationController
    def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :show
    else
      render json: ['Nope. Wrong credentials!'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      head 404
    end
  end
end
