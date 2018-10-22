class Vector
    attr_accessor :x, :y
    
    def initialize(x, y)
        @x = x
        @y = y
    end

    def length
        Math.sqrt(@x ** 2 + @y ** 2)
    end

    # Vector.new(1, 1) + Vector.new(2, 2)
    # Vector.new(1, 1).+(Vector.new(2, 2))
    def +(rhs) # rhs = right-hand side
        Vector.new(self.x + rhs.x, self.y + rhs.y)
    end
end