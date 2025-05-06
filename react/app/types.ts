export type Movie = {
  id?: string;
  title: string;
  director?: string;
  plot?: string;
  releaseDate?: string;
  image?: string;
};

export type Props = {
  movie?: Movie;
  onSave: (data: any) => void;
};
