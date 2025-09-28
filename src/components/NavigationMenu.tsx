import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationMenuProps {
  sections: Array<{
    id: string;
    title: string;
    isAppendix?: boolean;
  }>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // 모바일에서 메뉴 닫기
    }
  };

  return (
    <>
      {/* 모바일 드롭다운 메뉴 */}
      <div className="md:hidden fixed top-4 right-4 z-40">
        <div className="bg-white rounded-full shadow-lg border">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-50 transition-colors"
            title="목차"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
              {sections.map((section, index) => {
                // Appendix 섹션 시작 전에 라벨 추가
                const isFirstAppendix = section.isAppendix && 
                  (index === 0 || !sections[index - 1].isAppendix);
                
                return (
                  <React.Fragment key={section.id}>
                    {isFirstAppendix && (
                      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Appendix
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                        activeSection === section.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                      } ${section.isAppendix ? 'pl-6 text-xs' : ''}`}
                    >
                      {section.title}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* PC 좌측 플로팅 메뉴 */}
      <div className="hidden md:block fixed left-6 top-6 z-40">
        <div className="bg-white rounded-lg border max-w-xs min-h-screen">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-800 text-sm">목차</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {sections.map((section, index) => {
              // Appendix 섹션 시작 전에 라벨 추가
              const isFirstAppendix = section.isAppendix && 
                (index === 0 || !sections[index - 1].isAppendix);
              
              return (
                <React.Fragment key={section.id}>
                  {isFirstAppendix && (
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Appendix
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                      activeSection === section.id ? 'bg-blue-50 text-blue-600 font-medium border-l-2 border-l-blue-600' : 'text-gray-700'
                    } ${section.isAppendix ? 'pl-6 text-xs' : ''}`}
                  >
                    {section.title}
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;