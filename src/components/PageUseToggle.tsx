import { useState } from 'react';

interface IProp {
  PageUseToggle: string;
}

export const PageUseToggle = ({ PageUseToggle }: IProp) => {
  const [showAds, setShowAds] = useState(false);

  return (
    <>
      <p className="pageToggle">
        Welcome to this site - PageUseToggle - {PageUseToggle}
      </p>
      <hr />
      <button className="btnAds">Advertisements</button>
      {showAds
        ? 'Yes, show me advertisements'
        : 'No, do not show me advertisements'}
    </>
  );
};
