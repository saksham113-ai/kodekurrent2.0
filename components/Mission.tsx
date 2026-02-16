
import React from 'react';
import { Lightbulb, Users, Award, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

interface MissionCardProps {
  icon: any;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ icon: Icon, title, description, iconBg, iconColor }) => (
  <div className="bg-ide-header/40 border border-ide-border/60 p-8 rounded-2xl group hover:bg-ide-header/60 hover:border-ide-function/40 transition-all duration-300 backdrop-blur-sm">
    <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={24} className={iconColor} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-tight">{title}</h3>
    <p className="text-ide-muted text-sm leading-relaxed font-sans">{description}</p>
  </div>
);

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                Our <span className="text-ide-function italic">Mission</span>
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-ide-function to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-ide-text text-lg md:text-xl leading-relaxed font-light">
              To foster a culture of <span className="text-white font-bold">technical excellence</span> and 
              <span className="text-white font-bold italic"> professional growth</span>. 
              We provide the resources, mentorship, and platform for students to transform theoretical 
              knowledge into <span className="text-ide-accent">impactful reality</span>.
            </p>

            <div className="pt-4 flex items-center gap-3 text-ide-muted font-mono text-xs opacity-50 uppercase tracking-widest">
              <div className="w-8 h-px bg-ide-border"></div>
              <span>vision_statement_v1.0</span>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <MissionCard 
              icon={Lightbulb} 
              title="Innovation" 
              description="Pushing boundaries with cutting-edge solutions." 
              iconBg="bg-amber-950/40 border border-amber-500/20"
              iconColor="text-amber-500"
            />
            <MissionCard 
              icon={Users} 
              title="Collaboration" 
              description="Building a community of shared knowledge." 
              iconBg="bg-blue-950/40 border border-blue-500/20"
              iconColor="text-blue-500"
            />
            <MissionCard 
              icon={Award} 
              title="Excellence" 
              description="Striving for the highest technical standards." 
              iconBg="bg-purple-950/40 border border-purple-500/20"
              iconColor="text-purple-500"
            />
            <MissionCard 
              icon={TrendingUp} 
              title="Leadership" 
              description="Forging the next generation of tech leaders." 
              iconBg="bg-red-950/40 border border-red-500/20"
              iconColor="text-red-500"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};
