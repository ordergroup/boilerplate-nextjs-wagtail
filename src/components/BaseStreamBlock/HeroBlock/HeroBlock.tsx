interface HeroBlockProps {
  variant: string;
}

export const HeroBlock = ({ variant }: HeroBlockProps) => {
  return <h1>Hero block {variant}</h1>;
};
