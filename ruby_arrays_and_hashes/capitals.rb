canada = { "BC" => "Victoria", "Yukon" => "Whie Horse", "NorthWest Territories" => "Yellow Knife", "AB" => "Edmonton" }

canada.each do |province, capital|
  puts "The capital of #{province} is #{capital}"
end
