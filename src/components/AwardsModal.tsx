import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';
import ImageModal from './ImageModal';

interface AwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AwardsModal: React.FC<AwardsModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">주요 수상 경력</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img 
              src="/img_awards_1.png" 
              alt="수상 경력 1"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_1.png", "수상 경력 1")}
            />
            <img 
              src="/img_awards_2.png" 
              alt="수상 경력 2"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_2.png", "수상 경력 2")}
            />
            <img 
              src="/img_awards_3.png" 
              alt="수상 경력 3"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_3.png", "수상 경력 3")}
            />
            <img 
              src="/img_awards_4.png" 
              alt="수상 경력 4"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/img_awards_4.png", "수상 경력 4")}
            />
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2025년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 제1회 대한민국 스테이블코인 해커톤 최우수상</li>
                <li>• Seoulana Hackathon 2위</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2022년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• ETH Seoul 1위</li>
                <li>• Hackatom Seoul Evmos 1위</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2018년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• HDAC Hackathon The Arena Idea Award</li>
                <li>• OXD: Creative Coders Hackathon 1위</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">2017년</h5>
              <ul className="space-y-1 text-gray-600">
                <li>• 12th Appjam IoT 1위</li>
                <li>• KISA NHN Fintech 4위</li>
                <li>• 14th Appjam 1위</li>
                <li>• D3S Hackathon 2위</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <ImageModal 
        isOpen={selectedImage !== null}
        onClose={closeImageModal}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
};

export default AwardsModal;