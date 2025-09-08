interface Iprop {
  PageUseFetch: string;
}

export const PageUseFetch = ({ PageUseFetch }: Iprop) => {
  return (
    <>
      <p>Welcome to this site - PageUseFetch - {PageUseFetch}</p>
    </>
  );
};
