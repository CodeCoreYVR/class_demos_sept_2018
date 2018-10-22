class Dog
    def initialize
        @bones = []
    end

    def give_bone(bone)
        if @bones.length < 3
            @bones.push(bone)
        end

        @bones.length
    end

    def eat_bone
        @bones.pop
    end
end