import React from 'react';
import { TeamMember } from '../types/proposal';
import { User } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <img src="/ic_linkedin.png" alt="LinkedIn" className="w-4 h-4" />
            </a>
          )}
        </div>
        {member.position && (
          <p className="text-blue-600 font-medium">{member.position}</p>
        )}
      </div>
      <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{member.experience}</div>
    </div>
  );
};

export default TeamCard;