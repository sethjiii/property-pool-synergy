
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import { properties } from '@/lib/data';
import { ArrowRight, Building, CreditCard, Landmark, UsersRound } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Properties */}
        <FeaturedProperties properties={properties} />
        
        {/* How It Works Section */}
        <section className="py-20 px-6 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Fractional Ownership Works</h2>
              <p className="text-muted-foreground text-lg">
                SpaceXec makes investing in high-value real estate simple, transparent, and accessible
                through our innovative fragment ownership model.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <Building className="h-10 w-10" />,
                  title: "Properties Curated",
                  description: "We select premium properties with high growth potential and stable returns."
                },
                {
                  icon: <Landmark className="h-10 w-10" />,
                  title: "Fractional Shares",
                  description: "Properties are divided into fragments, allowing investment at your comfort level."
                },
                {
                  icon: <CreditCard className="h-10 w-10" />,
                  title: "Simple Investment",
                  description: "Purchase shares easily through our secure platform with transparent pricing."
                },
                {
                  icon: <UsersRound className="h-10 w-10" />,
                  title: "Earn Returns",
                  description: "Receive regular payouts from rental income and benefit from property appreciation."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-background transition-colors group hover-scale">
                  <div className="mb-6 text-primary p-4 bg-primary/10 rounded-xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <AnimatedButton 
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
                size="lg"
              >
                <Link to="/how-it-works">Learn More</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Fragment Ownership</h2>
                <p className="text-muted-foreground mb-8">
                  Traditional real estate investment comes with high barriers to entry. SpaceXec changes that by
                  making premium properties accessible to everyone through fractional ownership.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Lower Entry Barrier",
                      description: "Start investing with as little as $500, instead of making large down payments."
                    },
                    {
                      title: "Instant Diversification",
                      description: "Spread your investment across multiple properties to reduce risk."
                    },
                    {
                      title: "Hassle-Free Ownership",
                      description: "We handle property management, tenant relations, and maintenance."
                    },
                    {
                      title: "Liquid Investment",
                      description: "Sell your shares anytime through our platform, no long-term commitment."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <AnimatedButton 
                    icon={<ArrowRight className="h-5 w-5" />}
                    iconPosition="right"
                    size="lg"
                  >
                    <Link to="/properties">Start Investing</Link>
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Luxury apartment interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 glass-card rounded-xl p-6 max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Investor" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Investor since 2022</p>
                    </div>
                  </div>
                  <p className="text-sm italic">
                    "SpaceXec allowed me to invest in premium real estate I otherwise couldn't afford. The platform is intuitive and the returns have been excellent."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/10 rounded-t-[40px]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Join thousands of investors who are already building their real estate portfolio 
              with SpaceXec's fractional ownership platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                size="lg" 
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                <Link to="/sign-up">Create an Account</Link>
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right" 
              >
                <Link to="/properties">Explore Properties</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
