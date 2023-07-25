import React from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';
import VideoPlayer from './VideoPlayer';

function Popup(props) {
    const { data } = useSelector(videoDetailsSelector);

    return (
        <div className="modal" tabIndex="-1" id='video-modal'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <VideoPlayer videosList={data?.videos.results}/>
              <p>{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Popup;