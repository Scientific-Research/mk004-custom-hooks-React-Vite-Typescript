interface IProp {
  PageWelcome: string;
}

export const PageWelcome = ({ PageWelcome }: IProp) => {
  return (
    <>
      <p>Welcome to this site - PageWelcome - {PageWelcome}</p>
    </>
  );
};
