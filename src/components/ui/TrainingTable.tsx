import React from 'react';

interface Training {
  organization: string;
  course: string;
  startTime: string;
  endTime: string;
  hours: string;
}

interface Person {
  name: string;
  trainings: Training[];
}

interface TrainingTableProps {
  data: Person[];
}

const TrainingTable: React.FC<TrainingTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      {data.map((person, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl mb-4">{person.name}</h2>
          <table className="min-w-full bg-white">
            <thead className='bg-orange text-white'>
              <tr>
                <th className="py-2 px-4 border-b  content">進修機構</th>
                <th className="py-2 px-4 border-b  content">課程名稱</th>
                <th className="py-2 px-4 border-b  content">進修日期（起）</th>
                <th className="py-2 px-4 border-b  content">時數</th>
              </tr>
            </thead>
            <tbody>
              {person.trainings.map((training, idx) => (
                <tr key={idx}>
                  <td className="py-3 px-4 border-b-[1px] border-light_gray  content">{training.organization}</td>
                  <td className="py-3 px-4 border-b-[1px] border-light_gray  content">{training.course}</td>
                  <td className="py-3 px-4 border-b-[1px] border-light_gray  content">{training.startTime}</td>
                  <td className="py-3 px-4 border-b-[1px] border-light_gray  content">{training.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TrainingTable;
