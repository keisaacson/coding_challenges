def parentheses(string)
  open_parens = 0
  closed_parens = 0
  string_array = string.split('')
  string_array.each do |x|
    if closed_parens > open_parens
      return 'NO'
    elsif x == '('
      open_parens += 1
    elsif x == ')'
      closed_parens += 1
    end  
  end
  open_parens == closed_parens ? 'YES': 'NO'
end