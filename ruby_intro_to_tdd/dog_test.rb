require "minitest/autorun"
require "./dog.rb"

class DogTest < MiniTest::Test
    def test_give_bone_with_1_bone
        dog = Dog.new

        assert_equal(1, dog.give_bone("small"))
    end

    def test_give_bone_with_3_bones
        dog = Dog.new

        dog.give_bone("small")
        dog.give_bone("medium")
        last_return = dog.give_bone("small")

        assert_equal(3, last_return)
    end

    def test_give_bone_with_5_bones
        dog = Dog.new

        dog.give_bone("small")
        dog.give_bone("medium")
        dog.give_bone("large")
        dog.give_bone("medium")
        last_return = dog.give_bone("small")

        assert_equal(3, last_return)
    end

    def test_eat_bone_with_1_bone
        # GIVEN: A dog with a bone
        dog = Dog.new
        dog.give_bone("small")

        # WHEN: A dog eats a bone
        last_return = dog.eat_bone

        # THEN: We get a "small" bone

        assert_equal("small", last_return)
    end

    def test_eat_bone_with_3_bones
        # GIVEN: A dog with a bone
        dog = Dog.new
        dog.give_bone("small")
        dog.give_bone("medium")
        dog.give_bone("large")

        assert_equal("large", dog.eat_bone)
        assert_equal("medium", dog.eat_bone)
        assert_equal("small", dog.eat_bone)
    end
end