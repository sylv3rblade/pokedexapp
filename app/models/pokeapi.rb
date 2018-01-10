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
      get(PARTIAL_URL)
    end

    def self.show(id)
      get("#{PARTIAL_URL}/#{id}")
    end
  end
end
