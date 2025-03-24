
import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-12 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" 
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      
      <div className="container mx-auto relative z-10 mt-10">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary text-sm font-medium">Revolutionizing Real Estate Investment</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Invest in Premium Properties<br />
            <span className="text-primary">One Fragment at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Access exclusive real estate opportunities through fractional ownership. 
            Own shares of high-value properties and build your portfolio with minimal capital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <AnimatedButton 
              size="lg" 
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              <Link to="/properties">Browse Properties</Link>
            </AnimatedButton>
            
            <AnimatedButton 
              variant="outline" 
              size="lg"
              icon={<Search className="h-5 w-5" />}
              iconPosition="left" 
            >
              <Link to="/how-it-works">How It Works</Link>
            </AnimatedButton>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">250+</p>
              <p className="text-sm text-muted-foreground mt-1">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">12K+</p>
              <p className="text-sm text-muted-foreground mt-1">Investors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">$30M+</p>
              <p className="text-sm text-muted-foreground mt-1">Investments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
