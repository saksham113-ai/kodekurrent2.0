import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Reveal } from './components/Reveal';
import { CodeBackground } from './components/CodeBackground';
import { RegistrationForm } from './components/RegistrationForm';
import { ThankYou } from './components/ThankYou';
import { Mission } from './components/Mission';
import { TRACKS, TIMELINE, SPONSORS, FAQS, REVIEWS, ORGANIZERS, GALLERY, PRIZES } from './constants';
import { 
  Terminal as TerminalIcon, 
  ChevronRight, 
  Hash, 
  Info,
  Layers,
  Calendar,
  HelpCircle,
  Zap,
  Code,
  ShieldCheck,
  Monitor,
  MessageSquare,
  Send,
  Mail,
  Users,
  User as UserIcon,
  Image as ImageIcon,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Gift,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon
} from 'lucide-react';

type View = 'landing' | 'register' | 'success';

const CodeLine: React.FC<{ num: number; children: React.ReactNode }> = ({ num, children }) => (
  <div className="flex group hover:bg-ide-active/50 transition-colors py-0.5">
    <span className="line-number font-mono text-xs">{num}</span>
    <div className="code-block flex-1 text-sm md:text-base">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [view, setView] = useState<View>('landing');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    const logs = [
      "> kernel_v2.5_init starting...",
      "> [0x00A1] Allocating memory: 8192MB",
      "> [0x0B2F] Initializing RGIPT.net protocols",
      "> [OK] Security Handshake: Verified (IEEE-Std)",
      "> [OK] Loading environment: IDE_DARK_DIMMED",
      "> [WARN] Logic error detected in 2024.patch",
      "> [OK] Applied fix: KKK26_ULTIMATE_EDITION",
      "> Initializing GUI render loop...",
      "> Welcome to Kode Kurrent '26"
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setBootLog(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    setView('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmissionSuccess = () => {
    setView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (booting) {
    return (
      <div className="fixed inset-0 bg-ide-bg flex flex-col items-center justify-center font-mono p-6 z-[2000]">
        <div className="w-full max-w-xl bg-ide-header border border-ide-border rounded-lg shadow-2xl p-6">
          <div className="flex items-center gap-2 mb-6 text-ide-muted border-b border-ide-border pb-3">
            <div className="flex gap-1.5 mr-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Booting: Core_System</span>
          </div>
          <div className="space-y-1.5 text-xs h-48 overflow-y-auto">
            {bootLog.map((log, i) => (
              <p key={i} className={`animate-fade-in ${log?.includes('WARN') ? 'text-ide-variable' : log?.includes('OK') ? 'text-ide-accent' : 'text-ide-muted'}`}>
                {log}
              </p>
            ))}
            <div className="w-2 h-4 bg-ide-text animate-cursor-blink inline-block mt-1"></div>
          </div>
          <div className="mt-8 h-1 w-full bg-ide-sidebar rounded-full overflow-hidden">
            <div className="h-full bg-ide-accent animate-grid-move" style={{ width: `${(bootLog.length / 9) * 100}%`, transition: 'width 0.3s ease' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ide-bg flex">
      <CodeBackground />
      <Navbar 
        onRegister={handleRegister} 
        onHome={handleBackToHome} 
        hideLinks={view !== 'landing'} 
        isExpanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(!sidebarExpanded)}
      />

      <main className={`flex-1 transition-all duration-300 ${sidebarExpanded ? 'lg:ml-76 md:ml-12' : 'ml-12'} pt-10 pb-48 overflow-x-hidden relative`}>
        {view === 'landing' && (
          <>
            {/* SECTION: HERO */}
            <section id="home" className="py-20 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-12 font-mono text-xs border-b border-ide-border/50 pb-2">
                  <Info size={14} />
                  <span className="flex items-center gap-1">
                    src / <span className="text-ide-keyword">preface</span> / 01_manifesto.md
                  </span>
                </div>
                
                <Reveal delay={200} className="animate-slide-up">
                  <div className="relative group mb-4">
                    <div className="absolute -inset-4 bg-gradient-to-r from-ide-keyword/20 to-ide-function/20 blur-3xl group-hover:opacity-100 transition duration-1000 opacity-40"></div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold relative flex flex-wrap gap-x-4 items-baseline leading-tight break-words">
                      <span className="text-ide-keyword glowing-text animate-pulse">#</span>
                      <span className="text-ide-text tracking-tighter bg-gradient-to-br from-white to-ide-muted bg-clip-text text-transparent">Kode Kurrent</span>
                      <span className="text-ide-function font-mono font-light italic text-2xl md:text-6xl animate-pulse-soft">'26</span>
                    </h1>
                  </div>

                  <div className="flex flex-col gap-2 mb-8 ml-1 md:ml-2 border-l-2 border-ide-border/50 pl-6 py-2">
                    <div className="flex items-center gap-3 font-mono text-sm group/meta">
                      <Users size={14} className="text-ide-keyword opacity-70 group-hover/meta:opacity-100" />
                      <span className="text-ide-muted uppercase tracking-widest text-[10px] font-bold">Organizer:</span>
                      <span className="text-ide-text">IEEE RGIPT Student Branch</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm group/meta">
                      <MapPinIcon size={14} className="text-ide-variable opacity-70 group-hover/meta:opacity-100" />
                      <span className="text-ide-muted uppercase tracking-widest text-[10px] font-bold">Location:</span>
                      <span className="text-ide-text">RGIPT Jais, Amethi, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm group/meta">
                      <CalendarIcon size={14} className="text-ide-accent opacity-70 group-hover/meta:opacity-100" />
                      <span className="text-ide-muted uppercase tracking-widest text-[10px] font-bold">Dates:</span>
                      <span className="text-ide-text">27th - 30th March, 2026</span>
                    </div>
                  </div>

                  <div className="space-y-0.5 mb-12 select-none opacity-80 border-t border-ide-border/20 pt-8">
                    <CodeLine num={1}><span className="syntax-comment">/**</span></CodeLine>
                    <CodeLine num={2}><span className="syntax-comment"> * @event Kode Kurrent 2026</span></CodeLine>
                    <CodeLine num={3}><span className="syntax-comment"> * @location RGIPT Main Campus</span></CodeLine>
                    <CodeLine num={4}><span className="syntax-comment"> * @status DEPLOYED_FOR_INNOVATION</span></CodeLine>
                    <CodeLine num={5}><span className="syntax-comment"> */</span></CodeLine>
                    <CodeLine num={6}><span className="syntax-keyword">const</span> <span className="syntax-var">vision</span> = <span className="syntax-string">"Redefining Reality Through Code"</span>;</CodeLine>
                  </div>
                </Reveal>

                <div className="max-w-4xl">
                  <Reveal delay={400} className="animate-slide-up">
                    <div className="font-mono text-xl md:text-3xl mb-12 text-ide-text font-medium leading-snug">
                      <span className="typewriter-container text-ide-variable">
                        Build. Debug. Deploy. Legacy.
                      </span>
                    </div>
                  </Reveal>

                  <div className="grid grid-cols-1 gap-10 items-start">
                    <div className="bg-ide-header/60 border border-ide-border/80 p-8 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <TerminalIcon size={120} />
                      </div>
                      
                      <div className="inline-flex items-center gap-3 bg-ide-accent/5 border border-ide-accent/20 px-4 py-2 rounded-full mb-8 group/status hover:bg-ide-accent/10 transition-colors">
                        <ShieldCheck className="text-ide-accent" size={16} />
                        <span className="text-[10px] text-ide-accent font-mono font-bold uppercase tracking-widest">AUTHORIZED_EVENT_V2</span>
                      </div>

                      <p className="text-ide-text text-lg md:text-xl leading-relaxed mb-10 font-light">
                        Join the second chapter of North India's most high-stakes hackathon. 
                        <span className="text-ide-string font-mono italic"> 72 hours </span> of intense execution, 
                        <span className="text-ide-function font-mono italic"> infinite </span> networking, 
                        and a prize pool that sets the bar.
                      </p>
                      <div className="flex flex-wrap gap-4 relative z-10">
                        <button 
                          onClick={handleRegister}
                          className="bg-ide-accent hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(63,185,80,0.3)] hover:scale-[1.03] active:scale-95"
                        >
                          <Zap size={20} fill="currentColor" />
                          Register: Entry_Point
                        </button>
                        <button className="bg-ide-sidebar/80 border border-ide-border text-ide-text px-8 py-4 rounded-xl font-bold hover:bg-ide-active transition-all flex items-center gap-3 group/btn">
                          <Code size={20} className="group-hover/btn:rotate-12 transition-transform" />
                          View_Logic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* SECTION: MISSION */}
            <Mission />

            {/* SECTION: TRACKS */}
            <section id="tracks" className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-y border-ide-border/30 bg-ide-sidebar/10 relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <Layers size={16} />
                  <span>src / modules / <span className="text-ide-variable">track_selector.ts</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex flex-wrap items-center gap-x-4">
                   <span className="syntax-keyword">export enum</span>
                   <span className="text-ide-text">Hackathon_Domains</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0 mb-20">
                  {TRACKS.map((track) => (
                    <div key={track.id} className="bg-ide-header/60 border border-ide-border/80 p-6 rounded-2xl group hover:border-ide-function/50 transition-all cursor-pointer hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-ide-function/10 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-ide-function/20">
                        {track.icon}
                      </div>
                      <h3 className="text-ide-string font-bold text-lg mb-3 flex items-center gap-2">
                        {track.title}
                      </h3>
                      <p className="text-ide-muted text-xs mb-8 leading-relaxed font-mono opacity-80">
                        {track.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-ide-border/20">
                        <a href={track.problemStatementUrl} className="text-[10px] font-mono uppercase text-ide-muted tracking-[0.2em] hover:text-ide-keyword flex items-center gap-2 transition-colors">
                          FETCH_DATA <ChevronRight size={10} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* SECTION: PRIZES */}
            <section id="prizes" className="py-24 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <span className="text-amber-400">#</span>
                  <span>config / <span className="text-ide-keyword">prizes.yaml</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex flex-wrap items-center gap-4">
                   <span className="text-ide-keyword">##</span>
                   <span className="text-ide-text">Total_Pool: <span className="text-ide-accent">₹2 Lakh</span></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PRIZES.map((prize, idx) => (
                    <div 
                      key={idx} 
                      className={`relative p-8 rounded-3xl border border-ide-border bg-ide-header/60 backdrop-blur-xl group hover:scale-[1.02] transition-all duration-500 ${prize.glow}`}
                    >
                      <div className="absolute top-6 right-8 text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12">
                        {prize.icon}
                      </div>
                      <div className="mb-10">
                        <div className="text-xs font-mono text-ide-muted uppercase tracking-[0.3em] mb-2">{prize.label}</div>
                        <h3 className={`text-2xl font-bold font-mono ${prize.color}`}>{prize.rank}</h3>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-bold text-ide-text tracking-tighter">{prize.amount}</span>
                      </div>
                      <div className="mt-8 pt-6 border-t border-ide-border/30">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-xs text-ide-muted font-mono">
                            <div className="w-1 h-1 rounded-full bg-ide-accent"></div>
                            Swag Kit Integrated
                          </li>
                          <li className="flex items-center gap-2 text-xs text-ide-muted font-mono">
                            <div className="w-1 h-1 rounded-full bg-ide-accent"></div>
                            Digital Certification
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-ide-sidebar/40 border border-ide-border/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                   <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-ide-accent/10 rounded-2xl flex items-center justify-center border border-ide-accent/20">
                       <Gift size={32} className="text-ide-accent" />
                     </div>
                     <div>
                       <h4 className="text-ide-text font-bold text-xl mb-1">Track Specific Awards & Goodies</h4>
                       <p className="text-ide-muted text-sm font-mono tracking-tight leading-snug">
                         Additional prizes for best beginner team, community choice, and track-specific innovations.
                       </p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3 bg-ide-header/60 px-6 py-4 rounded-xl border border-ide-border">
                     <span className="text-ide-muted font-mono text-xs">REMAINING_POOL:</span>
                     <span className="text-ide-variable font-bold text-xl">₹50,000</span>
                   </div>
                </div>
              </Reveal>
            </section>

            {/* SECTION: SCHEDULE */}
            <section id="schedule" className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-t border-ide-border/30 relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <Calendar size={16} />
                  <span>dist / <span className="text-ide-string">event_loop.json</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex flex-wrap items-center gap-4">
                   <span className="text-ide-keyword">##</span>
                   <span className="text-ide-text">System_Schedule</span>
                </h2>

                <div className="space-y-4">
                  {TIMELINE.map((event, i) => (
                    <CodeLine key={i} num={i + 1}>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-2">
                        <span className="text-ide-muted min-w-[120px] font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                          // {event.date.split(' ')[0]} {event.date.split(' ')[1]}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="syntax-keyword font-bold">await</span>
                          <span className="syntax-fn font-mono text-ide-function underline decoration-ide-function/30 underline-offset-4">{event.function}</span>
                          <span className="text-ide-text font-mono">(</span>
                          <span className="syntax-string">"{event.args.join(', ')}"</span>
                          <span className="text-ide-text font-mono">);</span>
                        </div>
                      </div>
                      <div className="pl-6 border-l-2 border-ide-border/30 mb-8">
                        <p className="text-sm text-ide-muted font-light italic leading-relaxed max-w-2xl mb-3">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-ide-accent/70 bg-ide-sidebar/30 py-1.5 px-3 rounded w-fit border border-ide-border/20 group-hover:border-ide-accent/30 transition-colors backdrop-blur-sm">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={10} className="text-ide-accent" />
                            <span>{event.date}</span>
                          </div>
                          <div className="w-px h-3 bg-ide-border/40"></div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={10} className="text-ide-accent" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </CodeLine>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* SECTION: REVIEWS */}
            <section id="reviews" className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-t border-ide-border/30 relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <MessageSquare size={16} />
                  <span>src / feedback / <span className="text-ide-variable">reviews.log</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex items-center gap-4">
                   <span className="text-ide-keyword">##</span>
                   <span className="text-ide-text">User_Feedback</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {REVIEWS.map((review, idx) => (
                    <div key={idx} className="bg-ide-header/40 border border-ide-border/60 p-6 rounded-2xl group backdrop-blur-sm hover:bg-ide-header/60 transition-colors">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-ide-active rounded-full flex items-center justify-center font-mono font-bold text-ide-variable border border-ide-border">
                          {review.initial}
                        </div>
                        <div>
                          <div className="text-ide-variable font-mono font-bold text-sm">{review.name}</div>
                          <div className="text-ide-string font-mono text-[10px] uppercase tracking-wider">{review.role}</div>
                        </div>
                      </div>
                      <p className="text-ide-text/90 text-sm leading-relaxed font-mono">
                        <span className="text-ide-muted italic">/* </span>
                        {review.content}
                        <span className="text-ide-muted italic"> */</span>
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* SECTION: GALLERY */}
            <section id="gallery" className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-t border-ide-border/30 relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <ImageIcon size={16} />
                  <span>src / snapshots / <span className="text-pink-400">legacy_2024.img</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex flex-wrap items-center gap-4">
                   <span className="text-ide-keyword">##</span>
                   <span className="text-ide-text">Snapshots_Legacy</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {GALLERY.map((img, idx) => (
                    <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-ide-border bg-ide-header backdrop-blur-sm">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-ide-sidebar border-b border-ide-border flex items-center px-2 gap-2 z-20">
                        <div className="w-2 h-2 rounded-full bg-pink-500/40"></div>
                        <span className="text-[9px] font-mono text-ide-muted">{img.tag}.jpg</span>
                      </div>
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ide-bg to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                         <div className="text-ide-text font-bold text-sm tracking-tight">{img.caption}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* SECTION: TEAM */}
            <section id="team" className="py-24 px-4 md:px-12 max-w-6xl mx-auto border-t border-ide-border/30 relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-4 font-mono text-sm">
                  <Users size={16} />
                  <span>src / team / <span className="text-ide-function">architects.ts</span></span>
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 font-mono flex flex-wrap items-center gap-4">
                   <span className="text-ide-keyword">##</span>
                   <span className="text-ide-text">Core_System_Architects</span>
                </h2>

                <div className="relative py-20 flex flex-col items-center">
                  <div className="flex justify-around w-full max-w-4xl mb-12">
                    {[ORGANIZERS[0], ORGANIZERS[1]].map((member, i) => (
                      <div key={i} className="flex flex-col items-center group">
                        <div className="cyber-ring mb-8 group-hover:scale-105 transition-transform">
                          <div className="w-32 h-32 md:w-40 md:h-40 bg-ide-sidebar rounded-full flex items-center justify-center border-4 border-ide-bg overflow-hidden backdrop-blur-md">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <UserIcon size={60} className="text-ide-muted" />
                            )}
                          </div>
                        </div>
                        <div className="team-banner px-8 py-3 text-center backdrop-blur-md">
                          <div className="text-ide-text font-bold text-sm font-mono">{member.name}</div>
                          <div className="text-ide-function text-[10px] font-mono tracking-widest">({member.role})</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-12">
                    <div className="flex flex-col items-center group">
                       <div className="cyber-ring mb-8 scale-110 group-hover:scale-125 transition-all shadow-[0_0_30px_rgba(210,168,255,0.1)]">
                        <div className="w-40 h-40 md:w-48 md:h-48 bg-ide-sidebar rounded-full flex items-center justify-center border-4 border-ide-bg overflow-hidden relative backdrop-blur-md">
                           {ORGANIZERS[2].image ? (
                              <img src={ORGANIZERS[2].image} alt={ORGANIZERS[2].name} className="w-full h-full object-cover" />
                            ) : (
                              <UserIcon size={80} className="text-ide-function" />
                            )}
                        </div>
                      </div>
                      <div className="team-banner px-12 py-4 text-center !border-ide-accent scale-110 backdrop-blur-md">
                        <div className="text-ide-text font-bold text-base font-mono">{ORGANIZERS[2].name}</div>
                        <div className="text-ide-accent text-xs font-mono font-bold tracking-[0.2em]">{ORGANIZERS[2].role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around w-full max-w-4xl mt-8">
                    {[ORGANIZERS[3], ORGANIZERS[4]].map((member, i) => (
                      <div key={i} className="flex flex-col items-center group">
                        <div className="cyber-ring mb-8 group-hover:scale-105 transition-transform">
                          <div className="w-32 h-32 md:w-40 md:h-40 bg-ide-sidebar rounded-full flex items-center justify-center border-4 border-ide-bg overflow-hidden backdrop-blur-md">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <UserIcon size={60} className="text-ide-muted" />
                            )}
                          </div>
                        </div>
                        <div className="team-banner px-8 py-3 text-center backdrop-blur-md">
                          <div className="text-ide-text font-bold text-sm font-mono">{member.name}</div>
                          <div className="text-ide-function text-[10px] font-mono tracking-widest">({member.role})</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* SECTION: CONTACT US (FORM) */}
            <section id="contact" className="py-32 px-4 md:px-12 max-w-4xl mx-auto relative z-10">
              <Reveal>
                <h2 className="text-4xl md:text-7xl font-bold font-mono text-center mb-24 tracking-tighter">
                  <span className="text-ide-text">./contact_</span><span className="text-ide-function glowing-text">us</span>
                </h2>

                <div className="space-y-12">
                  <div className="group">
                    <label className="flex items-center gap-3 text-sm font-mono font-bold text-blue-500 mb-4">
                      <span className="text-ide-keyword">{'>'}</span> NAME
                    </label>
                    <div className="relative">
                      <input type="text" className="w-full bg-ide-header/60 border border-ide-border/80 focus:border-blue-500 rounded p-6 font-mono text-ide-text focus:outline-none transition-all placeholder:text-ide-muted/20 backdrop-blur-md" placeholder="_" value={formState.name} onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))} />
                    </div>
                  </div>
                  <div className="group">
                    <label className="flex items-center gap-3 text-sm font-mono font-bold text-blue-500 mb-4">
                      <span className="text-ide-keyword">{'>'}</span> EMAIL
                    </label>
                    <div className="relative">
                      <input type="email" className="w-full bg-ide-header/60 border border-ide-border/80 focus:border-blue-500 rounded p-6 font-mono text-ide-text focus:outline-none transition-all placeholder:text-ide-muted/20 backdrop-blur-md" placeholder="_" value={formState.email} onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} />
                    </div>
                  </div>
                  <div className="group">
                    <label className="flex items-center gap-3 text-sm font-mono font-bold text-blue-500 mb-4">
                      <span className="text-ide-keyword">{'>'}</span> MESSAGE
                    </label>
                    <div className="relative">
                      <textarea rows={6} className="w-full bg-ide-header/60 border border-ide-border/80 focus:border-blue-500 rounded p-6 font-mono text-ide-text focus:outline-none transition-all resize-none placeholder:text-ide-muted/20 backdrop-blur-md" placeholder="_" value={formState.message} onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))} />
                    </div>
                  </div>
                  <div className="pt-6">
                    <button className="w-full md:w-auto bg-transparent border-2 border-ide-function hover:bg-ide-function text-ide-function hover:text-white px-12 py-5 rounded-xl font-mono font-bold transition-all flex items-center justify-center gap-4 group backdrop-blur-sm">
                      <span>POST /api/messages</span>
                      <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* SECTION: SPONSORS */}
            <section id="sponsors" className="py-24 overflow-hidden border-y border-ide-border/20 bg-ide-sidebar/5 relative z-10">
              <Reveal>
                <div className="px-4 md:px-12 max-w-6xl mx-auto mb-16">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-mono flex flex-wrap items-center gap-4">
                    <span className="text-ide-accent">#</span>
                    <span className="text-ide-text">Partners_Network</span>
                  </h2>
                </div>
                <div className="relative flex overflow-hidden group">
                  <div className="marquee-wrapper animate-marquee">
                    {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((s, idx) => (
                      <div key={idx} className="flex-shrink-0 px-8 md:px-16 flex items-center">
                        <span className="text-2xl md:text-5xl font-bold font-mono text-ide-text/60 hover:text-ide-accent transition-all cursor-default select-none tracking-tighter hover:opacity-100">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* SECTION: FAQ */}
            <section id="faq" className="py-24 px-4 md:px-12 max-w-6xl mx-auto bg-ide-header/30 rounded-[2rem] border border-ide-border/30 mb-20 backdrop-blur-md relative z-10">
              <Reveal>
                <div className="flex items-center gap-2 text-ide-muted mb-16 font-mono text-sm px-4">
                  <HelpCircle size={16} />
                  <span>docs / <span className="text-ide-keyword">troubleshooting.md</span></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="group relative pl-6 border-l-2 border-ide-border/40 hover:border-ide-keyword transition-colors">
                      <h4 className="text-ide-text font-bold mb-5 text-lg group-hover:text-ide-keyword">
                        <span className="text-ide-keyword font-mono mr-2 opacity-50">#</span>
                        {faq.q}
                      </h4>
                      <p className="text-ide-muted text-sm leading-relaxed opacity-90">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <footer className="bg-ide-header/80 border-t border-ide-border pt-20 pb-12 relative overflow-hidden backdrop-blur-xl z-20">
              <div className="px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-ide-text tracking-tighter">IEEE</h2>
                    <div className="space-y-1">
                      <p className="text-ide-muted font-bold text-lg">Student Branch</p>
                      <p className="text-ide-muted text-sm leading-tight max-w-[240px]">
                        Rajiv Gandhi Institute of Petroleum Technology
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="flex gap-3 mb-3">
                        {[Linkedin, Github, Twitter].map((Icon, idx) => (
                          <div key={idx} className="w-11 h-11 rounded-lg border border-ide-border bg-ide-bg/50 flex items-center justify-center hover:border-ide-function transition-all cursor-pointer group">
                            <Icon size={20} className="text-ide-muted group-hover:text-ide-function transition-colors" />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 items-center">
                        {[Instagram, Facebook].map((Icon, idx) => (
                          <div key={idx} className="w-11 h-11 rounded-lg border border-ide-border bg-ide-bg/50 flex items-center justify-center hover:border-ide-function transition-all cursor-pointer group">
                            <Icon size={20} className="text-ide-muted group-hover:text-ide-function transition-colors" />
                          </div>
                        ))}
                        <div className="ml-2">
                          <button className="bg-gradient-to-r from-ide-function to-blue-600 text-white text-xs font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                            Created by
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-ide-text">Quick Links</h4>
                    <ul className="space-y-4 font-mono text-sm text-ide-muted">
                      {['Home', 'About', 'Events', 'Team', 'Contact', 'Membership'].map(link => (
                        <li key={link}>
                          <a href="#" className="hover:text-ide-text transition-colors flex items-center gap-2">
                            <ChevronRight size={12} className="opacity-40" />
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-ide-text">Chapters</h4>
                    <ul className="space-y-4 font-mono text-sm text-ide-muted">
                      {['IEEE RAS', 'Computer Society', 'IEEE WIE', 'IEEE COMSOC'].map(chapter => (
                        <li key={chapter}>
                          <a href="#" className="hover:text-ide-text transition-colors flex items-center gap-2">
                            <Hash size={12} className="opacity-40" />
                            {chapter}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-ide-text">Contact Us</h4>
                    <ul className="space-y-6 text-sm text-ide-muted">
                      <li className="flex items-start gap-4">
                        <Mail size={18} className="text-ide-function mt-1 flex-shrink-0" />
                        <span className="font-mono">ieee_sb@rgipt.ac.in</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone size={18} className="text-ide-function mt-1 flex-shrink-0" />
                        <span className="font-mono">+91 7870304944</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <MessageCircle size={18} className="text-ide-function mt-1 flex-shrink-0" />
                        <span className="font-mono">WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <MapPin size={18} className="text-ide-function mt-1 flex-shrink-0" />
                        <span className="font-mono max-w-[200px]">RGIPT, Jais, Amethi, UP, India</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-12 border-t border-ide-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-xs text-ide-muted font-mono opacity-60">
                    © 2026 IEEE Student Branch RGIPT. All rights reserved.
                  </p>
                  <div className="flex gap-8 text-xs font-mono text-ide-muted opacity-80">
                    <a href="#" className="hover:text-ide-text transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-ide-text transition-colors">Terms of Service</a>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-[10px] text-ide-muted font-mono opacity-40 uppercase tracking-[0.4em]">
                    Powered by IEEE RGIPT Student Branch
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}

        {view === 'register' && (
          <section className="py-20 px-4 md:px-12 max-w-4xl mx-auto relative z-10">
            <RegistrationForm onCancel={handleBackToHome} onSuccess={handleSubmissionSuccess} />
          </section>
        )}

        {view === 'success' && (
          <section className="py-20 px-4 md:px-12 max-w-4xl mx-auto relative z-10">
            <ThankYou onBackToHome={handleBackToHome} />
          </section>
        )}
      </main>

      {/* Terminal View */}
      <div className={`fixed bottom-6 ${sidebarExpanded ? 'left-76' : 'left-16'} right-4 h-32 bg-ide-header/90 border border-ide-border/80 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[900] hidden xl:flex flex-col backdrop-blur-lg transition-all duration-300`}>
        <div className="bg-ide-sidebar/90 px-4 py-2 border-b border-ide-border flex items-center gap-4 text-[10px] text-ide-muted font-bold rounded-t-xl">
          <span className="text-ide-text border-b-2 border-ide-keyword pb-0.5 px-1 cursor-default">TERMINAL</span>
          <span className="hover:text-ide-text cursor-pointer opacity-60 hover:opacity-100 transition-colors">OUTPUT</span>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-ide-accent">
              <Monitor size={12} />
              <span>{view === 'landing' ? 'READY' : view === 'register' ? 'INPUT_MODE' : 'EXECUTION_COMPLETE'}</span>
            </div>
          </div>
        </div>
        <div className="p-4 font-mono text-[11px] overflow-y-auto flex-1 leading-relaxed custom-scrollbar">
          <div className="text-ide-accent font-bold">{"guest@rgipt:~$ ./status-check.sh"}</div>
          <div className="text-ide-text mt-1 opacity-80">{`> Current View: ${view.toUpperCase()}`}</div>
          <div className="text-ide-variable font-bold mt-1">{`> [NOTICE] Hackathon registration pipeline is active. No errors detected.`}</div>
          <div className="flex items-center gap-1 text-ide-text mt-1">
            <span className="text-ide-keyword font-bold">$</span>
            <div className="w-2 h-4 bg-ide-text animate-cursor-blink"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;