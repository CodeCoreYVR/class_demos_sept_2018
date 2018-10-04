# require will load the file in memory, it's similar in a way to the `load`
# method but, unlike load, if the class is loaded already, it will not load it again.
# On the other hard, `load` will load the class even if it's loaded before
require './cookie.rb'

# we use the `<` sign to have a class inherit from another class
# when a class inherit from another class, it gets all the methods from it private,
# public, or class. It also gets any constants defined in it.
# we call Oreo in this case: child class or subclass
# we call Cookie in this case: parent class or superclass
class Oreo < Cookie
  attr_accessor :filling_type

  def initialize(sugar, butter, filling_type)
    # super here will call `initialize` from the superclass
    # you can use `super` in any method, it will just call the method with the same
    # name in the superclass
    super(sugar, butter)
    @filling_type = filling_type
  end

  # we can override (redefine) methods in the child class by simply
  # defining them here
  def details
    "This Oreo Cookie has #{filling_type} Filling Type and #{sugar}g of sugar and #{butter}g of butter"
  end
end