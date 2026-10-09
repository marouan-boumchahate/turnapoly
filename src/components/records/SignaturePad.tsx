import React, { useRef, useState, useEffect, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface SignaturePadProps {
  value?: string | null;
  onChange: (signatureDataUrl: string | null) => void;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({ value, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const linesRef = useRef<Point[][]>([]);
  const currentLineRef = useRef<Point[]>([]);
  const [hasSignature, setHasSignature] = useState(false);

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#0f172a';

    for (const line of linesRef.current) {
      if (line.length === 0) continue;
      ctx.beginPath();
      ctx.moveTo(line[0].x, line[0].y);
      for (let i = 1; i < line.length; i++) {
        ctx.lineTo(line[i].x, line[i].y);
      }
      ctx.stroke();
    }
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    redrawCanvas();
  }, [redrawCanvas]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isDrawingRef.current) {
        initCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Ignored if capture unsupported
    }
    isDrawingRef.current = true;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    currentLineRef.current = [pos];

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const pos = getPos(e);
    currentLineRef.current.push(pos);

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    if (!hasSignature) {
      setHasSignature(true);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (canvas) {
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // Ignored
      }

      if (currentLineRef.current.length > 0) {
        linesRef.current.push([...currentLineRef.current]);
        currentLineRef.current = [];
      }
      onChange(canvas.toDataURL('image/png'));
    }
  };

  const handleClear = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    linesRef.current = [];
    currentLineRef.current = [];
    setHasSignature(false);
    onChange(null);
  }, [onChange]);

  useEffect(() => {
    if (value === null && (hasSignature || linesRef.current.length > 0)) {
      handleClear();
    }
  }, [value, hasSignature, handleClear]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            display: 'block',
            width: '100%',
            height: '110px',
            touchAction: 'none',
            cursor: 'crosshair',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '22px',
            left: '16px',
            right: '16px',
            borderBottom: '1px dashed #cbd5e1',
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              color: '#94a3b8',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              userSelect: 'none',
            }}
          >
            {hasSignature ? 'Winner Signature' : 'Sign here with finger or mouse ✍️'}
          </span>
          <span style={{ fontSize: '12px', color: '#cbd5e1', userSelect: 'none' }}>✕</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={handleClear}
          disabled={!hasSignature}
          style={{
            background: 'none',
            border: 'none',
            color: hasSignature ? 'var(--red)' : 'var(--mute)',
            fontSize: '12px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            cursor: hasSignature ? 'pointer' : 'default',
            padding: '2px 4px',
            opacity: hasSignature ? 1 : 0.4,
            transition: 'opacity var(--transition-fast)',
          }}
        >
          Clear Signature
        </button>
      </div>
    </div>
  );
};
