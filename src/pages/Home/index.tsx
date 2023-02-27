import { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Card, { IBook } from "../../components/Card";
import { api } from "../../services/api";
import { Link } from "../../styles/Button";
import { CardsContainer, Section } from "./styles";

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const { bookId } = useParams();
  const teste = useRef();

  useEffect(() => {
    async function loadBooksData() {
      try {
        const response = await api.get<IBook[]>("/books");
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadBooksData();
  }, []);

  return (
    <Section>
      <Link to='/register'>Cadastrar Livro</Link>
      {bookId ? <Outlet /> : <h1>Selecione um livro abaixo</h1>}

      <CardsContainer>
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Home;
