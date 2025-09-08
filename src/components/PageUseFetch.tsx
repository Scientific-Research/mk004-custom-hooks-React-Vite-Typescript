interface Iprop {
  PageUserFetch: string;
}

export const PageUserFetch = ({ PageUserFetch }: Iprop) => {
  return (
    <>
      <p>Welcome to this site - PageUserFetch - {PageUserFetch}</p>
    </>
  );
};
