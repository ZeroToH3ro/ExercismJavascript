class LocomotiveEngineer
  def self.generate_list_of_wagons(*args)
    args
  end

  def self.fix_list_of_wagons(each_wagons_id, missing_wagons)
    first, second, third, *rest = each_wagons_id
    [third, *missing_wagons, *rest, first, second]
  end

  def self.add_missing_stops(routing_hash, **kwargs)
    {**routing_hash, stops: kwargs.sort.to_h.values }
  end

  def self.extend_route_information(route, more_route_information)
    {**route, **more_route_information}
  end
end
