
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
  className?: string;
  featured?: boolean;
}

const PropertyCard = ({ property, className, featured = false }: PropertyCardProps) => {
  const { id, title, location, price, currency, totalShares, availableShares, sharePrice, roi, images } = property;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div 
      className={cn(
        "overflow-hidden group rounded-2xl transition-all duration-500 bg-white hover:shadow-xl hover-scale",
        featured ? "shadow-lg" : "shadow-md",
        className
      )}
    >
      <div className="relative">
        {/* Main image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Availability badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
            {Math.round((availableShares / totalShares) * 100)}% Available
          </div>

          {/* Favorite button */}
          <button 
            className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-foreground/70 hover:text-primary transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Price tag */}
        <div className="absolute -bottom-5 left-4 bg-primary text-white font-bold px-4 py-2 rounded-lg shadow-lg">
          {formatCurrency(price)}
        </div>
      </div>

      <div className="p-6 pt-8">
        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-3 leading-tight line-clamp-2">{title}</h3>

        {/* Investment details */}
        <div className="grid grid-cols-2 gap-4 mb-5 mt-6">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Share Price</p>
            <p className="font-semibold">{formatCurrency(sharePrice)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Est. ROI</p>
            <p className="font-semibold text-primary">{roi}%</p>
          </div>
        </div>

        {/* Action button */}
        <Link 
          to={`/property/${id}`}
          className="flex items-center justify-between w-full mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Details 
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
