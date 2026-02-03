import React, { useState } from 'react';
import {
  Box, Typography, Button, Chip, Grid, Avatar, Card, CardContent,
  List, ListItem, ListItemText, Stack, Switch, FormControlLabel,
  IconButton, Divider, useTheme, Tooltip
} from '@mui/material';
import { Brightness4, Brightness7, Email, Phone, LinkedIn, GitHub, ArrowForward } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';
import VisibilityIcon from '@mui/icons-material/Visibility';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default dark for modern feel

  const theme = useTheme();
  const isDark = darkMode;

  const customTheme = {
    bg: isDark ? '#0f0f1a' : '#f8f9fc',
    text: isDark ? '#e2e8f0' : '#1e293b',
    card: isDark ? '#1e293b' : '#ffffff',
    primary: '#7c3aed',      // Vibrant purple
    primaryDark: '#5b21b6',
    accent: '#ec4899',
    gradient: isDark 
      ? 'linear-gradient(135deg, #1e293b 0%, #0f0f1a 100%)' 
      : 'linear-gradient(135deg, #f8f9fc 0%, #e2e8f0 100%)',
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Web Design', 'Figma', 'Adobe XD'],
    Backend: ['Node.js', 'Python'],
    Automation: ['Selenium', 'Python Automation', 'Excel Automation', 'VBScript', 'SAP Automation', 'Web Scraping', 'Pandas', 'OpenPyXL'],
    Databases: ['SQLite', 'MongoDB', 'SQL Server'],
    DevOps: ['Docker', 'Microservices Architecture', 'Kubernetes', 'Rancher'],
    BI: ['Power BI', 'Power Automate', 'Excel (Advanced)', 'Data Visualization'],
    '3D & VR': ['Arena XR', 'Unity (C#)', 'Blender', 'SketchUp'],
    Tools: ['Proligent Tool']
  };

  const projects = [
    {
      title: 'VR-Based Fire Rescue Training (Holodeck VR)',
      desc: 'Immersive VR fire rescue training modules using Arena XR and Unity — realistic emergency simulations to improve preparedness, decision-making, and response skills.',
      tech: ['Arena XR', 'Unity', 'C#']
    },
    {
      title: 'Keyboard Activity Monitoring (Cybersecurity Research)',
      desc: 'Controlled keyboard event monitoring system to analyze abnormal input patterns for cybersecurity research — strong focus on privacy and ethical data handling.',
      tech: ['Python', 'JavaScript']
    },
    {
      title: 'Driver Drowsiness Detection System',
      desc: 'Real-time computer vision system monitoring eye movement and blink rates — triggers audio alerts to enhance driving safety.',
      tech: ['Python', 'OpenCV', 'Computer Vision']
    },
    {
      title: 'Smart Street Light System (IoT)',
      desc: 'IoT-based street lighting automation with environmental sensors and fire alert notifications — improves safety and energy efficiency.',
      tech: ['IoT', 'Sensors', 'Python']
    },
    {
      title: 'Weather-Adaptive Street Light (IoT + Cloud)',
      desc: 'Dynamic smart lighting using sensors and IBM Watson Cloud — adjusts brightness based on weather for energy conservation.',
      tech: ['IoT', 'IBM Watson', 'Cloud']
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: customTheme.bg, 
      color: customTheme.text, 
      minHeight: '100vh', 
      transition: 'all 0.4s ease',
      background: customTheme.gradient
    }}>
      {/* Navbar */}
      <Box sx={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        bgcolor: isDark ? 'rgba(15,15,26,0.85)' : 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(12px)', 
        zIndex: 1300, 
        borderBottom: `1px solid ${isDark ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.08)'}` 
      }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 8 }, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: customTheme.primary, fontWeight: 'bold' }}>SP</Avatar>
            <Typography variant="h6" fontWeight={700}>Sruthi Priya</Typography>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
              <Button key={item} color="inherit" onClick={() => scrollTo(item.toLowerCase())} sx={{ textTransform: 'none', fontWeight: 500 }}>
                {item}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title={isDark ? 'Light Mode' : 'Dark Mode'}>
              <IconButton onClick={() => setDarkMode(!isDark)} color="inherit">
                {isDark ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
            <Button 
              variant="contained" 
              size="medium"
              sx={{ 
                bgcolor: customTheme.primary, 
                borderRadius: 50, 
                px: 4, 
                '&:hover': { bgcolor: customTheme.primaryDark } 
              }}
              href="mailto:stsruthipriya@gmail.com"
              endIcon={<ArrowForward />}
            >
              Let's Connect
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Hero */}
      <Box sx={{ pt: { xs: 16, md: 20 }, pb: 12, px: { xs: 3, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h1" fontWeight={900} sx={{ fontSize: { xs: '3.2rem', md: '5.5rem' }, lineHeight: 1.1 }}>
              Sruthi Priya
            </Typography>
            <Typography variant="h4" sx={{ my: 3, color: customTheme.primary, fontWeight: 600 }}>
              Full-Stack & Automation Developer
            </Typography>
            <Typography variant="body1" sx={{ mb: 5, maxWidth: 700, lineHeight: 1.8, opacity: 0.9 }}>
              1+ year @ Nokia | React.js • Node.js • Python • Selenium • Docker • Microservices • VR/3D (Arena XR & Unity) | Passionate about scalable systems, automation, and immersive experiences.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button variant="contained" size="large" href="mailto:stsruthipriya@gmail.com" sx={{ borderRadius: 50, bgcolor: customTheme.primary }}>
                Get in Touch
              </Button>
              <Button variant="outlined" size="large" href="#projects" sx={{ borderRadius: 50 }}>
                Explore Projects
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <Avatar 
              alt="Sruthi Priya" 
              src="/profile.jpg" // ← Replace with real photo path
              sx={{ width: { xs: 280, md: 360 }, height: { xs: 280, md: 360 }, mx: 'auto', boxShadow: 12, border: `4px solid ${customTheme.primary}` }} 
            />
          </Grid>
        </Grid>
      </Box>

      {/* Contact Info Strip */}
      <Box sx={{ textAlign: 'center', py: 4, bgcolor: isDark ? 'rgba(30,41,59,0.4)' : 'rgba(248,249,252,0.6)' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          <Typography>+91 9444545744</Typography>
          <Typography>stsruthipriya@gmail.com</Typography>
          <Button startIcon={<LinkedIn />} href="https://www.linkedin.com/in/sruthi-priya" target="_blank" sx={{ color: customTheme.primary }}>
            LinkedIn
          </Button>
          <Typography>Chennai, India</Typography>
        </Stack>
      </Box>

      {/* About / Professional Summary */}
      <Box id="about" sx={{ py: 12, px: { xs: 3, md: 8 }, maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: customTheme.primary, fontWeight: 700, mb: 6 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.1rem', mb: 4 }}>
          Full-stack and automation developer with 1 year of experience at Nokia, specializing in microservices-based web applications, workflow automation, and VR solutions using React.js, Node.js, Python, and Selenium.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.9, fontSize: '1.1rem' }}>
          Strong interest in microservices architecture and cloud technologies, with hands-on experience building scalable, secure software systems. Open to freelance, contract work, or full-time opportunities in web development, automation, VR prototypes, and process optimization.
        </Typography>
      </Box>

      {/* Skills */}
      <Box id="skills" sx={{ py: 12, px: { xs: 3, md: 8 }, bgcolor: isDark ? 'rgba(15,15,26,0.6)' : 'rgba(226,232,240,0.4)' }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: customTheme.primary, fontWeight: 700, mb: 8 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={4} maxWidth={1200} mx="auto">
          {Object.entries(skills).map(([cat, list]) => (
            <Grid item xs={12} sm={6} md={4} key={cat}>
              <Card sx={{ bgcolor: customTheme.card, height: '100%', p: 3, borderRadius: 3, boxShadow: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ color: customTheme.primary, fontWeight: 600 }}>
                  {cat}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {list.map(skill => (
                    <Chip key={skill} label={skill} variant="outlined" color="primary" size="medium" />
                  ))}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Work Experience */}
      <Box id="experience" sx={{ py: 12, px: { xs: 3, md: 8 }, maxWidth: 1000, mx: 'auto' }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: customTheme.primary, fontWeight: 700, mb: 6 }}>
          Work Experience
        </Typography>
        <Card sx={{ bgcolor: customTheme.card, p: 4, borderRadius: 3, boxShadow: 6 }}>
          <Typography variant="h5" fontWeight={700}>Nokia Solutions & Networks India Pvt. Ltd.</Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Graduate Apprentice Trainee (Developer) • Jan 2025 – Present
          </Typography>
          <List dense disablePadding>
            {[
              { title: 'Web Application Development', desc: 'Developed internal web apps using React.js, Node.js, HTML, CSS, JS. Integrated REST APIs and databases for real-time access.' },
              { title: 'Microservices Application Development', desc: 'Built Node.js microservices with Docker, Kubernetes, Rancher deployment. Configured API communication and ingress routing.' },
              { title: 'Immersive VR Training Solution', desc: 'Interactive VR onboarding platform with Arena XR. Automated 3D animations using Python — reduced design effort.' },
              { title: 'Excel & SAP Automation', desc: 'Automated SAP data extraction, cleaning, reporting using Python, Pandas, OpenPyXL — minimized errors.' },
              { title: 'Proligent Tool Automation', desc: 'Automated workflows using Python + Selenium for dynamic elements and repetitive tasks.' }
            ].map((exp, i) => (
              <ListItem key={i} disableGutters sx={{ mb: 2 }}>
                <ListItemText 
                  primary={<Typography fontWeight={600}>{exp.title}</Typography>} 
                  secondary={exp.desc} 
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Services */}
      <Box sx={{ py: 12, px: { xs: 3, md: 8 }, bgcolor: isDark ? 'rgba(30,41,59,0.3)' : 'rgba(248,249,252,0.5)' }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: customTheme.primary, fontWeight: 700, mb: 8 }}>
          Services I Offer
        </Typography>
        <Grid container spacing={4} justifyContent="center" maxWidth={1100} mx="auto">
          {[
            { icon: <CodeIcon fontSize="large" />, title: 'Full-Stack Web Development', desc: 'Modern React + Node.js apps, responsive UI, API integrations.' },
            { icon: <BuildIcon fontSize="large" />, title: 'Automation & Scripting', desc: 'Python/Selenium, SAP/Excel pipelines, web scraping.' },
            { icon: <ComputerIcon fontSize="large" />, title: 'VR / 3D Experiences', desc: 'Immersive training modules with Arena XR & Unity.' },
            { icon: <VisibilityIcon fontSize="large" />, title: 'Microservices & DevOps', desc: 'Dockerized services, Kubernetes basics, scalable architecture.' }
          ].map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4, 
                bgcolor: customTheme.card, 
                borderRadius: 3, 
                transition: 'transform 0.3s', 
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 12 } 
              }}>
                <Box sx={{ color: customTheme.primary, mb: 2 }}>{s.icon}</Box>
                <Typography variant="h6" gutterBottom>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Projects */}
      <Box id="projects" sx={{ py: 12, px: { xs: 3, md: 8 } }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: customTheme.primary, fontWeight: 700, mb: 8 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4} maxWidth={1200} mx="auto">
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card sx={{ 
                height: '100%', 
                bgcolor: customTheme.card, 
                borderRadius: 3, 
                overflow: 'hidden', 
                transition: 'all 0.3s', 
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 10 } 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight={700} sx={{ color: customTheme.primary, mb: 2 }}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {proj.desc}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {proj.tech.map(t => (
                      <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education & Certifications */}
      <Box sx={{ py: 10, px: { xs: 3, md: 8 }, maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
        <Divider sx={{ my: 6 }} />
        <Typography variant="h5" gutterBottom sx={{ color: customTheme.primary }}>Education</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>B.E. Computer Science</Typography>
        <Typography color="text.secondary">KCG College of Technology, Chennai • 2020–2024</Typography>

        <Divider sx={{ my: 6 }} />
        <Typography variant="h5" gutterBottom sx={{ color: customTheme.primary }}>Certifications</Typography>
        <Stack spacing={1} alignItems="center">
          <Typography>Introduction to Python – Coursera</Typography>
          <Typography>Introduction to Cloud – IBM</Typography>
          <Typography>Cybersecurity Essentials – Cisco</Typography>
        </Stack>
      </Box>

      {/* Footer / Contact */}
      <Box id="contact" sx={{ 
        py: 12, 
        textAlign: 'center', 
        bgcolor: customTheme.primary, 
        color: 'white',
        background: `linear-gradient(135deg, ${customTheme.primary} 0%, ${customTheme.primaryDark} 100%)`
      }}>
        <Typography variant="h4" gutterBottom fontWeight={700}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
          Open to freelance, contract, collaboration, or full-time opportunities. Let's build something impactful!
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
          <Button startIcon={<Email />} variant="outlined" size="large" href="mailto:stsruthipriya@gmail.com" sx={{ color: 'white', borderColor: 'white' }}>
            Email Me
          </Button>
          <Button startIcon={<Phone />} variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
            +91 9444545744
          </Button>
          <Button startIcon={<LinkedIn />} variant="outlined" size="large" href="https://www.linkedin.com/in/sruthi-priya" target="_blank" sx={{ color: 'white', borderColor: 'white' }}>
            LinkedIn
          </Button>
        </Stack>
      </Box>

      <Box sx={{ py: 4, textAlign: 'center', bgcolor: isDark ? '#0a0a14' : '#e2e8f0', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Sruthi Priya • Built with React & MUI</Typography>
      </Box>
    </Box>
  );
}

export default App;