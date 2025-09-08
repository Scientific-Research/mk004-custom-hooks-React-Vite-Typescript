interface IProp {
  PageUseToggle: string;
}

export const PageUseToggle = ({ PageUseToggle }: IProp) => {
  return (
    <>
      <p>Welcome to this site - PageUseToggle - {PageUseToggle}</p>
    </>
  );
};
