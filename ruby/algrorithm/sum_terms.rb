# frozen_string_literal: true
def sum_term(n)
  (1..n).reduce(0) { |sum, i| sum + i ** 2 + 1 }
end

puts sum_term(10)