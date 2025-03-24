
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { properties } from '@/lib/data';
import { 
  ArrowLeft, Share2, Heart, MapPin, Ruler, BedDouble, 
  Bath, Calendar, ChevronRight, ChevronLeft, ArrowRight
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/properties"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }
  
  const { 
    title, description, location, price, currency, totalShares, 
    availableShares, sharePrice, roi, images, area, areaUnit,
    features, vendor, createdAt
  } = property;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-6 mb-6">
          <Link 
            to="/properties"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </div>
        
        {/* Property Images */}
        <section className="container mx-auto px-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-muted">
            <img 
              src={images[currentImageIndex]} 
              alt={title}
              className="w-full h-full object-cover"
            />
            
            {/* Image Navigation */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-foreground hover:bg-white transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-foreground hover:bg-white transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm rounded-full px-3 py-1">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex mt-4 space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button 
                key={index} 
                className={`flex-shrink-0 h-20 w-32 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image} alt={`${title} - view ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </section>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Property Details */}
            <div className="lg:w-2/3">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{location}</span>
                  </div>
                  <h1 className="text-3xl font-bold">{title}</h1>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
                    aria-label="Share property"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  
                  <button 
                    className={`h-10 w-10 flex items-center justify-center rounded-full border transition-colors ${
                      liked ? 'bg-primary/10 border-primary text-primary' : 'border-border hover:bg-secondary'
                    }`}
                    onClick={() => setLiked(!liked)}
                    aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart className={`h-5 w-5 ${liked ? 'fill-primary' : ''}`} />
                  </button>
                </div>
              </div>
              
              {/* Property Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-secondary/30 rounded-xl mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Area</p>
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 mr-2 text-primary" />
                    <p className="font-semibold">{area} {areaUnit}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                  <div className="flex items-center">
                    <BedDouble className="h-5 w-5 mr-2 text-primary" />
                    <p className="font-semibold">5</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bathrooms</p>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2 text-primary" />
                    <p className="font-semibold">4</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Listed</p>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <p className="font-semibold">{formatDate(createdAt)}</p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">About this property</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>{description}</p>
                  <p>
                    This is a rare investment opportunity to own a fraction of this exceptional property.
                    With strong rental demand and projected appreciation, this property presents an excellent
                    addition to any investment portfolio.
                  </p>
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                  {/* Placeholder for map - in a real app, integrate Google Maps or similar */}
                  <div className="h-full w-full flex items-center justify-center bg-secondary">
                    <div className="text-center p-6">
                      <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <p className="font-medium mb-1">{location}</p>
                      <p className="text-sm text-muted-foreground">Map view would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vendor Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Listed by</h2>
                <div className="flex items-center p-6 border border-border rounded-xl">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img src={vendor.avatar} alt={vendor.name} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{vendor.name}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {vendor.rating} • {vendor.properties} properties
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investment Summary */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 self-start">
              <div className="bg-white rounded-xl border border-border shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Investment Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <p className="text-muted-foreground">Property Value</p>
                    <p className="font-semibold">{formatCurrency(price)}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <p className="text-muted-foreground">Share Price</p>
                    <p className="font-semibold">{formatCurrency(sharePrice)}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <p className="text-muted-foreground">Total Shares</p>
                    <p className="font-semibold">{totalShares}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <p className="text-muted-foreground">Available Shares</p>
                    <p className="font-semibold">{availableShares}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-muted-foreground">Est. Annual ROI</p>
                    <p className="font-semibold text-primary">{roi}%</p>
                  </div>
                </div>
                
                {/* Availability Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Availability</span>
                    <span className="font-medium">{Math.round((availableShares / totalShares) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${Math.round((availableShares / totalShares) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <AnimatedButton 
                    fullWidth
                    size="lg"
                    icon={<ArrowRight className="h-5 w-5" />}
                    iconPosition="right"
                  >
                    Invest Now
                  </AnimatedButton>
                  
                  <AnimatedButton 
                    variant="outline"
                    fullWidth
                  >
                    Contact Vendor
                  </AnimatedButton>
                </div>
                
                <p className="text-xs text-muted-foreground mt-6 text-center">
                  By investing, you agree to our Terms of Service and acknowledge the associated risks.
                </p>
              </div>
              
              {/* Similar Properties */}
              <div className="mt-6 bg-white rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Similar Properties</h3>
                <div className="space-y-4">
                  {properties
                    .filter(p => p.id !== id)
                    .slice(0, 2)
                    .map(p => (
                      <Link 
                        key={p.id} 
                        to={`/property/${p.id}`}
                        className="flex gap-3 group"
                      >
                        <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">{p.title}</h4>
                          <p className="text-xs text-muted-foreground">{p.location}</p>
                          <p className="text-xs font-semibold mt-1">{formatCurrency(p.price)}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Investment Process - CTA */}
        <section className="py-16 mt-16 px-6 bg-primary/10">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Investing?</h2>
              <p className="text-muted-foreground mb-8">
                Take the first step toward building your real estate portfolio with SpaceXec's 
                fractional ownership model. Invest with confidence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <AnimatedButton 
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Create an Account
                </AnimatedButton>
                
                <AnimatedButton 
                  variant="outline"
                  size="lg"
                >
                  Learn How It Works
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
