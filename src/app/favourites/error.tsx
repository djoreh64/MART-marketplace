"use client";

import Button from "@components/button";
import { ErrorPage } from "@lib/styled";

interface IError {
  reset: () => void;
}

const FavouritesError = ({ reset }: IError) => {
  return (
    <ErrorPage>
      <h2>Что-то пошло не так. Попробуйте позже</h2>
      <Button primary onClick={() => reset()}>
        Попробовать еще раз
      </Button>
    </ErrorPage>
  );
};

export default FavouritesError;
