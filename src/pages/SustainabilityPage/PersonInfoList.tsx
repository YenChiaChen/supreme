import React from 'react';
import { List } from '../../components/ui';

interface PersonInfo {
  position: string;
  name: string;
  experience: string[];
  currentRoles: string[];
}

interface CollapseListProps {
  people: PersonInfo[];
}

const PersonInfoList: React.FC<CollapseListProps> = ({ people }) => {
  const oddPeople = people.filter((_, index) => index % 2 === 0);
  const evenPeople = people.filter((_, index) => index % 2 !== 0);

  return (
    <div className="grid grid-cols-2 gap-12 mt-12 bg-white">
      <div className="flex flex-col gap-4">
        {oddPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4" key={index}>
            <input type="checkbox" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 text-blue tracking-widest text-2xl">
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-white">
              <div className="content">
                <p className='mt-2'>主要經（學）歷：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className='my-1'>{item}</li>
                  ))}
                </ul>
                <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className='my-1'>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {evenPeople.map((person, index) => (
          <div className="collapse collapse-arrow shadow p-4 mb-4" key={index}>
            <input type="checkbox" />
            <div className="collapse-title flex">
              <span className="w-32 text-lg">{person.position}</span>
              <span className="ml-4 text-blue tracking-widest text-2xl">
                {person.name}
              </span>
            </div>
            <div className="collapse-content bg-white">
              <div className="content">
                <p>主要經（學）歷：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.experience.map((item, idx) => (
                    <li key={idx} className='my-1'>{item}</li>
                  ))}
                </ul>
                <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                <ul className="content list-disc pl-8 tracking-wide mt-4">
                  {person.currentRoles.map((role, idx) => (
                    <li key={idx} className='my-1'>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonInfoList;
