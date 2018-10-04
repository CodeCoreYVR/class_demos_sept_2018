require './oreo.rb'
require './cookie_bag.rb'

cb = CookieBag.new 3

c1 = Cookie.new 5, 6
c2 = Cookie.new 7, 8
c3 = Oreo.new 5, 6, 'Chocolate'
c4 = Oreo.new 3, 4, 'Peanut Butter'

p cb.add(c1)
p cb.add(c2)
p cb.add(c3)
p cb.add(c4)

cb.show_details

p cb.remove
p cb.remove

cb.show_details

p cb.remove
p cb.remove
