interface ContactBlockProps {
  variant: string;
}

export const ContactBlock = ({ variant }: ContactBlockProps) => {
  return <h1>Contact block {variant}</h1>;
};
