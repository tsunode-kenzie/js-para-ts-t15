import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { schema } from "./validations";
import Input from "../../components/Input";
import { Button } from "../../styles/Button";
import {IBook} from '../../components/Card';
// books
// [GET] /books busca todos os livros
// [GET] /books/1 busca um livro especifico
// [DELETE] /books/1 busca um livro especifico
// [POST] /books busca um livro especifico

type IRegisterBook = Omit<IBook, 'id'>;

const RegisterBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterBook>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  console.log("Teste", errors);

  const registerBook = async (data: IRegisterBook) => {
    console.log(data);

    try {
      const response = await api.post("/books", data);
      console.log(response);
      const id = response.data.id;

      navigate(`/${id}`);
      // toast
    } catch (error) {
      console.error(error);
      reset();
      // toast
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(registerBook)}>
        <Input
          label="Nome:"
          id="name"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Capa:"
          id="cover"
          type="text"
          error={errors.cover?.message}
          {...register("cover")}
        />
        <Input
          label="Publicado em:"
          id="published"
          type="text"
          error={errors.published?.message}
          {...register("published")}
        />
        <Input
          id="publishingCompany"
          type="text"
          label="Editora"
          error={errors.publishingCompany?.message}
          {...register("publishingCompany")}
        />
        <Input
          id="numberPages"
          type="text"
          label="Nº de páginas"
          error={errors.numberPages?.message}
          {...register("numberPages")}
        />
        <Input
          id="licensor"
          type="text"
          label="Licenciador"
          error={errors.licensor?.message}
          {...register("licensor")}
        />
        <Input
          id="category"
          type="text"
          label="Categoria"
          error={errors.category?.message}
          {...register("category")}
        />
        <Input
          id="genre"
          type="text"
          label="Gênero"
          error={errors.genre?.message}
          {...register("genre")}
        />
        <Input
          id="art"
          type="text"
          label="Artista"
          error={errors.art?.message}
          {...register("art")}
        />
        <Input
          id="editor"
          type="text"
          label="Editor"
          error={errors.editor?.message}
          {...register("editor")}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </main>
  );
};

export default RegisterBook;
