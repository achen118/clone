require 'test_helper'

class NotebooksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get notebooks_create_url
    assert_response :success
  end

  test "should get update" do
    get notebooks_update_url
    assert_response :success
  end

  test "should get destroy" do
    get notebooks_destroy_url
    assert_response :success
  end

end
