import { forwardRef } from 'react';

export const PickleballBall = forwardRef<SVGSVGElement, { className?: string }>(({ className }, ref) => {
  return (
    <svg ref={ref} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <mask id="holes-mask">
          <rect width="100" height="100" fill="white" />
          {/* Holes pattern (Wiffle ball style) - Black circles cut out from the white mask */}
          <g fill="black">
            {/* Center row */}
            <circle cx="50" cy="50" r="6" />
            <circle cx="20" cy="50" r="6" />
            <circle cx="80" cy="50" r="6" />
            
            {/* Top rows */}
            <circle cx="35" cy="25" r="6" />
            <circle cx="65" cy="25" r="6" />
            <circle cx="50" cy="5" r="6" />
            
            {/* Bottom rows */}
            <circle cx="35" cy="75" r="6" />
            <circle cx="65" cy="75" r="6" />
            <circle cx="50" cy="95" r="6" />
            
            {/* Side hints */}
            <circle cx="5" cy="30" r="4" />
            <circle cx="5" cy="70" r="4" />
            <circle cx="95" cy="30" r="4" />
            <circle cx="95" cy="70" r="4" />
          </g>
        </mask>
      </defs>

      {/* Main sphere body masked by holes */}
      <circle cx="50" cy="50" r="48" fill="currentColor" mask="url(#holes-mask)" />
      
      {/* Inner shadow to give depth to the holes (simulating thickness) */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeOpacity="0.1" strokeWidth="1" />
      
      {/* Highlight/Shine for 3D effect */}
      <path d="M25,25 Q45,15 65,25" fill="none" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
});
PickleballBall.displayName = 'PickleballBall';

export const PickleballPaddle = forwardRef<SVGSVGElement, { className?: string }>(({ className }, ref) => {
  return (
    <svg ref={ref} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Handle */}
      <rect x="45" y="60" width="10" height="35" rx="2" fill="currentColor" />
      {/* Paddle Face (Rectangular with rounded corners) */}
      <rect x="25" y="5" width="50" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
});
PickleballPaddle.displayName = 'PickleballPaddle';

export const PickleballCourt = forwardRef<SVGSVGElement, { className?: string }>(({ className }, ref) => {
  return (
    <svg ref={ref} viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Boundary */}
      <rect x="5" y="5" width="90" height="190" fill="none" stroke="currentColor" strokeWidth="2"/>
      
      {/* Net */}
      <line x1="2" y1="100" x2="98" y2="100" stroke="currentColor" strokeWidth="4"/>
      
      {/* Kitchen Lines (Non-Volley Zone) - 7ft from net approx */}
      <line x1="5" y1="70" x2="95" y2="70" stroke="currentColor" strokeWidth="2"/>
      <line x1="5" y1="130" x2="95" y2="130" stroke="currentColor" strokeWidth="2"/>
      
      {/* Center Lines (Service Court Divider) - From Kitchen to Baseline */}
      <line x1="50" y1="5" x2="50" y2="70" stroke="currentColor" strokeWidth="2"/>
      <line x1="50" y1="130" x2="50" y2="195" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
});
PickleballCourt.displayName = 'PickleballCourt';

export const PickleballPaddleRealistic = forwardRef<SVGSVGElement, { className?: string }>(({ className }, ref) => {
  return (
    <svg ref={ref} viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#222" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="50%" stopColor="#222" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#111" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <pattern id="honeycombPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
           <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5L5 0Z" fill="none" stroke="#333" strokeWidth="0.5"/>
        </pattern>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.5"/>
        </filter>
      </defs>
      
      {/* Handle Group - Moved up to connect properly */}
      <g transform="translate(130, 290)">
        {/* Handle Base extended upwards into the paddle face */}
        <rect x="0" y="-20" width="40" height="130" rx="4" fill="url(#handleGradient)" />
        
        {/* Grip Tape Spirals */}
        <path d="M0,10 L40,20 M0,30 L40,40 M0,50 L40,60 M0,70 L40,80 M0,90 L40,100" stroke="#000" strokeWidth="2" opacity="0.6" />
        
        {/* Rubber Ring at top of handle (Neck) */}
        <rect x="-2" y="-5" width="44" height="12" rx="3" fill="#111" />
        
        {/* End Cap */}
        <path d="M-2,105 Q20,115 42,105 L42,110 Q20,120 -2,110 Z" fill="#111" />
      </g>
      
      {/* Paddle Face Group */}
      <g transform="translate(150, 160)">
         {/* Edge Guard (The rim) */}
         <rect x="-105" y="-155" width="210" height="260" rx="35" ry="35" fill="url(#edgeGradient)" />
         
         {/* Main Face Surface */}
         <rect x="-100" y="-150" width="200" height="250" rx="30" ry="30" fill="url(#faceGradient)" />
         
         {/* Texture Overlay */}
         <rect x="-100" y="-150" width="200" height="250" rx="30" ry="30" fill="url(#honeycombPattern)" opacity="0.2" />
         
         {/* Throat Curve (Connection to handle) */}
         <path d="M-40,100 Q0,120 40,100 L20,130 L-20,130 Z" fill="url(#edgeGradient)" />
         
         {/* Logo Area / Branding */}
         <circle cx="0" cy="-20" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
         <path d="M-30,-20 L30,-20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </g>
    </svg>
  );
});
PickleballPaddleRealistic.displayName = 'PickleballPaddleRealistic';

export const PickleballCourt3D = forwardRef<SVGSVGElement, { className?: string }>(({ className }, ref) => {
  return (
    <svg ref={ref} viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="courtSurface" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="kitchenSurface" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <pattern id="netPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0L6 0M0 0L0 6" stroke="#e5e5e5" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      
      {/* Court Shadow */}
      <path d="M20,280 L100,50 L400,50 L480,280 Z" fill="black" opacity="0.2" transform="translate(0, 10)" filter="blur(10px)" />

      {/* Full Court Base (Blue) */}
      <path d="M20,280 L100,50 L400,50 L480,280 Z" fill="url(#courtSurface)" />
      
      {/* Kitchen (Non-Volley Zone) - Lighter Blue */}
      {/* Coordinates calculated for straight lines: TL(100,50), TR(400,50), BR(424,119), BL(76,119) */}
      <path d="M76,119 L100,50 L400,50 L424,119 Z" fill="url(#kitchenSurface)" />
      
      {/* White Lines */}
      
      {/* Baseline */}
      <line x1="20" y1="280" x2="480" y2="280" stroke="white" strokeWidth="4" />
      
      {/* Sidelines */}
      <line x1="20" y1="280" x2="100" y2="50" stroke="white" strokeWidth="3" />
      <line x1="480" y1="280" x2="400" y2="50" stroke="white" strokeWidth="3" />
      
      {/* Kitchen Line */}
      <line x1="76" y1="119" x2="424" y2="119" stroke="white" strokeWidth="3" />
      
      {/* Center Line */}
      <line x1="250" y1="280" x2="250" y2="119" stroke="white" strokeWidth="3" />
      
      {/* Net Structure */}
      <g>
        {/* Net Posts (slightly outside TL/TR) */}
        <rect x="94" y="20" width="6" height="35" fill="#111" />
        <rect x="400" y="20" width="6" height="35" fill="#111" />
        
        {/* Net Mesh */}
        <path d="M97,25 L403,25 L403,50 L97,50 Z" fill="url(#netPattern)" opacity="0.6" />
        
        {/* Top Tape */}
        <path d="M94,20 L406,20 L406,26 L94,26 Z" fill="white" />
        <path d="M94,26 L406,26" stroke="#ccc" strokeWidth="1" />
        
        {/* Center Strap */}
        <rect x="248" y="26" width="4" height="24" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
});
PickleballCourt3D.displayName = 'PickleballCourt3D';
