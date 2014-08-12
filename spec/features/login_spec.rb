require 'spec_helper'

feature "Log in", :js => true do
  scenario "allows a user to login" do
    visit "/"
    click_link "login"
    fill_in "input[type='email']", with: 'nessa@me.com'
    fill_in "input[type='password']", with: 'nessanguyen'
    click_button "Sign in"
    #find("h2", :visible => true).text.should == "Your saved time zones:"
    using_wait_time 1 do
      page.should have_content "Your saved time zones:"
    end
  end
end


describe "Create timezone entry", :js => true do
  entry_count = context.all('.entries li').count
  fill_in '#timezone-input', with: 'Brasilia'
  fill_in '#city-input', with: 'Sao Paulo'
  click_button "save"
  #find('save').click
  using_wait_time 1 do
    entry_count.should == entry_count + 1
  end
end



