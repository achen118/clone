Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:create, :update, :destroy, :index, :show]
    resources :notebooks, only: [:create, :update, :destroy, :index, :show] do
      resources :notes, only: [:index]
    end
    resources :tags, only: [:show, :index, :create, :destroy], param: :name do
      resources :notes, only: [:index]
    end
    resources :taggings, only: [:create, :destroy], param: :tag_name
  end

end
