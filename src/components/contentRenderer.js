import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { StructuredText } from 'react-datocms';

const ContentRenderer = ({content}) => {
  return <div>
    <StructuredText data={content} renderBlock={({record})=>{
      console.log(record);
      return record.__typename === 'DatoCmsImageInline' && <GatsbyImage image={record.image.gatsbyImageData} alt='info'/>;
    }}/>
  </div>
}

export default ContentRenderer;