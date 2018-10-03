def multiply(*args)
  # if the user enters no argument then args -> []
  # if the user enters 2 arguments ( 7, 6) then args -> [6, 7]
  result = 1
  args.each do |num|
    result *= num if num.is_a? Numeric
  end
  result
end
