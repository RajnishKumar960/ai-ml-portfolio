import Hero from "./components/ui/animated-shader-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { SplineScene } from "./components/ui/spline";
import { Spotlight } from "./components/ui/spotlight";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { SparklesCore } from "./components/ui/sparkles";
import { ThemeProvider } from "./components/ui/theme-provider";
import CinematicThemeSwitcher from "./components/ui/cinematic-theme-switcher";
import { SpaceBackground } from "./components/ui/space-background";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  ExternalLink,
  Cpu,
  Database,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  BookOpen,
  Music,
  Lightbulb,
  Brain
} from "lucide-react";

function AppContent() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500">
      {/* Floating Theme Switcher */}
      <div className="fixed top-8 right-8 z-50">
        <CinematicThemeSwitcher />
      </div>

      {/* Hero Section */}
      <Hero
        trustBadge={{
          text: "Open to new opportunities",
          icons: ["✨"]
        }}
        headline={{
          line1: "Rajnish Kumar",
          line2: "Automation Engineer"
        }}
        subtitle="An Automation Engineer skilled in Python, Machine Learning, LLM Integration, and Workflow Automation, with hands-on experience in Qloron Aperko and Make.com. Strong understanding of data preprocessing, prompt engineering, REST APIs, and cloud deployment (VPS, GCP)."
        buttons={{
          primary: {
            text: "View My Work",
            onClick: () => scrollToSection('projects')
          },
          secondary: {
            text: "Get In Touch",
            onClick: () => scrollToSection('contact')
          }
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Information Bar */}
        <Card className="mb-12 shadow-lg dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a href="tel:+919608725516" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 9608725516</span>
              </a>
              <a href="mailto:rajnishkumar56@gmail.com" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>rajnishkumar56@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/rajnish-tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/rajnish-tech</span>
              </a>
              <a href="https://github.com/rajnish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Github className="w-4 h-4" />
                <span>github.com/rajnish</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Interactive 3D Tech Showcase */}
        <div className="mb-12 relative p-1 rounded-2xl">
          <GlowingEffect
            spread={60}
            glow={true}
            disabled={false}
            proximity={100}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <Card className="h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black relative overflow-hidden border-orange-500/20 dark:border-orange-400/30 transition-all duration-500">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            {/* Sparkles Background Effect */}
            <div className="absolute inset-0 w-full h-full">
              <SparklesCore
                id="tech-showcase-particles"
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={80}
                className="w-full h-full"
                particleColor="#ff8c00"
                speed={0.5}
              />
            </div>
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-orange-400" />
                <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
                  Interactive Technology
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                Building the Future with AI & Automation
              </h3>
              <p className="text-neutral-300 max-w-lg leading-relaxed">
                Combining cutting-edge AI technologies with workflow automation to create intelligent solutions. 
                From LLM integration to complex API orchestration, I transform business processes into seamless, 
                automated experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-orange-500/20 text-orange-200 border-orange-400/30 hover:bg-orange-500/30">
                  <Cpu className="w-3 h-3 mr-1" />
                  AI/ML
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Automation
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30">
                  <Database className="w-3 h-3 mr-1" />
                  Integration
                </Badge>
              </div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
          </Card>
        </div>

        {/* Summary Section */}
        <Card className="mb-12 shadow-lg border-t-4 border-t-orange-500 dark:border-t-orange-400 dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-500">
              An Automation Engineer skilled in Python, Machine Learning, LLM Integration, and Workflow Automation, with hands-on experience in Qloron Aperko and Make.com. Strong understanding of data preprocessing, prompt engineering, REST APIs, and cloud deployment (VPS, GCP). Proven ability to deliver AI-driven solutions, integrate APIs, and automate complex business processes, streamlining workflows and enhancing customer experience.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12 shadow-lg relative overflow-hidden dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          {/* Sparkles Header Decoration */}
          <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
            <SparklesCore
              id="skills-particles"
              background="transparent"
              minSize={0.2}
              maxSize={0.6}
              particleDensity={40}
              className="w-full h-full"
              particleColor="#ea580c"
              speed={0.2}
            />
          </div>
          
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-slate-800 dark:text-slate-200 transition-colors duration-500">AI & LLMs</h4>
                <div className="flex flex-wrap gap-2">
                  {['GPT-4', 'GPT-3.5', 'Claude 3', 'Gemini 1.5', 'Mistral 7B', 'LLAMA 3', 'Hugging Face Transformers'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="dark:bg-slate-600" />
              
              <div>
                <h4 className="mb-3 text-slate-800 dark:text-slate-200 transition-colors duration-500">Programming & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'Pandas', 'scikit-learn', 'Git', 'GitHub'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="dark:bg-slate-600" />
              
              <div>
                <h4 className="mb-3 text-slate-800 dark:text-slate-200 transition-colors duration-500">Automation & Workflow</h4>
                <div className="flex flex-wrap gap-2">
                  {['Make.com', 'Zapier', 'Qloron Aperko', 'n8n', 'Google Sheets', 'Gmail'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="dark:bg-slate-600" />
              
              <div>
                <h4 className="mb-3 text-slate-800 dark:text-slate-200 transition-colors duration-500">Automation Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {['n8n', 'Zapier', 'REST APIs', 'Webhooks', 'SendGrid'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="dark:bg-slate-600" />
              
              <div>
                <h4 className="mb-3 text-slate-800 dark:text-slate-200 transition-colors duration-500">Prompt Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  {['LangChain', 'Prompt Optimization', 'Tokenizer'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-12 shadow-lg dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-4">
              <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Master's of Computer Application (MCA)</h4>
              {/* <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">Mahatma Gandhi Kashi Vidyapeeth, Mathal, Punjab</p> */}
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">Chandigarh University</p>
              <p className="text-slate-500 dark:text-slate-500 transition-colors duration-500">Graduation: June 2025</p>
              <p className="text-orange-600 dark:text-orange-400 mt-2 transition-colors duration-500">Relevant coursework: Software Engineering, Web Application Development, DevOps, Database Management Systems, Data Structures and Algorithms, Computer Networks, Operating Systems, Artificial Intelligence, IAB, Computer System Architecture, Data Analytics.</p>
            </div>
            
            <Separator className="dark:bg-slate-600" />
            
            <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-4">
              <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Bachelor of Computer Application(BCA) </h4>
              <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">Vinowa Bhawe University, Hazaribagh, Jharkhand</p>
              {/* <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">J.I College Kodarma, VBSU, Hazaribagh, Jharkhand</p> */}
              <p className="text-slate-500 dark:text-slate-500 transition-colors duration-500">Graduation: May 2022</p>
              <p className="text-orange-600 dark:text-orange-400 mt-2 transition-colors duration-500">Relevant coursework: Software Engineering, Web Application Development, Database Management Systems, Python Programming, Computer System Architecture.</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-12 shadow-lg dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Concentrix Experience */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Concentrix, Jaipur, Rajasthan</h4>
                  <p className="text-orange-600 dark:text-orange-400 transition-colors duration-500">Senior Advisor | Senior Advisor Analyst</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">Sep 2019 - Mar 2023</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mt-3 transition-colors duration-500">
                <li>Analyzed customer interactions and delivered data-driven, tailored solutions as a Senior Advisor at Concentrix</li>
                <li>Resolved 100+ customer inquiries daily, specializing in retention solutions with a 95% satisfaction rate</li>
                <li>Trained 50+ new employees in customer service best practices, technical troubleshooting, and company policies at Concentrix, Reach, and HGS India, improving overall team performance</li>
                <li>Delivered interactive training sessions, leveraging multimedia content and real-world examples to enhance team technical skills and enhance customer experience</li>
              </ul>
            </div>
            
            <Separator className="dark:bg-slate-600" />
            
            {/* Teleperformance Experience */}
            <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">ReqX Technologies Pvt. Ltd. </h4>
                  <p className="text-orange-600 dark:text-orange-400 transition-colors duration-500">Software Engineer</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">April 2023 - Present</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mt-3 transition-colors duration-500">
                <li> Developed and build software development lifecycle by debugging applications, improving code efficiency, and resolving system-level issues. </li>
                <li>Enhanced application performance and stability by implementing fixes, conducting root-cause analysis, and collaborating with engineering teams to deliver reliable and scalable solutions.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div id="projects">
          <Card className="mb-12 shadow-lg border-t-4 border-t-orange-500 dark:border-t-orange-400 dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-slate-100">
                <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                Academic Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI Consulting Website */}
              <div className="relative p-1 rounded-xl">
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 rounded-lg border border-orange-200 dark:border-orange-800 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">AI Consulting Website with n8n Automation Integration</h4>
                    <Badge className="bg-orange-600 dark:bg-orange-700 transition-colors duration-300">Nov 2025 - Oct 2025</Badge>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-500">
                    Developed a responsive AI consulting platform using HTML, CSS, JavaScript and Node.js with integrated chatbot capabilities. Built an automated AI lead generation workflow without external APIs using n8n, Google Sheets, and Gmail with workflow triggers and SendGrid integration for content management to enhance user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">HTML/CSS</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">JavaScript</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Node.js</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">n8n</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Google Sheets</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Gmail</Badge>
                  </div>
                </div>
              </div>

              {/* Personal AI Assistant - Link*/}
              <div className="relative p-1 rounded-xl">
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Personal AI Assistant Using OpenAI & LangChain to Jarvis (demo chatbot)</h4>
                    <Badge className="bg-blue-600 dark:bg-blue-700 transition-colors duration-300">Mar 2025 - Jun 2025</Badge>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-500">
                    Built a chatbot with tools for sending emails to Slack channels using LangChain and automated email communication. Deployed on Google Colab with workflow triggers and SendGrid integration for Agentic AI workflow automation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">OpenAI API</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">LangChain</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">SendGrid</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Google Colab</Badge>
                  </div>
                  <a 
                    href="https://ai-consulting-society-74a740c8.azaa4-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Site</span>
                  </a>
                </div>
              </div>

              {/* Personal AI Robo-Advisor */}
              <div className="relative p-1 rounded-xl">
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800 transition-colors duration-500">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Personal AI Robo-Advisor using LLAMA 3 Hugging Face Transformers Toolkit</h4>
                    <Badge className="bg-green-600 dark:bg-green-700 transition-colors duration-300">Aug 2024 - Sep 2024</Badge>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-500">
                    Built an automated AI lead generation workflow without external APIs using n8n, Google Sheets, and Gmail. Deployed on Google Colab with workflow triggers and SendGrid integration for Agentic AI workflow automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">LLAMA 3</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Hugging Face</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">n8n</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Google Sheets</Badge>
                    <Badge variant="outline" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">Gmail</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="mb-12 shadow-lg dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              Technical Skills & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 transition-colors duration-500">AI LLMs: GPT-4, GPT-3.5, Claude 3, Gemini 1.5, Mistral 7B, LLAMA 3, Hugging Face Transformers Toolkit</p>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors duration-500">Technologies: Python, OpenAI API, Anthropic API, Qloron Aperko, Machine Learning, Deep Learning</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Automation & Workflow: Make.com, Zapier, Qloron Aperko, n8n, Google Sheets, Gmail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Automation Integrations: n8n, Zapier, REST APIs, Webhooks, SendGrid</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Prompt Engineering: LangChain, prompt optimization, tokenizer</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Hobbies Section */}
        <Card className="mb-12 shadow-lg dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-slate-100">
              <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              Hobbies & Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Reading</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Love exploring new ideas and perspectives by reading various genres, performing at local bands and personal gatherings.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Music</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Enjoy performing in front of an audience, enhancing public speaking and stage presence skills; performing on local bands and personal gatherings.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Learning</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Continuous learning through various online platforms to stay up to date with trends.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Critical Thinking</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Love analyzing new ideas and perspectives by reading articles and blogs, enhancing personal growth, creativity, and critical thinking.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Problem-Solving</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Solve and troubleshoot through reading articles on blogs, enhancing decision-making capability, logical thinking.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-colors duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-slate-900 dark:text-slate-100 transition-colors duration-500">Communication</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Strong communication through various activities to solve real-world problems and improve decision-making.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div id="contact" className="relative">
          {/* Sparkles Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <SparklesCore
              id="contact-particles"
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={60}
              className="w-full h-full"
              particleColor="#f59e0b"
              speed={0.3}
            />
          </div>
          
          <Card className="shadow-lg border-t-4 border-t-orange-500 dark:border-t-orange-400 relative z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm dark:border-slate-700 transition-colors duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-slate-100">
                <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                Get In Touch
              </CardTitle>
              <CardDescription className="dark:text-slate-400 transition-colors duration-500">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  onClick={() => window.location.href = 'mailto:rajnishkumar56@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
                <Button 
                  variant="outline"
                  className="dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                  onClick={() => window.open('https://www.linkedin.com/in/rajnish-tech', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                  onClick={() => window.open('https://github.com/rajnish', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-600 dark:text-slate-400 pb-8 transition-colors duration-500">
          <p>© 2025 Rajnish Kumar. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SpaceBackground 
        particleCount={300} 
        particleColor="rgba(251, 146, 60, 0.6)"
      />
      <AppContent />
    </ThemeProvider>
  );
}
