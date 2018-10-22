require "minitest/autorun"

class AwesomeTest < MiniTest::Test
    def test_something
        assert_equal(2, 1 + 1)
    end

    def test_something_that_fails
        assert_equal(2, 1 + 3)
    end
end