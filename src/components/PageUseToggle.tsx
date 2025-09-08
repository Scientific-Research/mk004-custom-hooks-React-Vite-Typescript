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
    <div className="pageUseToggle">
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

      {/* First Solution */}
      {/* <span style={{ color: showAds ? 'green' : 'red' }}>
        {showAds
          ? `Yes, show me advertisements`
          : 'No, do not show me advertisements'}
      </span> */}

      {/* Second Solution */}
      <span className={showAds ? 'positive' : 'negative'}>
        {showAds
          ? `Yes, show me advertisements`
          : 'No, do not show me advertisements'}
      </span>
    </div>
  );
};
