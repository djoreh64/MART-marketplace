"use client";

import { createPortal } from "react-dom";
import * as S from "./styled";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
}

const Modal: FC<PropsWithChildren & Props> = ({ children, isVisible }) => {
  if (typeof window === "undefined") return null;

  const [isModalVisible, setIsModalVisible] = useState(true);
  const router = useRouter();
  const close = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      router.back();
    }, 100);
  };

  useEffect(() => {
    if (isVisible) setIsModalVisible(true);
    else
      setTimeout(() => {
        setIsModalVisible(false);
      }, 200);
  }, [isVisible]);

  return createPortal(
    <S.Modal $isOpen={isModalVisible} onClick={close}>
      <FocusLock>
        <S.Content onClick={(e) => e.stopPropagation()}>
          <S.Button onClick={close}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_PATH}/icons/modal/close.svg`}
              width={26}
              height={26}
              alt="Закрыть"
            />
          </S.Button>
          {children}
        </S.Content>
      </FocusLock>
    </S.Modal>,
    document.body
  );
};

export default Modal;
