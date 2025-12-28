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
  Users,
  FileText,
  Map,
  Lock,
  ChevronLeft,
  Star,
  Award,
  TrendingUp,
  Briefcase,
  Quote
} from 'lucide-react';

// --- CONFIGURATION ---
// 1. Log in to https://formspree.io/
// 2. Create a new form
// 3. Paste your unique 8-digit Form ID here (e.g., "xrgopqkz")
const FORMSPREE_ID = "mkonzjez"; 

const BOOKING_LINK = "https://calendar.app.google/C5ZoCiQSXN2TaN3f9";

// --- Sub-Page Components ---

const Portfolio = ({ onBack, openBooking }) => {
  // PLACEHOLDER REVIEWS - REPLACE THESE WITH YOUR REAL FIVERR TEXT
  const reviews = [
    {
      id: 1,
      client: "Sarah Jenkins, CEO",
      service: "Office 365 Migration",
      text: "Absolutely phenomenal work. Migrated our entire agency (50+ users) from GoDaddy to Microsoft 365 over the weekend with ZERO downtime. Communication was top-tier.",
      stars: 5
    },
    {
      id: 2,
      client: "TechFlow Solutions",
      service: "Google Workspace Security",
      text: "We were having major spam issues. CloudArtificial audited our DNS, set up SPF/DKIM properly, and secured our admin accounts. Highly recommended expert.",
      stars: 5
    },
    {
      id: 3,
      client: "Marcus D.",
      service: "IT Support / Helpdesk",
      text: "Fastest response time I've seen on Fiverr. Fixed a critical SharePoint permission error that was halting our production in 20 minutes. Will hire again.",
      stars: 5
    },
    {
      id: 4,
      client: "Global Logistics Co.",
      service: "Azure Administration",
      text: "A true professional. Managed our complex Azure AD connect setup and streamlined our user onboarding process. The scripting skills are impressive.",
      stars: 5
    }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl min-h-screen">
      <button onClick={onBack} className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
      </button>
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6 backdrop-blur-sm">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">Top Rated Expert</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Proven Results.</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We don't just promise uptime; we engineer it. See how we've helped businesses globally secure their infrastructure and scale without friction.
        </p>
      </div>

      {/* Trust Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
          <div className="text-3xl font-bold text-white mb-2">500+</div>
          <div className="text-sm text-slate-400">5-Star Reviews</div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
          <div className="text-3xl font-bold text-white mb-2">10k+</div>
          <div className="text-sm text-slate-400">Users Managed</div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
          <div className="text-3xl font-bold text-white mb-2">99.9%</div>
          <div className="text-sm text-slate-400">Uptime Maintained</div>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
          <div className="text-3xl font-bold text-white mb-2">24/7</div>
          <div className="text-sm text-slate-400">Support Coverage</div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
              <div>
                <div className="font-bold text-white">{review.client}</div>
                <div className="text-xs text-cyan-400 uppercase tracking-wide">{review.service}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-slate-500 hover:text-white text-sm underline transition-colors">View all 500+ reviews on Fiverr</a>
        </div>
      </div>

      {/* Case Studies */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Featured Case Studies</h2>
        
        {/* Case Study 1 */}
        <div className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all">
          <div className="absolute top-8 right-8 p-3 rounded-full bg-blue-500/10 text-blue-400">
            <Cloud className="w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-sm text-blue-400 font-bold mb-2 uppercase tracking-wider">Migration & Architecture</div>
              <h3 className="text-2xl font-bold text-white mb-4">Zero-Downtime Office 365 Migration</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** A logistics company with 65 employees was struggling with legacy email hosting (GoDaddy), resulting in lost emails and sync issues. They feared data loss during a switch.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Solution:** We architected a phased migration plan using IMAP sync tools. We configured Exchange Online, set up custom domains, and migrated 450GB of data over a weekend.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Result:</span> 100% Data Integrity retained.</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Impact:</span> Email reliability improved to 100%.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-all">
          <div className="absolute top-8 right-8 p-3 rounded-full bg-purple-500/10 text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-sm text-purple-400 font-bold mb-2 uppercase tracking-wider">Security & Compliance</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Security Hardening</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** A growing financial startup needed to meet strict compliance standards. Their Google Workspace was default-configured, leaving them vulnerable to phishing and unauthorized device access.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Solution:** We enforced Context-Aware Access levels, mandated Hardware Keys (2FA) for admin accounts, and set up DLP (Data Loss Prevention) rules to stop sensitive file sharing.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Result:</span> Passed external security audit with 0 critical flags.</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Impact:</span> Client secured $2M funding round.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all">
          <div className="absolute top-8 right-8 p-3 rounded-full bg-cyan-500/10 text-cyan-400">
            <Briefcase className="w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-sm text-cyan-400 font-bold mb-2 uppercase tracking-wider">Automation & Helpdesk</div>
              <h3 className="text-2xl font-bold text-white mb-4">Remote Team Onboarding Automation</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** A marketing agency was spending 4 hours manually setting up accounts for every new hire, leading to delays and permission errors.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Solution:** We built a custom PowerShell & API script. Now, filling one form automatically creates their O365 User, assigns licenses, adds them to Teams channels, and sends a welcome email.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Result:</span> Onboarding time reduced from 4 hours to 5 minutes.</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Impact:</span> Saved HR 20+ hours per month.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center p-10 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to be our next success story?</h3>
        <button 
          onClick={openBooking}
          className="px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
        >
          Book Your Free Audit
        </button>
      </div>
    </div>
  );
};

const PrivacyPolicy = ({ onBack }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
    <button onClick={onBack} className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
    </button>
    <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
    <div className="space-y-6 text-slate-300 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
      <p className="text-sm text-slate-500">Last Updated: November 2025</p>
      
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
        <p>At CloudArtificial, we collect information necessary to provide IT managed services. This includes:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Contact information (Name, Email, Phone Number).</li>
          <li>Technical details regarding your IT infrastructure (for audit and support purposes).</li>
          <li>Login credentials (stored securely via encrypted vaults) for authorized administration.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Data</h2>
        <p>We use your data solely for:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Provisioning and managing Microsoft 365 and Google Workspace accounts.</li>
          <li>Monitoring system health and security threats.</li>
          <li>Billing and account management.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Data Security</h2>
        <p>We employ enterprise-grade encryption for all stored data. We do not sell your personal or business data to third parties. Access to your systems is strictly limited to authorized support personnel.</p>
      </section>
    </div>
  </div>
);

const TermsOfService = ({ onBack }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
    <button onClick={onBack} className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
    </button>
    <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
    <div className="space-y-6 text-slate-300 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
      <p className="text-sm text-slate-500">Last Updated: November 2025</p>
      
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Service Agreement</h2>
        <p>By engaging CloudArtificial for IT support services, you agree to allow our technicians remote access to your designated systems for maintenance and troubleshooting purposes.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. Service Level Objectives</h2>
        <p>While we strive for 100% uptime, specific response times and availability guarantees are defined in your individual Service Level Agreement (SLA). We are not liable for outages caused by third-party providers (e.g., Microsoft, Google, ISP).</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Payment & Billing</h2>
        <p>Managed services are billed monthly in advance. Project-based work (audits, migrations) is billed as per the agreed quote. Failure to pay may result in suspension of support services.</p>
      </section>
    </div>
  </div>
);

const Sitemap = ({ onBack, onNavigate }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl min-h-screen">
    <button onClick={onBack} className="flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
    </button>
    <h1 className="text-4xl font-bold mb-8 text-white">Sitemap</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-500" /> Main Pages
        </h2>
        <ul className="space-y-4">
          <li><button onClick={() => onNavigate('home', 'hero')} className="text-slate-300 hover:text-cyan-400">Home</button></li>
          <li><button onClick={() => onNavigate('home', 'services')} className="text-slate-300 hover:text-cyan-400">Services</button></li>
          <li><button onClick={() => onNavigate('home', 'ai-edge')} className="text-slate-300 hover:text-cyan-400">AI Advantage</button></li>
          <li><button onClick={() => onNavigate('portfolio')} className="text-slate-300 hover:text-cyan-400">Portfolio & Case Studies</button></li>
          <li><button onClick={() => onNavigate('home', 'process')} className="text-slate-300 hover:text-cyan-400">Our Process</button></li>
          <li><button onClick={() => onNavigate('home', 'contact')} className="text-slate-300 hover:text-cyan-400">Contact / Booking</button></li>
        </ul>
      </div>
      
      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-purple-500" /> Legal & Info
        </h2>
        <ul className="space-y-4">
          <li><button onClick={() => onNavigate('privacy')} className="text-slate-300 hover:text-cyan-400">Privacy Policy</button></li>
          <li><button onClick={() => onNavigate('terms')} className="text-slate-300 hover:text-cyan-400">Terms of Service</button></li>
        </ul>
      </div>
    </div>
  </div>
);

// --- Main Application ---

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view, sectionId = null) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    
    // Allow React to render the view before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (view === 'home' && sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 10);
  };

  const openBooking = () => {
    window.open(BOOKING_LINK, '_blank');
  };

  // --- NEW FORM SUBMISSION HANDLER ---
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success! Redirect directly to Google Calendar
        window.location.href = BOOKING_LINK;
      } else {
        alert("There was a problem sending your message. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Error connecting to form service. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden flex flex-col justify-between">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home', 'hero')}>
            {/* Logo Image - Responsive Size */}
            <img 
              src="CloudArtificial.png" 
              alt="CloudArtificial Logo" 
              className="h-12 md:h-24 w-auto object-contain transition-transform hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('home', 'services')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Services</button>
            <button onClick={() => navigateTo('home', 'ai-edge')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">AI Advantage</button>
            <button onClick={() => navigateTo('portfolio')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Portfolio</button>
            <button 
              onClick={openBooking}
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
            <button onClick={() => navigateTo('home', 'services')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Services</button>
            <button onClick={() => navigateTo('home', 'ai-edge')} className="text-left text-slate-300 hover:text-cyan-400 py-2">AI Advantage</button>
            <button onClick={() => navigateTo('portfolio')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Portfolio</button>
            <button onClick={openBooking} className="text-center w-full py-3 rounded bg-cyan-600 text-white font-bold">Book Free Audit</button>
          </div>
        )}
      </nav>

      {/* --- Main Content Switcher --- */}
      <main className="flex-grow">
        {currentView === 'privacy' && <PrivacyPolicy onBack={() => navigateTo('home')} />}
        {currentView === 'terms' && <TermsOfService onBack={() => navigateTo('home')} />}
        {currentView === 'sitemap' && <Sitemap onBack={() => navigateTo('home')} onNavigate={navigateTo} />}
        {currentView === 'portfolio' && <Portfolio onBack={() => navigateTo('home')} openBooking={openBooking} />}
        
        {currentView === 'home' && (
          <>
            {/* --- Hero Section --- */}
            <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
                    onClick={openBooking}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    Start Your Transition <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => navigateTo('home', 'services')}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 font-medium hover:bg-slate-800 transition-all backdrop-blur-sm"
                  >
                    Explore Services
                  </button>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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
                  {/* Service Cards (Repeated for brevity, keeping existing structure) */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Database className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform"><Cloud className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Microsoft 365 Managed Support</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">Complete administration of your O365 tenant. We handle user provisioning, SharePoint permissions, and Teams governance.</p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> License Optimization</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> Exchange Online Management</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> Security Score Improvement</li>
                    </ul>
                  </div>

                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Server className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-orange-900/30 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform"><Users className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Google Workspace Admin</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">Streamline your collaborative workflow. We configure Gmail DNS (SPF/DKIM), manage Drive shared units, and secure your devices.</p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Seamless Migrations</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Group Policy Management</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Audit & Compliance Logs</li>
                    </ul>
                  </div>

                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform"><ShieldCheck className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Cybersecurity & Support</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">24/7 monitoring of your endpoints and cloud identities. We act as your remote IT helpdesk, solving issues before they disrupt your team.</p>
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
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm font-bold mb-6">THE ARTIFICIAL INTELLIGENCE EDGE</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">IT Support that <br /><span className="text-cyan-400">Thinks Ahead</span></h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">We don't just fix broken printers. CloudArtificial integrates AI-driven monitoring tools into your stack to predict failures, automate routine maintenance, and detect security anomalies instantly.</p>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700"><Zap className="w-6 h-6 text-yellow-400" /></div>
                        <div><h4 className="font-bold text-lg">Predictive Maintenance</h4><p className="text-slate-500 text-sm">AI algorithms analyze server logs to identify hardware risks before they cause downtime.</p></div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700"><Cpu className="w-6 h-6 text-cyan-400" /></div>
                        <div><h4 className="font-bold text-lg">Automated Onboarding</h4><p className="text-slate-500 text-sm">Smart scripts provision new user accounts across all your platforms in seconds, not hours.</p></div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700"><BarChart className="w-6 h-6 text-green-400" /></div>
                        <div><h4 className="font-bold text-lg">Cost Intelligence</h4><p className="text-slate-500 text-sm">We analyze your cloud usage patterns to identify unused licenses and wasted resources.</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
                      <div className="flex items-center gap-4 border-b border-slate-700 pb-4 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-500 ml-auto font-mono">cloud-monitor.exe</span>
                      </div>
                      <div className="font-mono text-sm space-y-3">
                        <div className="flex justify-between text-slate-400"><span>System Status:</span><span className="text-green-400">OPTIMAL</span></div>
                        <div className="flex justify-between text-slate-400"><span>Threat Level:</span><span className="text-cyan-400">LOW</span></div>
                        <div className="h-px bg-slate-800 my-2"></div>
                        <div className="text-slate-500"><span className="text-blue-500">➜</span> Analyzing Exchange Logs... <span className="text-green-500">Done (0.4s)</span></div>
                        <div className="text-slate-500"><span className="text-blue-500">➜</span> Detecting Login Anomalies... <span className="text-green-500">0 found</span></div>
                        <div className="text-slate-500"><span className="text-blue-500">➜</span> Optimizing SharePoint Storage... <span className="text-yellow-500">Archived 24GB</span></div>
                        <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-800/50 rounded text-cyan-200"><Zap className="w-4 h-4 inline mr-2" /> AI Recommendation: 3 Unused O365 Licenses detected. Remove to save $72/mo.</div>
                      </div>
                    </div>
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
                    <h3 className="text-xl font-bold mb-2">Audit</h3><p className="text-slate-400 text-sm">We scan your current infrastructure for security gaps and inefficiencies.</p>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">2</div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                    <h3 className="text-xl font-bold mb-2">Migrate</h3><p className="text-slate-400 text-sm">Seamless transition to the cloud with zero data loss or downtime.</p>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">3</div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                    <h3 className="text-xl font-bold mb-2">Secure</h3><p className="text-slate-400 text-sm">Implementation of MFA, conditional access, and threat protection policies.</p>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">4</div>
                    <h3 className="text-xl font-bold mb-2">Manage</h3><p className="text-slate-400 text-sm">Ongoing AI-assisted support and monthly optimization reports.</p>
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
                      <p className="text-slate-300 mb-8">Book a free 15-minute consultation. We'll discuss your current setup, pain points, and how our managed services can save you time and money.</p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4"><div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Mail className="w-5 h-5"/></div><div><div className="text-xs text-slate-500 uppercase">Email Us</div><div className="font-medium text-white">hello@cloudartificial.com</div></div></div>
                        <div className="flex items-center gap-4"><div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Phone className="w-5 h-5"/></div><div><div className="text-xs text-slate-500 uppercase">Call Us</div><div className="font-medium text-white">+92 318 1620606</div></div></div>
                        <div className="flex items-center gap-4"><div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-cyan-400"><Globe className="w-5 h-5"/></div><div><div className="text-xs text-slate-500 uppercase">Global Service</div><div className="font-medium text-white">Remote Support Worldwide</div></div></div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                      {/* --- CUSTOM FORM HANDLER --- */}
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        {/* No hidden inputs needed for this method, handled in JS */}
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                          <input type="text" name="name" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">Work Email</label>
                          <input type="email" name="email" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">How can we help?</label>
                          <select name="service" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                            <option>Microsoft 365 Support</option>
                            <option>Google Workspace Support</option>
                            <option>General IT Inquiry</option>
                            <option>Cloud Migration</option>
                          </select>
                        </div>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded font-bold text-white hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
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
          </>
        )}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="CloudArtificial.png" 
              alt="CloudArtificial Logo" 
              className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105" 
            />
          </div>
          
          <div className="flex gap-8">
            <button onClick={() => navigateTo('privacy')} className="hover:text-cyan-400 transition-colors">Privacy Policy</button>
            <button onClick={() => navigateTo('terms')} className="hover:text-cyan-400 transition-colors">Terms of Service</button>
            <button onClick={() => navigateTo('sitemap')} className="hover:text-cyan-400 transition-colors">Sitemap</button>
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