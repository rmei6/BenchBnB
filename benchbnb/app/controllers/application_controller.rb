class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
    # This will be on the assessment
  # protect_from_forgery with: :exception

  # make these methods available from within the views
  helper_method :current_user, :logged_in?

  def login!(user)
    # set the session_token for the connection to be the 
    session[:session_token] = user.session_token
  end

  def logout!
    # Scramble the current_user's session_token
    if current_user.nil?
      render json: ['No Current User'], status: 404
    end
    current_user.reset_session_token!

    # Reset the session
    session[:session_token] = nil
  end

  def current_user
    # Check for session_token
    return nil unless session[:session_token]

    # Return the user associated with the session_token (if token is valid)
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end
end
