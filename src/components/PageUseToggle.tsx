import { useState } from 'react';

interface IProp {
  PageUseToggle: string;
}

export const PageUseToggle = ({ PageUseToggle }: IProp) => {
  const [showAds, setShowAds] = useState(false);

  const handleShowAds = () => {
    setShowAds(!showAds);
  };

  return (
    <>
      <p className="pageToggle">
        Welcome to this site - PageUseToggle - {PageUseToggle}
      </p>

      <hr />

      <button className="btnAds" onClick={handleShowAds}>
        Advertisements
      </button>

      {/* {showAds
        ? `Yes, show me advertisements`
        : 'No, do not show me advertisements'} */}

      <span style={{ color: showAds ? 'green' : 'red' }}>
        {showAds
          ? `Yes, show me advertisements`
          : 'No, do not show me advertisements'}
      </span>
    </>
  );
};
