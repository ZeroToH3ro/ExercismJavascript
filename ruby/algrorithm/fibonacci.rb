def fibonacci(terms)
  sequence = [0 ,1]
  
  (2..terms-1).each do |i|
    sequence[i] = sequence[i-1] + sequence[i-2]
  end

  puts "Fibonacci sequence:"
  sequence.each do |number|
    puts "#{number}"
  end
end

fibonacci(10)
