require "rails_helper"

RSpec.describe BookShelvesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/book_shelves").to route_to("book_shelves#index")
    end

    it "routes to #show" do
      expect(get: "/book_shelves/1").to route_to("book_shelves#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/book_shelves").to route_to("book_shelves#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/book_shelves/1").to route_to("book_shelves#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/book_shelves/1").to route_to("book_shelves#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/book_shelves/1").to route_to("book_shelves#destroy", id: "1")
    end
  end
end
