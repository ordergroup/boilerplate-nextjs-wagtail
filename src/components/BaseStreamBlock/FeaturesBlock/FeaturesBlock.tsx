interface FeaturesBlockProps {
  variant: string;
}

export const FeaturesBlock = ({ variant }: FeaturesBlockProps) => {
  return <h1>Features Block {variant}</h1>;
};
