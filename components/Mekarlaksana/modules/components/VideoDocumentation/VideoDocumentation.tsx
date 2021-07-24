import { StyledVideoDocumentation } from './video-documentation.styled';

const VideoDocumentation = () => {
  return (
    <StyledVideoDocumentation>
      <div className="title">Video Dokumentasi Pilot Project Aquifera </div>
      <iframe
        height="400"
        width="700"
        src="https://www.youtube.com/embed/5ZCEyFlP7QQ"
        className="iframe"
      ></iframe>
    </StyledVideoDocumentation>
  );
};

export default VideoDocumentation;
