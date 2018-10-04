# we declare a class by using the `class` keyword
# class names follow CapitalCamelCase convention
# we usually put one class in a file, you're able to put multiple classes in a file
# but generally speaking, it's preferred to put one class in each file.
# file names for classes follow snake_case convetion of the same class name
# so if my class name is StreetCar then the file name should be: street_car.rb
# c = Cookie.new
# c is an object (also called instance) or the Cookie class
class Cookie

  def initialize(sugar, butter)
    @sugar = sugar
    @butter = butter
    puts 'hello'
  end

  def details
    "this cookie has #{@sugar}g of sugar and #{@butter}g of butter."
  end

  attr_reader :sugar
  # is equivalent to doing:
  # def sugar
  #   @sugar
  # end

  def change_sugar(new_amount)
    @sugar = new_amount
  end

  attr_writer :sugar
  # is equivalent to doing:
  # def sugar=(new_amount)
  #   @sugar = new_amount
  # end

  attr_accessor :butter
  # is equivalent to doing:
  # attr_reader :butter
  # attr_writer :butter

  # this defines a `class` method which you call on the class directly and not on
  # an instance (or object) of the class so:
  # Cookie.info # will work
  # Cookie.new.info # will give an error
  # you can also define it as: def Cookie.info
  def self.info
    'I am the Cookie class!!'
  end

  def self.self_test
    self
  end

  def self_test
    self
  end

  # when we define a methods like this one, we call it public instance method
  # instance method means that you call the method on an instance (object) so
  # I will have to call this method on an instance (or object) as in:
  # c = Cookie.new
  # c.eat
  # if you try to call it directly on the class you will get an error as in:
  # Cookie.eat
  # public method means that we can call it from outside of methods in this class
  # so I can use this method in other classes or in `pry` for instance
  def eat
    'Nom, Nom!'
  end

  def bake_and_eat
    minutes
    puts @mins
    puts bake
    puts eat
  end

  def minutes
    # @mins in this case is an instance variable which means it will belong to a single
    # instance of the Cookie class, this means that if I have two objects of the Cookie
    # class, each one of them will have its own version of the `@mins` variable.
    # you can access instance variable in any instance method (public or private)
    # by default instance variable are instantiated to `nil` even if you didn't define them
    @mins = rand(10)
  end

  # any methods defined after this `private` keyword are treated as private methods
  # which means other methods in this class can call them, but not methods from outside
  # the class
  private

  def bake

    'Baking the cookie!'
  end

end
