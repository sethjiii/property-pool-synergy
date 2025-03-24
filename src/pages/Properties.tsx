
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data';
import { Search, SlidersHorizontal, MapPin, ArrowDownUp, X } from 'lucide-react';

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const locations = [...new Set(properties.map(property => property.location.split(',')[0].trim()))];
  const priceRanges = ['Under $1M', '$1M - $2M', '$2M - $5M', 'Over $5M'];
  const features = ['Ocean View', 'Mountain View', 'City View', 'Private Pool', 'Fireplace', 'Concierge'];

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery('');
  };

  const filteredProperties = properties.filter(property => {
    // Apply search query
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply active filters (simplified for demo)
    if (activeFilters.length > 0) {
      // Check if any location filter matches
      const locationMatch = activeFilters.some(filter => 
        locations.includes(filter) && property.location.includes(filter)
      );
      
      // Check if any feature filter matches
      const featureMatch = activeFilters.some(filter => 
        features.includes(filter) && property.features.includes(filter)
      );
      
      // Check if any price range filter matches (simplified)
      const priceMatch = activeFilters.some(filter => {
        if (filter === 'Under $1M' && property.price < 1000000) return true;
        if (filter === '$1M - $2M' && property.price >= 1000000 && property.price < 2000000) return true;
        if (filter === '$2M - $5M' && property.price >= 2000000 && property.price < 5000000) return true;
        if (filter === 'Over $5M' && property.price >= 5000000) return true;
        return false;
      });
      
      if (!(locationMatch || featureMatch || priceMatch)) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Discover Investment Properties</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse our curated selection of premium properties available for fractional ownership.
                Find the perfect addition to your investment portfolio.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search by location or property name..." 
                  className="bg-background text-foreground border border-border focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-shadow pl-12 pr-4 py-3 rounded-xl w-full shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Properties Listing */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Panel (mobile toggle) */}
              <button 
                className="lg:hidden flex items-center justify-center gap-2 py-3 px-4 bg-secondary rounded-lg text-foreground"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal className="h-5 w-5" />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {/* Filters Sidebar */}
              <div className={`lg:w-1/4 space-y-8 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    {activeFilters.length > 0 && (
                      <button 
                        className="text-sm text-primary flex items-center gap-1"
                        onClick={clearFilters}
                      >
                        <X className="h-4 w-4" />
                        Clear All
                      </button>
                    )}
                  </div>
                  
                  {/* Location Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Locations
                    </h4>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <div key={location} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`location-${location}`} 
                            checked={activeFilters.includes(location)}
                            onChange={() => toggleFilter(location)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mr-2"
                          />
                          <label htmlFor={`location-${location}`} className="text-sm">{location}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <ArrowDownUp className="h-4 w-4" />
                      Price Range
                    </h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`price-${range}`} 
                            checked={activeFilters.includes(range)}
                            onChange={() => toggleFilter(range)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mr-2"
                          />
                          <label htmlFor={`price-${range}`} className="text-sm">{range}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Features</h4>
                    <div className="space-y-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`feature-${feature}`} 
                            checked={activeFilters.includes(feature)}
                            onChange={() => toggleFilter(feature)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary mr-2"
                          />
                          <label htmlFor={`feature-${feature}`} className="text-sm">{feature}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Properties Grid */}
              <div className="lg:w-3/4">
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-muted-foreground">
                    {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
                  </p>
                  
                  {/* Sort Options - Simplified for demo */}
                  <select 
                    className="bg-background text-foreground border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    defaultValue="newest"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="roi-desc">Highest ROI</option>
                  </select>
                </div>
                
                {filteredProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-secondary/30 rounded-xl">
                    <div className="mb-4">
                      <Search className="h-12 w-12 mx-auto text-muted-foreground/60" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <button 
                      className="text-primary font-medium hover:underline"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
