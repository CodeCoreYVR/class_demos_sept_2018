class Rectangle
  attr_writer :width, :height

  def initialize(w, h)
    @width, @height = w, h
  end

  def area
    # REMEMBER: this is accessing the methods generated by `attr_accessor`
    width * height
  end

  def is_square?
    width == height
  end

end