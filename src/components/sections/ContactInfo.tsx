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
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">회사 정보</h4>
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
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">연락처</h4>
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
    </div>
  );
};

export default ContactInfo;