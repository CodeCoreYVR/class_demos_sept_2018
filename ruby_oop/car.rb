class Car
  NUMBER_OF_WHEELS = 4

  attr_accessor :model, :type, :capacity

  def initialize(model, type, capacity)
    @model, @type, @capacity = model, type, capacity
  end

  def self.max_speed
    200
  end

  def drive
    puts ignite_engine
    'Let\'s go for a ride'
  end

  def stop
    'stop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  end

  def park
    'Arrived at destination.'
  end

  private

  def pump_gas
    'Running low, let\'s fill up'
  end
  
  def ignite_engine
    'Vrooooooooooooom!!'
  end

end