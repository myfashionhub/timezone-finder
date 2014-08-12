require 'spec_helper'

describe "Log in", :js => true do
  it "allows a user to login" do
    user = Fabricate(:user)
    visit "/"
    click_link "login"
    fill_in "input[type='email']", :with => user.email
    fill_in "input[type='password']", :with => user.password
    click_button "Sign in"

    using_wait_time 1 do
      find("h2", :visible => true).text.should == "Your saved time zones:"
    end
  end
end


describe "Create timezone entry", :js => true do
  entry_count = find('.entries li').count
  find('save').click
  using_wait_time 1 do
    entry_count.should == entry_count + 1
  end
end
