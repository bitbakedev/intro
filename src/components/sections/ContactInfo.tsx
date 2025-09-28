import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CompanyInfo } from '../../types/proposal';

interface ContactInfoProps {
  companyInfo: CompanyInfo;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ companyInfo }) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <span className="text-lg">coinbakenow@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <span className="text-lg">010-5701-0959</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;