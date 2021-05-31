# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  post '/signup', to: 'registrations#signup'
  
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/logged_in', to: 'sessions#logged_in?'
  resource :users, only: [:edit, :update]
  resources :posts
end
