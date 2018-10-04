class CookieBag
  attr_reader :cookies, :capacity

  def initialize(capacity = 3)
    @capacity = capacity
    @cookies = []
  end

  def add(cookie)
    if cookies.length < capacity
      cookies << cookie
    else
      'Bag is full'
    end
  end

  def remove
    if cookies.empty?
      'Bag is empty! 🍪🍪🍪🍪'
    else
      cookies.pop
    end
  end

  def show_details
    cookies.each do |c|
      puts c.details
    end
  end

end