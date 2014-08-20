require 'spec_helper'

feature "Log in", :js => true do
  scenario "allows a user to login" do
    visit "/"
    click_link "login"
    fill_in "Email", with: 'nessa@me.com'
    fill_in "Password", with: 'nessanguyen'
    click_button "Sign in"
    using_wait_time 1 do
      find("h2", :visible => true).text.should == "Your saved time zones:"
    end
  end
end


feature "Create timezone entry", :js => true do
  scenario "saves entry and renders on page" do
    entry_count = page.all('.entries li').count
    fill_in 'Ex: -3 or Brasilia', with: 'Brasilia'
    fill_in 'City name', with: 'Sao Paulo'
    click_button "save"
    #find('save').click
    using_wait_time 1 do
      entry_count.should == entry_count + 1
    end
  end
end



