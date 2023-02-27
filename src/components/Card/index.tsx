import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export interface IBook {
  id: number;
  name: string;
  cover: string;
  published: string;
  publishingCompany: string;
  numberPages: number;
  licensor: string;
  category: string;
  genre: string;
  art: string;
  editor: string;
}

interface ICardProps {
  book: IBook;
}

const Card = ({ book }: ICardProps) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Container isAdmin={isAdmin}>
      <Link to={`${book.id}`}>
        <img src={book.cover} alt={book.name} />
        <p>{book.name}</p>
        <p>{book.art}</p>
      </Link>
    </Container>
  );
};

export default Card;

{/* <button disabled></button>
<input type="text" name="" id="" readOnly /> */}
