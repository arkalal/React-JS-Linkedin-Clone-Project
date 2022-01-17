import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widget-articleLeft">
                <FiberManualRecordIcon></FiberManualRecordIcon>
            </div>

            <div className="widget-articleRight">
                <h4> {heading} </h4>
                <p> {subtitle} </p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>

            {newsArticle('Arkalal is Back', 'Top News - 1,000 Readers')}
            {newsArticle('Some Good News', 'Top News - 2,000 Readers')}
            {newsArticle('Arkalal is Building Good Web Apps', 'Top News - 1,000 Readers')}
            {newsArticle('Top React JS Apps to Build For Business', 'Top News - 5,000 Readers')}
        </div>
    )
}

export default Widgets
