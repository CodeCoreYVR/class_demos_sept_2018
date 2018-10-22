require "minitest/autorun"
require "./vector.rb"

class VectorTest < MiniTest::Test
    def test_length
        # GIVEN: A vector of (3, 4)
        vector = Vector.new(3, 4)

        # WHEN: We call .length
        length = vector.length

        # THEN: It should equal 5
        # First argument to assert_equal is the value
        # that we expect.
        # Second argument is the result of executing a behaviour
        # (i.e. calling the length method)
        assert_equal(5, length)
    end

    def test_adding_two_vectors_together
        # GIVEN: two vectors
        vec_a = Vector.new(2, 1)
        vec_b = Vector.new(3, 4)

        # WHEN: add the two vectors
        vec_c = vec_a + vec_b

        # THEN: we get a vector of Vector.new(5, 5)
        assert_equal(5, vec_c.x)
        assert_equal(5, vec_c.y)
    end
end