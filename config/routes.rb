Rails.application.routes.draw do
  root 'sessions#index'

  resources :users
  resources :sessions, only: [:create]
  delete '/sessions' => 'sessions#destroy'
end
