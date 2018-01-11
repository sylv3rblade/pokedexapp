module Pokeapi
  BASE_URL = 'https://pokeapi.co/api/v2/'.freeze

  # basic convenience DRY methods
  class Request
    def self.get(partial)
      request = HTTParty.get(BASE_URL + partial)
      request.parsed_response
    end
  end

  # pokemon
  class Pokemon < Request
    PARTIAL_URL = 'pokemon'.freeze

    def self.list
      result = get(PARTIAL_URL)
      # clean this up later
      result['results'].each { |x| x['id'] = x['url'].split('/').last }
      result
    end

    def self.show(id)
      get("#{PARTIAL_URL}/#{id}")
    end
  end
end
