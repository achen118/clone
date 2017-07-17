Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :show, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

end
