import React from 'react';
import ContentRenderer from './contentRenderer';
import './gridColumn.css';
const GridColumn = ({ mobileWidth, tabletWidth, desktopWidth, content }) => {
  const contentRenderer = <ContentRenderer content={content} />
  return (
    <>
      <div className='grid-col grid-col-desktop' style={{ width: `${desktopWidth}%` }}>
        {contentRenderer}
      </div>
      <div className='grid-col grid-col-tablet' style={{ width: `${tabletWidth}%` }}>
        {contentRenderer}
      </div>
      <div className='grid-col grid-col-mobile' style={{ width: `${mobileWidth}%` }}>
        {contentRenderer}
      </div>
    </>
  )
}

export default GridColumn;