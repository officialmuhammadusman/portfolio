/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 🚀 LIGHT MODE - FUTURISTIC CYBERPUNK VIBES
        light: {
          // Base Surfaces - Ultra Clean Futuristic
          background: '#F8FAFC', // Crisp white-blue
          surface: '#FFFFFF',
          card: 'rgba(255, 255, 255, 0.95)',
          overlay: 'rgba(255, 255, 255, 0.9)',
          
          // PRIMARY - Electric Neon Blue (Mind-Blowing)
          primary: '#00D4FF', // Cyber Electric Blue
          primaryHover: '#00B8E6',
          primaryLight: '#E0F8FF',
          primaryDark: '#0099CC',
          
          // SECONDARY - Explosive Hot Pink (Attention Grabber)
          secondary: '#FF0080', // Hot Magenta
          secondaryHover: '#E6006B',
          secondaryLight: '#FFE0F0',
          secondaryDark: '#CC0066',
          
          // ACCENT - Laser Green (Futuristic)
          accent: '#00FF88', // Matrix Green
          accentHover: '#00E67A',
          accentLight: '#E0FFF0',
          accentDark: '#00CC6A',
          
          // POWER COLORS - Game Changer
          power: '#FF3D00', // Nuclear Orange
          powerHover: '#E63300',
          powerLight: '#FFE8E0',
          
          // TEXT - High Contrast Perfection
          textPrimary: '#0A0A0A', // Deep Black
          textSecondary: '#2D3748', // Charcoal
          textTertiary: '#718096', // Steel Gray
          textAccent: '#00D4FF', // Electric Blue Text
          textInverse: '#FFFFFF',
          
          // STATUS - Premium Quality
          success: '#00FF77', // Laser Green
          successLight: '#E0FFF2',
          warning: '#FFD700', // Pure Gold
          warningLight: '#FFFACD',
          error: '#FF1744', // Electric Red
          errorLight: '#FFE8EB',
          info: '#00D4FF', // Electric Info
          infoLight: '#E0F8FF',
          
          // BORDERS - Sleek & Modern
          border: '#E2E8F0',
          borderAccent: '#00D4FF',
          borderGlow: 'rgba(0, 212, 255, 0.3)',
          
          // GRADIENTS - EXPLOSIVE COMBINATIONS
          gradientHero: 'linear-gradient(135deg, #00D4FF 0%, #FF0080 50%, #00FF88 100%)',
          gradientPrimary: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)',
          gradientSecondary: 'linear-gradient(135deg, #FF0080 0%, #CC0066 100%)',
          gradientAccent: 'linear-gradient(135deg, #00FF88 0%, #00CC6A 100%)',
          gradientPower: 'linear-gradient(135deg, #FF3D00 0%, #FF0080 100%)',
          gradientGold: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          gradientRainbow: 'linear-gradient(90deg, #00D4FF, #FF0080, #00FF88, #FFD700, #FF3D00)',
        },
        
        // 🌃 DARK MODE - CYBERPUNK DYSTOPIAN MASTERPIECE
        dark: {
          // Base Surfaces - Deep Space Black
          background: '#000000', // Pure Black
          surface: '#0A0A0B', // Void Black
          card: 'rgba(10, 10, 11, 0.95)',
          overlay: 'rgba(0, 0, 0, 0.9)',
          
          // PRIMARY - Neon Electric (Blade Runner Style)
          primary: '#00FFFF', // Cyan Neon
          primaryHover: '#00E6E6',
          primaryLight: '#1A1F2E',
          primaryDark: '#00CCCC',
          
          // SECONDARY - Hot Magenta Neon
          secondary: '#FF00FF', // Pure Magenta
          secondaryHover: '#E600E6',
          secondaryLight: '#2E1A2E',
          secondaryDark: '#CC00CC',
          
          // ACCENT - Laser Lime (Matrix Vibes)
          accent: '#39FF14', // Laser Lime
          accentHover: '#33E612',
          accentLight: '#1F2E1A',
          accentDark: '#2BCC10',
          
          // POWER - Nuclear Orange
          power: '#FF6600', // Radioactive Orange
          powerHover: '#E65C00',
          powerLight: '#2E201A',
          
          // TEXT - Ultra Bright
          textPrimary: '#FFFFFF', // Pure White
          textSecondary: '#E2E8F0', // Light Gray
          textTertiary: '#A0AEC0', // Medium Gray
          textAccent: '#00FFFF', // Cyan Accent
          textInverse: '#000000',
          
          // STATUS - Neon Perfection
          success: '#39FF14', // Laser Success
          successLight: '#1F2E1A',
          warning: '#FFD700', // Gold Warning
          warningLight: '#2E2A1A',
          error: '#FF073A', // Neon Red
          errorLight: '#2E1A1D',
          info: '#00FFFF', // Cyan Info
          infoLight: '#1A2E2E',
          
          // BORDERS - Glowing Effects
          border: '#2D3748',
          borderAccent: '#00FFFF',
          borderGlow: 'rgba(0, 255, 255, 0.5)',
          
          // GRADIENTS - MIND-BLOWING NEON
          gradientHero: 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 50%, #39FF14 100%)',
          gradientPrimary: 'linear-gradient(135deg, #00FFFF 0%, #0080FF 100%)',
          gradientSecondary: 'linear-gradient(135deg, #FF00FF 0%, #8000FF 100%)',
          gradientAccent: 'linear-gradient(135deg, #39FF14 0%, #00FF80 100%)',
          gradientPower: 'linear-gradient(135deg, #FF6600 0%, #FF0080 100%)',
          gradientGold: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
          gradientRainbow: 'linear-gradient(90deg, #00FFFF, #FF00FF, #39FF14, #FFD700, #FF6600)',
          gradientNeon: 'linear-gradient(45deg, #00FFFF, #FF00FF)',
        },
      },
      
      // 🎯 EXTREME TYPOGRAPHY - ATTENTION GRABBING
      fontSize: {
        'micro': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'mega': ['12rem', { lineHeight: '0.9' }], // MASSIVE HERO TEXT
        'ultra': ['16rem', { lineHeight: '0.8' }], // ULTRA HERO
      },
      
      // 🎨 INSANE SPACING SYSTEM
      spacing: {
        '0.5': '0.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      
      // 🌟 ULTRA PREMIUM BLUR EFFECTS
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
        '4xl': '60px',
        'extreme': '100px',
      },
      
      // 💫 BLOCKBUSTER SHADOW SYSTEM
      boxShadow: {
        // NEON GLOW EFFECTS - CYBERPUNK STYLE
        'neon-blue': '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
        'neon-pink': '0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 60px #FF00FF',
        'neon-green': '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14',
        'neon-orange': '0 0 20px #FF6600, 0 0 40px #FF6600, 0 0 60px #FF6600',
        'neon-gold': '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700',
        
        // ULTRA INTENSE GLOWS
        'mega-blue': '0 0 30px #00FFFF, 0 0 60px #00FFFF, 0 0 90px #00FFFF, 0 0 120px #00FFFF',
        'mega-pink': '0 0 30px #FF00FF, 0 0 60px #FF00FF, 0 0 90px #FF00FF, 0 0 120px #FF00FF',
        'mega-green': '0 0 30px #39FF14, 0 0 60px #39FF14, 0 0 90px #39FF14, 0 0 120px #39FF14',
        
        // RAINBOW EFFECTS
        'rainbow': '0 0 20px #00FFFF, 0 0 30px #FF00FF, 0 0 40px #39FF14, 0 0 50px #FFD700',
        'rainbow-intense': '0 0 40px #00FFFF, 0 0 60px #FF00FF, 0 0 80px #39FF14, 0 0 100px #FFD700',
        
        // PREMIUM GLASS EFFECTS
        'glass-neon': '0 8px 32px 0 rgba(0, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-pink': '0 8px 32px 0 rgba(255, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        
        // DEPTH & DIMENSION
        'ultra-depth': '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'floating': '0 20px 40px -4px rgba(0, 255, 255, 0.4)',
        
        // ELECTRIC EFFECTS
        'electric': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
        'lightning': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF, 0 0 35px #00FFFF',
      },
      
      // 🚀 MIND-BLOWING ANIMATIONS
      animation: {
        // Basic Smooth Animations
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-up': 'scaleUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // CYBERPUNK EFFECTS
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 0.15s ease-in-out infinite alternate',
        'electric-pulse': 'electricPulse 1.5s ease-in-out infinite',
        'rainbow-shift': 'rainbowShift 3s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite',
        
        // FLOATING & MOVEMENT
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'hover-float': 'hoverFloat 2s ease-in-out infinite',
        'bounce-glow': 'bounceGlow 2s infinite',
        
        // ROTATION & SPIN
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spinReverse 3s linear infinite',
        'rotate-glow': 'rotateGlow 4s linear infinite',
        
        // TEXT EFFECTS
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        
        // BACKGROUND EFFECTS
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
      },
      
      // 🎭 EPIC KEYFRAMES
      keyframes: {
        // Basic Animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        
        // NEON & CYBERPUNK
        neonPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px currentColor, 0 0 40px currentColor',
            filter: 'brightness(1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor',
            filter: 'brightness(1.2)' 
          },
        },
        neonFlicker: {
          '0%, 98%': { opacity: '1' },
          '99%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        electricPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF',
          },
          '50%': { 
            boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF, 0 0 80px #00FFFF',
          },
        },
        rainbowShift: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '25%': { filter: 'hue-rotate(90deg)' },
          '50%': { filter: 'hue-rotate(180deg)' },
          '75%': { filter: 'hue-rotate(270deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        glowBreathe: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.4)',
            transform: 'scale(1.02)' 
          },
        },
        
        // FLOATING EFFECTS
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-5px) translateX(2px)' },
          '50%': { transform: 'translateY(-10px) translateX(0px)' },
          '75%': { transform: 'translateY(-5px) translateX(-2px)' },
        },
        hoverFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        bounceGlow: {
          '0%, 20%, 53%, 80%, 100%': { 
            transform: 'translateY(0px)',
            boxShadow: '0 0 20px currentColor'
          },
          '40%, 43%': { 
            transform: 'translateY(-15px)',
            boxShadow: '0 10px 40px currentColor'
          },
          '70%': { 
            transform: 'translateY(-7px)',
            boxShadow: '0 5px 30px currentColor'
          },
        },
        
        // ROTATION
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        rotateGlow: {
          '0%': { 
            transform: 'rotate(0deg)',
            boxShadow: '0 0 20px #00FFFF'
          },
          '25%': { 
            transform: 'rotate(90deg)',
            boxShadow: '0 0 30px #FF00FF'
          },
          '50%': { 
            transform: 'rotate(180deg)',
            boxShadow: '0 0 40px #39FF14'
          },
          '75%': { 
            transform: 'rotate(270deg)',
            boxShadow: '0 0 30px #FFD700'
          },
          '100%': { 
            transform: 'rotate(360deg)',
            boxShadow: '0 0 20px #00FFFF'
          },
        },
        
        // TEXT EFFECTS
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: 'currentColor' },
        },
        
        // BACKGROUND EFFECTS
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        aurora: {
          '0%': { 
            backgroundPosition: '0% 0%',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            backgroundPosition: '50% 100%',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(270deg)'
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            filter: 'hue-rotate(360deg)'
          },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      
      // 🎯 EXTREME BORDER RADIUS
      borderRadius: {
        'none': '0',
        'xs': '0.0625rem',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'full': '9999px',
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic shapes
      },
      
      // 🎨 ADVANCED OPACITY
      opacity: {
        '2': '0.02',
        '3': '0.03',
        '15': '0.15',
        '25': '0.25',
        '35': '0.35',
        '45': '0.45',
        '55': '0.55',
        '65': '0.65',
        '85': '0.85',
        '98': '0.98',
      },
      
      // 🚀 Z-INDEX SYSTEM
      zIndex: {
        '1': '1',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '999': '999',
        '9999': '9999',
      },
      
      // 🔥 ADVANCED FILTERS
      filter: {
        'none': 'none',
        'neon': 'drop-shadow(0 0 10px currentColor)',
        'glow': 'drop-shadow(0 0 20px currentColor) brightness(1.1)',
        'electric': 'drop-shadow(0 0 10px #00FFFF) drop-shadow(0 0 20px #00FFFF)',
        'rainbow': 'hue-rotate(0deg) saturate(1.5) brightness(1.1)',
        'cyberpunk': 'contrast(1.2) saturate(1.3) brightness(1.1)',
      },
      
      // 🎭 TRANSFORM ORIGINS
      transformOrigin: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
        'left-center': 'left center',
        'right-center': 'right center',
      },
    },
  },
  plugins: [],
};