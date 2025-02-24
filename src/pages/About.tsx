import React, { useEffect, useRef } from 'react';
import { Building2, Target, Users, Award, Rocket, BookOpen, Zap, Heart, Star } from 'lucide-react';

function About() {
  const teamMembers = [
    {
      name: "Alex Tremblay",
      role: "President",
      image: "https://res.cloudinary.com/djrxjqtxw/image/upload/v1740387688/IMG_7276_xwbixc.png",
      description: "As the lead marketer at TW Solutions Inc., Alex specializes in driving client acquisition, branding, and digital strategy to grow our business and deliver results for our clients."
    },
    {
      name: "Matthew Wolowicz",
      role: "Vice-President",
      image: "https://res.cloudinary.com/djrxjqtxw/image/upload/v1740387172/IMG_7547_1_ozjdto.png",
      description: "As the bookkeeper and accountant of TW Solutions Inc., Matthew ensures financial accuracy, handles client accounts, and optimizes financial processes for business success."
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Adapt & Thrive",
      description: "Markets evolve, and so do we. We continuously refine our strategies to stay ahead of trends, ensuring our clients remain competitive and future-proofed in their industries."
    },
    {
      icon: Heart,
      title: "Client-Centric Growth",
      description: "Your success is our priority. We work as an extension of your team, creating customized marketing strategies that align with your vision and drive real growth."
    },
    {
      icon: Star,
      title: "Uncompromising Excellence",
      description: "We believe in getting things done right the first time. From bookkeeping precision to high-performing ad campaigns, we deliver excellence in every detail."
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-accent to-accent-light" />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="h-20 w-20 text-accent animate-gentle-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-center">Our Story</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 text-center leading-relaxed">
              Success in business isn't about luck—it's about strategy, execution, and adaptability. TW Solutions was founded in 2024 to help businesses scale smarter and faster. We combine proven marketing techniques, automation, and financial insights to drive sustainable growth. Whether you're a startup looking for traction or an established business ready to expand, we're here to provide the tools, strategy, and expertise you need to reach new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At TW Solutions, we're driven by a singular purpose: to empower businesses 
                through innovative technology solutions. We believe that every organization 
                deserves access to enterprise-grade technology that can transform their operations 
                and drive growth.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experts combines deep technical knowledge with industry expertise 
                to deliver solutions that make a real difference. We're not just service 
                providers – we're partners in your success journey.
              </p>
              <div className="flex items-center space-x-4">
                <Rocket className="w-12 h-12 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">Forward Thinking</h3>
                  <p className="text-gray-400">Always ahead of the technology curve</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-accent text-6xl font-bold">TW</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg shadow-xl">
                <BookOpen className="w-12 h-12 text-accent mb-2" />
                <p className="font-semibold">10+ Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-primary">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Values
            <div className="h-1 w-24 bg-accent mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-primary/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-primary/90 border border-white/5"
              >
                <div className="mb-8 flex items-center justify-center">
                  <value.icon className="w-20 h-20 text-accent transform group-hover:scale-110 group-hover:text-accent-light transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  <span className="relative">
                    {value.title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg"
                      style={{
                        transform: "scale(1.01)", // Slight scale to prevent white edges
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;