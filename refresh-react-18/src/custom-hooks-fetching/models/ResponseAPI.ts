export interface CatFact {
  fact: string;
  length: number;
}

export interface CatImage {
  tags:      string[];
  createdAt: Date;
  updatedAt: Date;
  validated: boolean;
  owner:     string;
  file:      string;
  mimetype:  string;
  size:      number;
  _id:       string;
  url:       string;
}