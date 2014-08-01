Rails.application.routes.draw do
  root 'sessions#index'

  resources :users
  resources :sessions, only: [:create, :destroy]
end
