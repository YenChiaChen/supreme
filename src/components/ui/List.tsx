import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListProps, InfoListProps, CollapseListProps } from '../type'


export const List: React.FC<ListProps> = ({ items, listType = 'decimal', className }) => {
    return (
      <ul className={`tracking-wide text-md leading-8 space-y-2 list-${listType} list-outside pl-8 mt-8 text-[#555555] ${className || ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            {item.text}
            {item.subItems && item.subItems.length > 0 && (
              <ul className={`ml-6 list-outside`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    - &nbsp;{subItem.text}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )
}

export const InfoList: React.FC<{ rows: InfoListProps[] }> = ({ rows }) => {
    return (
      <table className='border-t-[2px] border-light_gray w-full'>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className='border-b border-light_gray'>
              {row.title && (
                <td className='py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12'>
                  {row.title}
                </td>
              )}
              <td className='py-8 text-[16px] text-[#555555] font-light'>
                {row.content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  export const CollapseList: React.FC<CollapseListProps> = ({ title, content, color='#555555', icon }) => {
    return (
        <div className='collapse collapse-arrow shadow p-4  bg-[#FFEDF2]'>
            <input type='checkbox' />
            <div className='collapse-title flex font-semibold items-center' style={{color: color}}>
                {icon && <FontAwesomeIcon icon={icon} className='mr-3 text-3xl text-pink' />} 
                <span className=''>{ title }</span>
            </div>
            <div className='collapse-content'>
                <List items={content} />
            </div>
        </div>


    )}
