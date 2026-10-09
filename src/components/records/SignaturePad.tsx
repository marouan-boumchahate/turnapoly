import React, { useRef, useState, useEffect, useCallback } from 'react';

interface SignaturePadProps {
  onChange: (signatureDataUrl: string | null) => void;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({ onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const [hasSignature, setHasSignature] = useState(false);

  // Initialize canvas coordinates with DPR scaling for retina crispness
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
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#0f172a';
    }
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      // Re-init canvas on window resize
      if (!isDrawingRef.current) {
        initCanvas();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    if (!hasSignature) {
      setHasSignature(true);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.releasePointerCapture(e.pointerId);
      onChange(canvas.toDataURL('image/png'));
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasSignature(false);
    onChange(null);
  };

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

        {/* Signature guide baseline */}
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
