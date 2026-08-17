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
  Quote,
  Code,
  Megaphone,
  Webhook
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
      service: "HubSpot CRM Setup & SEO",
      text: "The CloudArtificial team transformed our sales process. They implemented HubSpot, migrated our messy data, and their SEO strategy bumped our organic traffic by 40% in two months.",
      stars: 5
    },
    {
      id: 3,
      client: "Marcus D.",
      service: "AI Web Development",
      text: "Hired them to rebuild our legacy web app. They integrated an AI-powered chatbot that handles 60% of our customer queries automatically. Brilliant dev team.",
      stars: 5
    },
    {
      id: 4,
      client: "Global Logistics Co.",
      service: "Azure Administration",
      text: "A true professional team. Managed our complex Azure AD connect setup and streamlined our user onboarding process. The scripting skills are impressive.",
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
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">Top Rated Agency Experts</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Proven Results.</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We don't just build systems; we engineer growth. See how we've helped businesses globally secure their infrastructure, build powerful apps, and scale marketing.
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
          <div className="text-3xl font-bold text-white mb-2">150+</div>
          <div className="text-sm text-slate-400">Projects Delivered</div>
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
          <a href="#" className="text-slate-500 hover:text-white text-sm underline transition-colors">View all 500+ reviews on our profiles</a>
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
              <div className="text-sm text-blue-400 font-bold mb-2 uppercase tracking-wider">IT Migration & Architecture</div>
              <h3 className="text-2xl font-bold text-white mb-4">Zero-Downtime Office 365 Migration</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** A logistics company with 65 employees was struggling with legacy email hosting, resulting in lost emails and sync issues. They feared data loss during a switch.
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

        {/* Case Study 2 - NEW CRM/MARKETING */}
        <div className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all">
          <div className="absolute top-8 right-8 p-3 rounded-full bg-orange-500/10 text-orange-400">
            <Megaphone className="w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-sm text-orange-400 font-bold mb-2 uppercase tracking-wider">HubSpot CRM & SEO Growth</div>
              <h3 className="text-2xl font-bold text-white mb-4">Scaling Sales for a B2B SaaS</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** A B2B software company was tracking leads in messy spreadsheets and had virtually zero organic inbound traffic.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Solution:** We implemented HubSpot CRM, mapping out custom deal pipelines and automated follow-up sequences. Simultaneously, our marketing team launched an aggressive SEO and Cold Email outreach campaign.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Result:</span> 250% increase in qualified pipeline value.</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Impact:</span> Reduced sales cycle by 14 days via automation.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition-all">
          <div className="absolute top-8 right-8 p-3 rounded-full bg-cyan-500/10 text-cyan-400">
            <Code className="w-6 h-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-sm text-cyan-400 font-bold mb-2 uppercase tracking-wider">AI App Development</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Client Portal with AI Support</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Challenge:** An accounting firm needed a secure portal for clients to upload documents, but their staff was overwhelmed with basic status questions.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                **The Solution:** We built a custom React web application with a secure file vault. We then integrated a custom-trained AI model to act as a 24/7 virtual assistant within the portal.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="font-bold text-white">Result:</span> AI resolved 65% of support tickets automatically.</li>
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
      <p className="text-sm text-slate-500">Last Updated: July 2026</p>
      
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
        <p>At CloudArtificial, we collect information necessary to provide IT, Marketing, and Development services. This includes:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Contact information (Name, Email, Phone Number).</li>
          <li>Technical details regarding your IT infrastructure and CRM systems.</li>
          <li>Login credentials (stored securely) for authorized administration and development.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Data</h2>
        <p>We use your data solely for:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Managing Cloud systems, CRM platforms (HubSpot/Salesforce), and software development.</li>
          <li>Executing digital marketing and outbound campaigns on your behalf.</li>
          <li>Billing and account management.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Data Security</h2>
        <p>We employ enterprise-grade encryption for all stored data. We do not sell your personal or business data to third parties.</p>
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
      <p className="text-sm text-slate-500">Last Updated: July 2026</p>
      
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Service Agreement</h2>
        <p>By engaging CloudArtificial, you agree to allow our team remote access to your designated systems for IT maintenance, software deployment, CRM administration, and marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. Service Level Objectives</h2>
        <p>Specific response times, development milestones, and marketing deliverables are defined in your individual Service Level Agreement (SLA) or Scope of Work (SOW).</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Payment & Billing</h2>
        <p>Managed services and marketing retainers are billed monthly in advance. Project-based work (app development, CRM setups) is billed as per the agreed milestone schedule.</p>
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
          <li><button onClick={() => onNavigate('home', 'services')} className="text-slate-300 hover:text-cyan-400">Services & Expertise</button></li>
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

  // Custom Form Submission to Formspree
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            {/* Logo Image */}
            <img 
              src="CloudArtificial.png" 
              alt="CloudArtificial Logo" 
              className="h-12 md:h-24 w-auto object-contain transition-transform hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('home', 'services')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Expertise</button>
            <button onClick={() => navigateTo('home', 'ai-edge')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">AI Advantage</button>
            <button onClick={() => navigateTo('portfolio')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Portfolio</button>
            <button 
              onClick={openBooking}
              className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Book Strategy Call
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
            <button onClick={() => navigateTo('home', 'services')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Expertise</button>
            <button onClick={() => navigateTo('home', 'ai-edge')} className="text-left text-slate-300 hover:text-cyan-400 py-2">AI Advantage</button>
            <button onClick={() => navigateTo('portfolio')} className="text-left text-slate-300 hover:text-cyan-400 py-2">Portfolio</button>
            <button onClick={openBooking} className="text-center w-full py-3 rounded bg-cyan-600 text-white font-bold">Book Strategy Call</button>
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
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Accepting New Agency Partnerships</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                  Intelligent Tech & Marketing <br className="hidden md:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    for the Modern Era
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                  We empower businesses with enterprise-grade IT support, custom AI-driven development, HubSpot CRM mastery, and data-backed digital marketing. 
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={openBooking}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    Scale Your Business <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => navigateTo('home', 'services')}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 font-medium hover:bg-slate-800 transition-all backdrop-blur-sm"
                  >
                    Explore Our Expertise
                  </button>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">HubSpot</span> Solutions</div>
                  <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">Microsoft</span> 365</div>
                  <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">Custom</span> AI Apps</div>
                  <div className="flex items-center gap-2"><span className="font-bold text-xl text-white">SEO &</span> Marketing</div>
                </div>
              </div>
            </section>

            {/* --- Services Section --- */}
            <section id="services" className="py-24 bg-slate-900/50 relative">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">A Full-Stack Digital Agency</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                    From fixing server downtime to launching aggressive outbound campaigns and building custom software, our multidisciplinary team handles it all.
                  </p>
                </div>

                {/* Grid changed to handle 6 items gracefully */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Service 1: IT & Cloud */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Server className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform"><Cloud className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Managed IT & Cloud Admin</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      Complete administration of your infrastructure. We handle Microsoft 365, Google Workspace, remote helpdesk support, and zero-downtime migrations.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500" /> Microsoft 365 & O365 Support</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-blue-500" /> Google Workspace Admin</li>
                    </ul>
                  </div>

                  {/* Service 2: Security */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform"><ShieldCheck className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Cybersecurity & Compliance</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      24/7 monitoring of your endpoints and cloud identities. We protect against phishing, enforce MFA policies, and ensure strict data compliance.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500" /> Threat Detection & DLP</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-purple-500" /> Disaster Recovery Setup</li>
                    </ul>
                  </div>

                  {/* Service 3: App Dev */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Code className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform"><Code className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">AI Web & App Development</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      We build stunning, responsive websites and powerful mobile applications integrated with the latest AI technologies to give your users a next-gen experience.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> React & Next.js Web Apps</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-cyan-500" /> Native Mobile App Dev</li>
                    </ul>
                  </div>

                  {/* Service 4: CRM */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Users className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-orange-900/30 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform"><Users className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">CRM Implementations</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      Stop losing leads in spreadsheets. We map your sales pipelines, configure HubSpot, Salesforce, or GoHighLevel, and train your sales team to close faster.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> HubSpot Master Configuration</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-orange-500" /> Salesforce & GHL Setup</li>
                    </ul>
                  </div>

                  {/* Service 5: Marketing */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Megaphone className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform"><TrendingUp className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Digital Marketing & SEO</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      We fill your CRM with qualified leads. Our data-driven approach combines aggressive cold outreach, strategic inbound SEO, and high-converting ad copy.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-pink-500" /> Cold Email & Outbound Sales</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-pink-500" /> Technical SEO Strategy</li>
                    </ul>
                  </div>

                  {/* Service 6: Automation */}
                  <div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Webhook className="w-24 h-24" /></div>
                    <div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform"><Webhook className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-4">Workflow Automation & API</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      We connect your siloed software. By integrating APIs and building Zapier/Make automations, we eliminate manual data entry and save your team hundreds of hours.
                    </p>
                    <ul className="space-y-2 mt-auto">
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-emerald-500" /> Zapier & Make Integrations</li>
                      <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle className="w-4 h-4 text-emerald-500" /> Custom API Development</li>
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
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm font-bold mb-6">
                      THE ARTIFICIAL INTELLIGENCE EDGE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Tech Support & Marketing that <br />
                      <span className="text-cyan-400">Thinks Ahead</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      We don't just fix broken printers or write generic ad copy. CloudArtificial integrates AI-driven tools into your entire stack—from predicting server failures to automating personalized outbound marketing at scale.
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
                          <h4 className="font-bold text-lg">AI App Integrations</h4>
                          <p className="text-slate-500 text-sm">We build custom applications that feature native ChatGPT/Claude integrations for your clients.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                          <BarChart className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Smart Marketing Scripts</h4>
                          <p className="text-slate-500 text-sm">We utilize AI to hyper-personalize your cold email sequences, increasing reply rates.</p>
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
                          <span>Marketing Pipeline:</span>
                          <span className="text-cyan-400">ACTIVE</span>
                        </div>
                        <div className="h-px bg-slate-800 my-2"></div>
                        <div className="text-slate-500">
                          <span className="text-blue-500">➜</span> Analyzing Exchange Logs... <span className="text-green-500">Done (0.4s)</span>
                        </div>
                        <div className="text-slate-500">
                          <span className="text-blue-500">➜</span> Executing Cold Email Sequence... <span className="text-green-500">240 Sent</span>
                        </div>
                        <div className="text-slate-500">
                          <span className="text-blue-500">➜</span> Syncing HubSpot -{'>'} Salesforce... <span className="text-yellow-500">24 Records</span>
                        </div>
                        <div className="mt-4 p-3 bg-cyan-900/20 border border-cyan-800/50 rounded text-cyan-200">
                          <Zap className="w-4 h-4 inline mr-2" />
                          AI Recommendation: Your new web app endpoint is live. Deploy marketing campaign to Segment A.
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
                    <h3 className="text-xl font-bold mb-2">Audit & Strategy</h3>
                    <p className="text-slate-400 text-sm">We analyze your IT gaps, marketing funnels, and CRM setup.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">2</div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                    <h3 className="text-xl font-bold mb-2">Build & Migrate</h3>
                    <p className="text-slate-400 text-sm">Deploying custom software, setting up HubSpot, or moving your servers.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">3</div>
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0"></div>
                    <h3 className="text-xl font-bold mb-2">Launch</h3>
                    <p className="text-slate-400 text-sm">Executing outbound marketing campaigns and turning on data automations.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center font-bold text-2xl text-cyan-400 mb-6 border border-slate-700 z-10 relative">4</div>
                    <h3 className="text-xl font-bold mb-2">Manage</h3>
                    <p className="text-slate-400 text-sm">Ongoing IT helpdesk, SEO monitoring, and CRM optimization.</p>
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
                      <h2 className="text-3xl font-bold mb-6">Ready to scale your business?</h2>
                      <p className="text-slate-300 mb-8">
                        Book a free 15-minute consultation. We'll discuss your current setup, pain points, and how our multi-disciplinary team can save you time and money.
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
                            <div className="text-xs text-slate-500 uppercase">Global Agency</div>
                            <div className="font-medium text-white">Remote Delivery Worldwide</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                          <input type="text" name="name" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">Work Email</label>
                          <input type="email" name="email" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" required />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-400 mb-1">What do you need help with?</label>
                          <select name="service" className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                            <option>HubSpot / CRM Implementation</option>
                            <option>AI Website / App Development</option>
                            <option>Digital Marketing & SEO</option>
                            <option>IT Support (Microsoft/Google)</option>
                            <option>Custom Automation / Integrations</option>
                          </select>
                        </div>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded font-bold text-white hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Book Strategy Call'}
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
            {/* Footer Logo */}
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