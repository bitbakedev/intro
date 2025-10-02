import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.5, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.5), 5));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 컨트롤 버튼들 - PC에서만 표시 */}
        <div className="absolute top-4 right-4 flex space-x-2 z-10 hidden md:flex">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors hidden md:block"
            title="확대"
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors hidden md:block"
            title="축소"
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors hidden md:block"
            title="원본 크기"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors"
            title="닫기"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* 확대/축소 정보 - PC에서만 표시 */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-20 px-3 py-1 rounded-full z-10 hidden md:block">
          <span className="text-white text-sm font-medium">
            {Math.round(scale * 100)}%
          </span>
        </div>
        
        {/* 이미지 컨테이너 */}
        <div 
          className="overflow-hidden w-full h-full flex items-center justify-center"
          onWheel={window.innerWidth >= 768 ? handleWheel : undefined}
        >
          <img 
            ref={imageRef}
            src={imageSrc} 
            alt={imageAlt}
            className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-200 ${
              window.innerWidth >= 768 ? (scale > 1 ? 'cursor-grab' : 'cursor-zoom-in') : 'cursor-default'
            } ${isDragging ? 'cursor-grabbing' : ''}`}
            style={{
              transform: window.innerWidth >= 768 ? `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)` : 'none',
              transformOrigin: 'center center'
            }}
            onMouseDown={window.innerWidth >= 768 ? handleMouseDown : undefined}
            onMouseMove={window.innerWidth >= 768 ? handleMouseMove : undefined}
            onMouseUp={window.innerWidth >= 768 ? handleMouseUp : undefined}
            onMouseLeave={window.innerWidth >= 768 ? handleMouseUp : undefined}
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth >= 768 && scale === 1) {
                handleZoomIn();
              }
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* 사용법 안내 - PC에서만 표시 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 px-4 py-2 rounded-full hidden md:block">
        <p className="text-white text-xs text-center">
          마우스 휠로 확대/축소 • 드래그로 이동 • 이미지 클릭으로 확대
        </p>
      </div>
    </div>
  );
};

export default ImageModal;