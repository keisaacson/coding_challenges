
def hats_on(num)

  cats_in_hats = []
  arr = (1..num).to_a

  arr.each do |x|
    y = 1
    while x*y <= num do
      if cats_in_hats.include?(x*y)
        cats_in_hats.delete(x*y)
      else
        cats_in_hats << x*y
      end
      y += 1
    end
  end

  cats_in_hats

end