class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_reponse

  before_action :authorize

  def authorize
    @current_user ||= User.find_by(id: session[:user_id])
    # using conditional assignment ||= makes your app more efficient because it cuts down on the number of queries on the User table, but it's not necessary

    render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

  private

  def render_unprocessable_entity_reponse(exception)
    render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

end