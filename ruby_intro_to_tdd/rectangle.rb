class Rectangle
    def initialize(height, width)
        @height = height
        @width = width
    end

    def area
        @height * @width
    end

    def perimeter
        @height * 2 + @width * 2
    end
end