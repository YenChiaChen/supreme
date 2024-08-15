import React, { useState } from 'react';
import { Image } from '../components/Image';
import Columns from '../components/Columns';
import { H2 } from '../components/Text';
import { Paragraph } from '../components/Text';

interface ComponentData {
    type: string;
    props: any;
    children?: ComponentData[];
  }
  
  const AdminPage: React.FC = () => {
    const [components, setComponents] = useState<ComponentData[]>([]);


    const generateJSON = (components: ComponentData[]) => {
        return JSON.stringify(components, null, 2);
      };
    
      const saveJSONToFile = (jsonData: string) => {
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pageData.json';
        a.click();
      };

      const handleSave = () => {
        const jsonData = generateJSON(components);
        saveJSONToFile(jsonData);
      };
  
    const addComponent = (type: string, props: any, parentIndex?: number) => {
      if (parentIndex !== undefined) {
        const updatedComponents = [...components];
        updatedComponents[parentIndex].children = [...(updatedComponents[parentIndex].children || []), { type, props }];
        setComponents(updatedComponents);
      } else {
        setComponents([...components, { type, props }]);
      }
    };
  
    return (
      <div className='text-black mt-[150px]'>
           <h1>Page Builder</h1>
      <div>
        <button onClick={() => addComponent('Columns', { columns: 2, gap: 'gap-4' })}>
          Add Columns
        </button>
        <button onClick={() => addComponent('Tab', { title: 'New Tab', icon: <i className="fas fa-star"></i> })}>
          Add Tab
        </button>
        <button onClick={() => addComponent('H2', { text: 'Sample Subtitle' })}>
          Add H2
        </button>
        <button onClick={() => addComponent('Paragraph', { text: 'This is a sample paragraph.' })}>
          Add Paragraph
        </button>
        <button onClick={() => addComponent('Image', { src: '/images/photo1.jpg', alt: 'Sample Image' })}>
          Add Image
        </button>
      </div>
      <div>
        {components.map((component, index) => {
          switch (component.type) {
            case 'Columns':
              return (
                <Columns key={index} {...component.props}>
                  {component.children && component.children.map((child, childIndex) => {
                    switch (child.type) {
                      case 'H2':
                        return <H2 key={childIndex} {...child.props} />;
                      case 'Paragraph':
                        return <Paragraph key={childIndex} {...child.props} />;
                      case 'Image':
                        return <Image key={childIndex} {...child.props} />;
                      default:
                        return null;
                    }
                  })}
                </Columns>
              );
            case 'H2':
              return <H2 key={index} {...component.props} />;
            case 'Paragraph':
              return <Paragraph key={index} {...component.props} />;
            case 'Image':
              return <Image key={index} {...component.props} />;
            default:
              return null;
          }
        })}
      </div>


        <button onClick={handleSave} className="mt-4 p-2 bg-blue-500">
        Save Page as JSON
      </button>
      </div>
    );
  };
  
  export default AdminPage;