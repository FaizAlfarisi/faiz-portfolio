export type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

export type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
};

export type Projects = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}
