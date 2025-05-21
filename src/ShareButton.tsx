// src/components/ShareButton.jsx
import React from 'react'; // Fixed the import statement
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton, 
  FacebookIcon, 
  TwitterIcon, 
  WhatsappIcon 
} from 'react-share'; // Ensure this is the correct package
import './ShareButton.css'; // Ensure to create this CSS file

const ShareButton = () => {
  const shareUrl = window.location.href;
  const title = 'Check out this perfume!';

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      {/* Add more platforms as needed */}
    </div>
  );
};

export default ShareButton;
