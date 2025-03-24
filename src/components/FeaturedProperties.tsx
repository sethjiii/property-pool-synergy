
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import AnimatedButton from './AnimatedButton';
import { Property } from '@/lib/types';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  // Select up to 4 properties to feature
  const featuredProperties = properties.slice(0, 4);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our hand-picked selection of premium real estate opportunities. 
              Each property offers unique investment potential and steady returns.
            </p>
          </div>
          <Link 
            to="/properties" 
            className="flex items-center mt-6 md:mt-0 group text-primary hover:text-primary/90 transition-colors"
          >
            <span className="font-medium">View All Properties</span>
            <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              featured={index === 0}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <AnimatedButton 
            icon={<ChevronRight className="h-5 w-5" />}
            iconPosition="right"
            size="lg"
          >
            <Link to="/properties">Explore All Properties</Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
