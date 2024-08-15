import React from 'react';
import { Image } from '../components/Image';
import Columns from '../components/Columns';
import { H2, Paragraph } from '../components/Text';
import pageData from '../data/pageData.json';

interface ComponentData {
  type: string;
  props: any;
  children?: ComponentData[];
}

const DynamicPage: React.FC = () => {
  return (
    <div>
    {pageData.map((component: ComponentData, index: number) => {
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
  );
};

export default DynamicPage;
