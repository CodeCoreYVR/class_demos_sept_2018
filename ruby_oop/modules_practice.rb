class Apple
  def abc
    'ABC method'
  end
end

# this `opens` the Apple class and adds or modifies methods inside it
# this is sometime called `monkey patching`
# it can even be done for classes that come with Ruby like String or Array
class Apple
  def xyz
    'XYZ method'
  end
end

class String

  def titleize
    self.split.map(&:capitalize).join(' ')
  end

end

# using `modules` as namespaces
module Fruit
  class Apple
    def abc
      'ABC method'
    end
  end
end

module Computer
  class Apple
    def xyz
      'XYZ method'
    end
  end
end

# [25] pry(main)> Fruit::Apple.new.abc
# => "ABC method"
# [26] pry(main)> Fruit::Apple.new.xyz
# NoMethodError: undefined method `xyz' for #<Fruit::Apple:0x00007fd7d72f1870>
# from (pry):47:in `__pry__'
# [27] pry(main)> Computer::Apple.new.xyz
# => "XYZ method"
# [28] pry(main)> Computer::Apple.new.abc
# NoMethodError: undefined method `abc' for #<Computer::Apple:0x00007fd7d7a42d90>
# from (pry):49:in `__pry__'


module HelperMethods
  def name_display
    name.squeeze(' ').strip.capitalize
  end
end

class User
  attr_accessor :name
  include HelperMethods
end

class Car
  attr_accessor :name
  include HelperMethods
end

# [38] pry(main)> u = User.new
# => #<User:0x00007fd7d5b5eb68>
# [39] pry(main)> u.name = '   tam    Kbeili   '
# => "   tam    Kbeili   "
# [40] pry(main)> u.name_display
# => "Tam kbeili"
# [41] pry(main)> c = Car.new
# => #<Car:0x00007fd7d44f68f8>
# [42] pry(main)> c.name = '   toyota corolla'
# => "   toyota corolla"
# [43] pry(main)> c.name_display
# => "Toyota corolla"




