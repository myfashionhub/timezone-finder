Rails.application.routes.draw do
  root 'sessions#index'

  resources :users, only: [:create, :show]
  resources :sessions, only: [:create, :index]
  delete '/sessions' => 'sessions#destroy'

  resources :timezones, only: [:index]
  post '/timezones/search' => 'timezones#search'
  resources :entries, only: [:create, :update, :destroy]
end
