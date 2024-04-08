# frozen_string_literal: true
def skip_animals(animals, skip)
  result = []
  animals.each_with_index { |animal, index| result.push("#{index}:#{animal}") if index >= skip }
  result
end

puts skip_animals(['leopard', 'bear', 'fox', 'wolf'], 2)
