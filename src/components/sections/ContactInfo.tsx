import React from 'react';
import { Building2, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { CompanyInfo } from '../../types/proposal';

interface ContactInfoProps {
  companyInfo: CompanyInfo;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ companyInfo }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">회사 정보</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5 text-gray-500" />
              <span>{companyInfo.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>{companyInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-500" />
              <span>{companyInfo.website}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">연락처</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>{companyInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>{companyInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center p-6 bg-gray-50 rounded-lg">
        <p className="text-lg text-gray-700 mb-4">
          <strong>지금이 비트베이크와 함께 Web3의 미래를 만들어갈 최적의 시점입니다.</strong>
        </p>
        <p className="text-gray-600">
          투자 관련 문의사항이 있으시면 언제든지 연락해 주시기 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;