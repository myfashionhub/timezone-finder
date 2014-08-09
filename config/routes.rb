Rails.application.routes.draw do
  root 'sessions#index'

  resources :users, only: [:create]
  resources :sessions, only: [:create]
  delete '/sessions' => 'sessions#destroy'

  resources :timezones, only: [:index]
  post '/timezones/search' => 'timezones#search'
  resources :entries, only: [:create, :update, :destroy]
end
