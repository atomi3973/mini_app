require "test_helper"

class FortunesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get fortunes_show_url
    assert_response :success
  end
end
