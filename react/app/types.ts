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

export type User = {
  username?: string;
  password: string;
  email: string;
};

export type PropsUser = {
  user?: User;
  onSave: (data: any) => void;
};
