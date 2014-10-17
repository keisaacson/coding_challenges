require 'time'

cameras_txt = File.read('speed_cameras.txt').split(".\n")
cameras_txt.last.delete!('.')

camera_hash = {
  :speed_limit => {},
  :camera_positions => {},
  :vehicle_logs => {}
}

camera_hash[:speed_limit][:value] = cameras_txt.first.match(/(\d*\.\d*)/)[1]
camera_hash[:speed_limit][:units] = cameras_txt.first.match(/\s(\S*)$/)[1]

i = 1
while i < cameras_txt.length do
  if cameras_txt[i].include?('metres down the motorway')
    m = cameras_txt[i].match(/^(\w*\s){3}(\d*)\s\w*\s(\d*)/)
    camera_hash[:camera_positions][m[2]] = m[3]
  elsif cameras_txt[i].include?('passed camera')
    m = cameras_txt[i].match(/^\w*\s([A-Z0-9\s]*)passed\scamera\s(\d*)\sat\s([0-9:]*)$/)
    if camera_hash[:vehicle_logs][m[1]].nil?
      camera_hash[:vehicle_logs][m[1]] = {}
    end
    camera_hash[:vehicle_logs][m[1]][m[2]] = m[3]
  end
  i += 1
end

camera_hash[:vehicle_logs].each  do |veh, log|
  limit = camera_hash[:speed_limit][:value]
  units = camera_hash[:speed_limit][:units]
  units == 'mph' ? conv = 0.000621371 : conv = 0.001
  
  i = 1
  while i < log.values.length
    time = Time.parse(log.values[i]) - Time.parse(log.values[i - 1])
    dist = (camera_hash[:camera_positions][(i + 1).to_s].to_i - camera_hash[:camera_positions][(i).to_s].to_i) * conv
    speed = dist/time * 3600
    
    if speed > limit.to_i
      over = (speed - limit.to_i).round(1)
      puts "Vehicle " + veh + "broke the speed limit by " + over.to_s + " " + units + "."
    end
    i += 1
  end 
end


# camera_hash = {:speed_limit=>{:value=>"60.00", :units=>"mph"}, :camera_positions=>{"1"=>"0", "2"=>"600", "3"=>"855", "4"=>"1355"}, :vehicle_logs=>{"G122IVL"=>{"1"=>"09:36:12", "2"=>"09:36:42", "3"=>"09:36:56", "4"=>"09:37:28"}, "H151KEE"=>{"1"=>"09:36:15", "2"=>"09:36:51", "3"=>"09:37:03", "4"=>"09:37:29"}, "U109FIJ"=>{"1"=>"09:36:20", "2"=>"09:36:56", "3"=>"09:37:11", "4"=>"09:37:45"}, "LO04CHZ"=>{"1"=>"09:36:23", "2"=>"09:36:46", "3"=>"09:36:55", "4"=>"09:37:13"}, "I105AEV"=>{"1"=>"09:36:28", "2"=>"09:37:05", "3"=>"09:37:20", "4"=>"09:37:42"}, "J828EBC"=>{"1"=>"09:36:29", "2"=>"09:36:53", "3"=>"09:37:04", "4"=>"09:37:26"}, "WFEP7"=>{"1"=>"09:36:32", "2"=>"09:37:10", "3"=>"09:37:23", "4"=>"09:37:44"}, "H108KYL"=>{"1"=>"09:36:33", "2"=>"09:36:57", "3"=>"09:37:12", "4"=>"09:37:36"}, "R815FII"=>{"1"=>"09:36:34", "2"=>"09:36:55", "3"=>"09:37:09", "4"=>"09:37:28"}, "QW04SQU"=>{"1"=>"09:36:34", "2"=>"09:36:53", "3"=>"09:37:03", "4"=>"09:37:24"}}}





