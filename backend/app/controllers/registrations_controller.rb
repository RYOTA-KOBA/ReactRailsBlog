# frozen_string_literal: true

class RegistrationsController < ApplicationController
  def signup
    @user = User.new(registrations_params)

    if @user.save
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500 }
    end
  end

  private

  def registrations_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
