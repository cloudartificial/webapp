import React, { useState, useEffect } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Zap, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe,
  Database,
  BarChart,
  Users
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Cloud className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              CloudArtificial
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Services</button>
            <button onClick={() => scrollToSection('ai-edge')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">AI Advantage</button>
            <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Process</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Book Free Audit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Services</button>
            <button onClick={() => scrollToSection('ai-edge')} className="text-left text-slate-300 hover:text-cyan-400 py-2">AI Advantage</button>
            <button onClick={() => scrollToSection('process')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Process</button>
            <button onClick={() => scrollToSection('contact')} className="text-center w-full py-3 rounded bg-cyan-600 text-white font-bold">Book Audit</button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract AI Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Available for New Contracts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Intelligent Managed IT <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              for the Modern Cloud
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We handle your Google Workspace and Microsoft 365 administration so you can focus on growth. 
            Secure, scalable, and powered by AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Start Your Transition <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 font-medium hover:bg-slate-800 transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Stack Logos (Text representation for SVG simplicity) */}
            <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">Google</span> Workspace</div>
            <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">Microsoft</span> 365</div>
            <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">Azure</span> Cloud</div>
            <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">AWS</span> Partner</div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Cloud Administration</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Stop fighting with settings and permissions. We provide enterprise-grade administration for the platforms your business runs on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Microsoft 365 Managed Support</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Complete administration of your O365 tenant. We handle user provisioning, SharePoint permissions, Teams governance, and security policy enforcement.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> License Optimization</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> Exchange Online Management</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> Security Score Improvement</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-900/30 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Google Workspace Admin</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Streamline your collaborative workflow. We configure Gmail DNS (SPF/DKIM), manage Drive shared units, and secure your devices.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Seamless Migrations</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Group Policy Management</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Audit & Compliance Logs</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity & Support</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                24/7 monitoring of your endpoints and cloud identities. We act as your remote IT helpdesk, solving issues before they disrupt your team.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500" /> Threat Detection</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500" /> Backup & Disaster Recovery</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500" /> Remote Helpdesk Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- AI Advantage Section --- */}
      <section id="ai-edge" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm font-bold mb-6">
                THE ARTIFICIAL INTELLIGENCE EDGE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                IT Support that <br />
                <span className="text-cyan-400">Thinks Ahead</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just fix broken printers. CloudArtificial integrates AI-driven monitoring tools into your stack to predict failures, automate routine maintenance, and detect security anomalies instantly.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Predictive Maintenance</h4>
                    <p className="text-slate-500 text-sm">AI algorithms analyze server logs to identify hardware risks before they cause downtime.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Automated Onboarding</h4>
                    <p className="text-slate-500 text-sm">Smart scripts provision new user accounts across all your platforms in seconds, not hours.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <BarChart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Cost Intelligence</h4>
                    <p className="text-slate-500 text-sm">We analyze your cloud usage patterns to identify unused licenses and wasted resources.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-500 ml-auto font-mono">cloud-monitor.exe</span>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="flex justify-between text-slate-400">
                    <span>System Status:</span>
                    <span className="text-green-400">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Threat Level:</span>
                    <span className="text-cyan-400">LOW</span>
                  </div>
                  <div className="h-px bg-slate-800 my-2"></div>
                  <div className="text-slate-500">
                    <span className="text-blue-500">➜</span> Analyzing Exchange Logs... <span className="text-green-500">Done (0.4s)</span>
                  </div>
                  <div className="text-slate-500">
                    <span className="text-blue-500">➜</span> Detecting Login Anomalies... <span className="text-green-500">0 found</span>
                  </div>
                  <div className="text-slate-500">
                    <span className="text-blue-500">➜</span> Optimizing SharePoint Storage... <span className="text-yellow-500">Archived 24GB</span>
                  </div>
                  <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-800/50 rounded text-cyan-200">
                    <Zap className="w-4 h-4 inline mr-2" />
                    AI Recommendation: 3 Unused O365 Licenses detected. Remove to save $72/mo.
                  </div>
                </div>
              </div>
              
              {/* Background glows behind the code card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process / Why Us --- */}
      <section id="process" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">The CloudArtificial Protocol</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10 relative">1</div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
              <h3 className="text-xl font-bold mb-2">Audit</h3>
              <p className="text-slate-400 text-sm">We scan your current infrastructure for security gaps and inefficiencies.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">2</div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
              <h3 className="text-xl font-bold mb-2">Migrate</h3>
              <p className="text-slate-400 text-sm">Seamless transition to the cloud with zero data loss or downtime.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">3</div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-slate-400 text-sm">Implementation of MFA, conditional access, and threat protection policies.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">4</div>
              <h3 className="text-xl font-bold mb-2">Manage</h3>
              <p className="text-slate-400 text-sm">Ongoing AI-assisted support and monthly optimization reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / Contact --- */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-950/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to upgrade your IT?</h2>
                <p className="text-slate-300 mb-8">
                  Book a free 15-minute consultation. We'll discuss your current setup, pain points, and how our managed services can save you time and money.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Mail className="w-5 h-5"/></div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Email Us</div>
                      <div className="font-medium text-white">hello@cloudartificial.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Phone className="w-5 h-5"/></div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Call Us</div>
                      <div className="font-medium text-white">+92 318 1620606</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Globe className="w-5 h-5"/></div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Global Service</div>
                      <div className="font-medium text-white">Remote Support Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Work Email</label>
                    <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">How can we help?</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                      <option>Microsoft 365 Support</option>
                      <option>Google Workspace Support</option>
                      <option>General IT Inquiry</option>
                      <option>Cloud Migration</option>
                    </select>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded font-bold text-white hover:opacity-90 transition-opacity shadow-lg">
                    Book Free Consultation
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    No credit card required. Zero obligation.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cloud className="text-cyan-500 w-5 h-5" />
            <span className="text-lg font-bold text-white">CloudArtificial</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
          
          <div>
            &copy; {new Date().getFullYear()} CloudArtificial. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;