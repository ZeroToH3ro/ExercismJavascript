# frozen_string_literal: true
puts [1, 2, 3, 4, 5].inject(1) { |acc, value| acc * value }
puts (1..5).reduce(1, :*)
