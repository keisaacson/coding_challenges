def split_hash_by_key(hash, *splits)  
  hash_array = []
  keys_array = hash.keys

  if splits.any? {|x| !keys_array.include?(x)}
    raise "ERROR: the provided keys are not all in the hash" 
  end

  splits.each do |x|
    index = keys_array.find_index(x)
    partial_hash = {}
    i = 0
    while i < index
      partial_hash[keys_array[i]] = hash[keys_array[i]]
      i += 1
    end

    hash_array << partial_hash if !partial_hash.empty?
    partial_hash.each {|x, y| hash.delete(x)}
    keys_array = hash.keys
  end

  hash_array << hash

end

split_hash_by_key({ :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :c, :e )

# split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :c, :e )
# # returns [ {:a=>1, :b=>2}, {:c=>3, :d=>4}, {:e=>5, :f=>6} ]

# split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, :b, :f )
# #returns [ {:a=>1}, {:b=>2, :c=>3, :d=>4, :e=>5}, {:f=>6} ]

# split_hash_by_key( { 'a'=>1, 'b'=>2, 'c'=>3, 'd'=>4, 'e'=>5, 'f'=>6 }, 'd' )
# #returns [ {"a"=>1, "b"=>2, "c"=>3}, {"d"=>4, "e"=>5, "f"=>6} ]

# split_hash_by_key( {:a => 1, :b => 2}, :a )
# #returns [ {:a => 1, :b => 2} ]

# split_hash_by_key( { :a=>1, :b=>2, :c=>3, :d=>4, :e=>5, :f=>6 }, 'b' )
# # raises an exception