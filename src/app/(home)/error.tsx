"use client";

import { useEffect } from "react";
import Button from "@components/button";
import { ErrorPage } from "@lib/styled";

interface IError {
  error: Error;
  reset: () => void;
}

const HomeError = ({ error, reset }: IError) => {
  useEffect(() => {
    console.error("Ошибка в Home:", error);
  }, []);

  return (
    <ErrorPage>
      <h2>{error.message}</h2>
      <Button primary onClick={() => reset()}>
        Попробовать еще раз
      </Button>
    </ErrorPage>
  );
};

export default HomeError;
