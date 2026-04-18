'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Zone {
  label: string;
  color: string;
  check: (x: number, y: number, w: number, h: number) => boolean;
  sectionId: string;
}

interface CourtCanvasProps {
  onZoneClick?: (zone: string) => void;
}

export default function CourtCanvas({ onZoneClick }: CourtCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1, y: -1 });
  const lastMoveRef = useRef(Date.now());
  const frameRef = useRef(0);
  const dribbleMoveRef = useRef(false);
  const dribbleMoveFrameRef = useRef(0);
  const trickShotRef = useRef(false);
  const trickShotFrameRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    frameRef.current += 1;
    const t = frameRef.current;

    // Check idle trick shot
    if (Date.now() - lastMoveRef.current > 30000 && !trickShotRef.current) {
      trickShotRef.current = true;
      trickShotFrameRef.current = 0;
    }

    // Every 8 seconds: dribble move
    if (t % (60 * 8) === 0 && !dribbleMoveRef.current) {
      dribbleMoveRef.current = true;
      dribbleMoveFrameRef.current = 0;
    }

    // ─── FLOOR ───
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, W, H);

    // Wood grain lines
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 0.5;
    for (let y = 0; y < H; y += 8) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    const inset = 40;
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;

    // ─── COURT BOUNDARY ───
    ctx.strokeRect(inset, inset, W - inset * 2, H - inset * 2);

    // ─── HALF-COURT LINE ───
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, inset);
    ctx.lineTo(cx, H - inset);
    ctx.stroke();

    // ─── CENTER CIRCLE ───
    ctx.beginPath();
    ctx.arc(cx, cy, 60, 0, Math.PI * 2);
    ctx.stroke();

    // ─── THREE-POINT ARCS ───
    const arcW = Math.min(120, (W / 2 - inset) * 0.7);
    ctx.lineWidth = 2;

    // Left arc
    ctx.beginPath();
    ctx.moveTo(inset, cy - arcW);
    ctx.bezierCurveTo(inset + arcW * 1.8, cy - arcW, inset + arcW * 1.8, cy + arcW, inset, cy + arcW);
    ctx.stroke();

    // Right arc
    ctx.beginPath();
    ctx.moveTo(W - inset, cy - arcW);
    ctx.bezierCurveTo(W - inset - arcW * 1.8, cy - arcW, W - inset - arcW * 1.8, cy + arcW, W - inset, cy + arcW);
    ctx.stroke();

    // ─── PAINT BOXES ───
    const paintW = 160;
    const paintH = 120;

    // Left paint
    ctx.strokeRect(inset, cy - paintH / 2, paintW, paintH);
    // Right paint
    ctx.strokeRect(W - inset - paintW, cy - paintH / 2, paintW, paintH);

    // ─── FREE THROW CIRCLES (dashed) ───
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.arc(inset + paintW, cy, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(W - inset - paintW, cy, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // ─── BASKET CIRCLES ───
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(inset + 20, cy, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(W - inset - 20, cy, 8, 0, Math.PI * 2);
    ctx.fill();

    // ─── CENTER WATERMARK ───
    ctx.font = '800 48px Syne, sans-serif';
    ctx.fillStyle = 'rgba(255,215,0,0.12)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('HL', cx, cy);

    // ─── ZONE HOVER HIGHLIGHTS ───
    const zones: Zone[] = [
      {
        label: 'PROJECTS',
        color: 'rgba(0,255,136,0.15)',
        sectionId: 'projects',
        check: (mx, my, w, h) =>
          mx >= inset && mx <= inset + paintW && my >= h / 2 - paintH / 2 && my <= h / 2 + paintH / 2,
      },
      {
        label: 'SKILLS',
        color: 'rgba(0,207,255,0.15)',
        sectionId: 'skills',
        check: (mx, my, w, h) => {
          const dx = mx - (inset + paintW);
          const dy = my - h / 2;
          return Math.sqrt(dx * dx + dy * dy) < 90 && mx < w / 2;
        },
      },
      {
        label: 'ABOUT',
        color: 'rgba(255,179,71,0.15)',
        sectionId: 'about',
        check: (mx, my, w, h) => {
          const dx = mx - w / 2;
          const dy = my - h / 2;
          return Math.sqrt(dx * dx + dy * dy) < 60;
        },
      },
      {
        label: 'CONTACT',
        color: 'rgba(255,61,0,0.15)',
        sectionId: 'contact',
        check: (mx, my, w, h) => mx >= w - inset - 80 && mx <= w - inset,
      },
      {
        label: 'RESUME',
        color: 'rgba(255,215,0,0.15)',
        sectionId: 'resume',
        check: (mx, my, w, h) => mx >= w - inset - 60 && my >= h - inset - 60 && mx <= w - inset && my <= h - inset,
      },
    ];

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    zones.forEach((zone) => {
      if (mx >= 0 && zone.check(mx, my, W, H)) {
        ctx.fillStyle = zone.color;
        if (zone.label === 'PROJECTS') {
          ctx.fillRect(inset, cy - paintH / 2, paintW, paintH);
        } else if (zone.label === 'SKILLS') {
          ctx.beginPath();
          ctx.arc(inset + paintW, cy, 90, 0, Math.PI * 2);
          ctx.fill();
        } else if (zone.label === 'ABOUT') {
          ctx.beginPath();
          ctx.arc(cx, cy, 60, 0, Math.PI * 2);
          ctx.fill();
        } else if (zone.label === 'CONTACT') {
          ctx.fillRect(W - inset - 80, inset, 80, H - inset * 2);
        } else if (zone.label === 'RESUME') {
          ctx.fillRect(W - inset - 60, H - inset - 60, 60, 60);
        }

        ctx.font = '600 12px Syne, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(zone.label, cx, cy + 100);
      }
    });

    // ─── PIXEL AVATAR ───
    const px = cx;
    let py = cy + 80;

    // Ball bounce params
    const isHovered = zones.some((z) => mx >= 0 && z.check(mx, my, W, H));
    const speed = isHovered ? 2.5 : 1.5;

    let ballOffY = Math.sin((t * speed * Math.PI) / 60) * 8;
    let playerBobY = -Math.sin((t * speed * Math.PI) / 60) * 2;

    // Trick shot animation
    let ballOffX = 0;
    if (trickShotRef.current) {
      const tf = trickShotFrameRef.current;
      if (tf < 90) {
        const progress = tf / 90;
        ballOffX = Math.sin(progress * Math.PI) * 40;
        ballOffY = -Math.sin(progress * Math.PI) * 60;
        trickShotFrameRef.current++;
      } else {
        trickShotRef.current = false;
        lastMoveRef.current = Date.now();
      }
    }

    // Dribble move
    if (dribbleMoveRef.current) {
      const df = dribbleMoveFrameRef.current;
      if (df < 60) {
        ballOffX = Math.sin((df / 60) * Math.PI * 2) * 20;
        dribbleMoveFrameRef.current++;
      } else {
        dribbleMoveRef.current = false;
      }
    }

    py += playerBobY;

    // Head
    ctx.fillStyle = '#F5CBA7';
    ctx.fillRect(px - 5, py - 30, 10, 10);

    // Body (jersey — dark navy)
    ctx.fillStyle = '#1a2540';
    ctx.fillRect(px - 6, py - 20, 12, 20);

    // Jersey number dots (white pixels)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px - 2, py - 16, 2, 2);
    ctx.fillRect(px + 1, py - 16, 2, 2);
    ctx.fillRect(px - 2, py - 12, 2, 2);
    ctx.fillRect(px + 1, py - 12, 2, 2);

    // Arms
    ctx.fillStyle = '#1a2540';
    ctx.fillRect(px - 10, py - 18, 4, 8);
    ctx.fillRect(px + 6, py - 18, 4, 8);

    // Legs
    ctx.fillStyle = '#1a2540';
    ctx.fillRect(px - 5, py, 5, 10);
    ctx.fillRect(px + 1, py, 5, 10);

    // Basketball (orange)
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath();
    ctx.arc(px + 14 + ballOffX, py - 8 + ballOffY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [draw]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    lastMoveRef.current = Date.now();
    trickShotRef.current = false;
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1, y: -1 };
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onZoneClick) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const W = canvasRef.current!.width;
    const H = canvasRef.current!.height;
    const inset = 40;
    const paintW = 160;
    const paintH = 120;
    const cy = H / 2;

    if (mx >= inset && mx <= inset + paintW && my >= cy - paintH / 2 && my <= cy + paintH / 2) {
      onZoneClick('projects');
    } else if (Math.sqrt((mx - (inset + paintW)) ** 2 + (my - cy) ** 2) < 90 && mx < W / 2) {
      onZoneClick('skills');
    } else if (Math.sqrt((mx - W / 2) ** 2 + (my - cy) ** 2) < 60) {
      onZoneClick('about');
    } else if (mx >= W - inset - 80 && mx <= W - inset) {
      onZoneClick('contact');
    } else if (mx >= W - inset - 60 && my >= H - inset - 60) {
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%', cursor: 'crosshair' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
}
