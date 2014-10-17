def sequence(array)
  sequence_length = 1
  sequences = []
  array.each_with_index do |e, i|
    if i > 0 && array[i] - array[i-1] >= 0
      sequence_length += 1
    elsif i > 0
      sequences << sequence_length
      sequence_length = 1
    end
  end

  sequences.max
end