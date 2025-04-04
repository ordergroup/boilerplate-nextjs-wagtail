interface HeaderBlockProps {
  variant: string;
}

export const HeaderBlock = ({ variant }: HeaderBlockProps) => {
  return <h1>Header Block {variant}</h1>;
};
