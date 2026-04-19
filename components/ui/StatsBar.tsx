'use client';

import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(
      new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Kolkata',
      })
    );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time} IST</span>;
}

export default function StatsBar() {
  return (
    <div style={{
      background: '#0A0C10',
      border: '1px solid #FFD700',
      borderLeft: 'none',
      borderRight: 'none',
      padding: '0',
      fontFamily: 'JetBrains Mono, monospace',
    }}>

      {/* Top bar — game info */}
      <div style={{
        background: '#FFD700',
        padding: '4px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: 10, color: '#080B14', fontWeight: 700, letterSpacing: '0.1em' }}>
          HARSH.SYS ARENA — PORTFOLIO SEASON 2026
        </span>
        <span style={{ fontSize: 10, color: '#080B14', fontWeight: 700 }}>
          <LiveClock />
        </span>
      </div>

      {/* Main scoreboard row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 40px',
        gap: 0,
      }}>

        {/* Home team */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#8892A4', marginBottom: 4, letterSpacing: '0.1em' }}>
            HOME
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#FFD700' }}>
            HARSH
          </div>
          <div style={{ fontSize: 10, color: '#3D4557' }}>SIT PUNE · CSE</div>
        </div>

        {/* Score */}
        <div style={{
          textAlign: 'center',
          padding: '0 40px',
          borderLeft: '1px solid #1a2040',
          borderRight: '1px solid #1a2040',
        }}>
          <div style={{ fontSize: 11, color: '#3D4557', marginBottom: 4, letterSpacing: '0.1em' }}>
            Q1  12:00
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <CountUp
              end={6}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
              style={{ fontSize: 56, fontWeight: 800, color: '#F0EDE8', lineHeight: 1, minWidth: 40, display: 'inline-block' } as React.CSSProperties}
            />
            <span style={{ fontSize: 32, color: '#3D4557' }}>—</span>
            <CountUp
              end={10}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
              style={{ fontSize: 56, fontWeight: 800, color: '#F0EDE8', lineHeight: 1, minWidth: 40, display: 'inline-block' } as React.CSSProperties}
            />
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 4, justifyContent: 'center' }}>
            <div style={{ fontSize: 9, color: '#8892A4', letterSpacing: '0.08em' }}>PROJECTS</div>
            <div style={{ fontSize: 9, color: '#8892A4', letterSpacing: '0.08em' }}>TECHS</div>
          </div>
        </div>

        {/* Away team */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#8892A4', marginBottom: 4, letterSpacing: '0.1em' }}>
            VISITOR
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#00CFFF' }}>
            RECRUITER
          </div>
          <div style={{ fontSize: 10, color: '#3D4557' }}>YOUR COMPANY</div>
        </div>

      </div>

      {/* Bottom ticker */}
      <div style={{
        borderTop: '1px solid #1a2040',
        padding: '6px 40px',
        display: 'flex',
        gap: 32,
        fontSize: 10,
        color: '#3D4557',
        letterSpacing: '0.08em',
        flexWrap: 'wrap',
      }}>
        <span>YEARS BUILDING: <span style={{ color: '#00FF88' }}>3+</span></span>
        <span>STATUS: <span style={{ color: '#00FF88' }}>● AVAILABLE</span></span>
        <span>LOCATION: <span style={{ color: '#F0EDE8' }}>PUNE, IN</span></span>
        <span>RESPONSE TIME: <span style={{ color: '#FFD700' }}>&lt; 24H</span></span>
      </div>

    </div>
  );
}
