require "minitest/autorun"
require "./rectangle.rb"

class RectangleTest < MiniTest::Test
    def test_area_method
        # GIVEN: A rectangle
        rect = Rectangle.new(3, 4)

        # WHEN & THEN
        assert_equal(12, rect.area)
        assert_equal(16, Rectangle.new(4, 4).area)
        assert_equal(0, Rectangle.new(0, 10).area)
    end

    def test_perimeter_method
        assert_equal(18, Rectangle.new(4, 5).perimeter)
        assert_equal(60, Rectangle.new(10, 20).perimeter)
        assert_equal(22, Rectangle.new(1, 10).perimeter)
    end
end