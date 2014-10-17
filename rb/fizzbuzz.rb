def fizzbuzz(num)
  num_array = (1..num).to_a
  fizzbuzz_array = num_array.map do |x|
    if x % 3 == 0 && x % 5 == 0
      'fizzbuzz'
    elsif x % 5 == 0
      'buzz'
    elsif x % 3 == 0
      'fizz'
    else
      x
    end 
  end

  fizzbuzz_array
end