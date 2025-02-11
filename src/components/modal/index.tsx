"use client";

import { createPortal } from "react-dom";
import * as S from "./styled";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import Image from "next/image";

interface Props {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
}

const Modal: FC<PropsWithChildren & Props> = ({
  children,
  isVisible,
  setVisible,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const close = () => setVisible(false);

  useEffect(() => {
    if (isVisible) setIsModalVisible(true);
    else
      setTimeout(() => {
        setIsModalVisible(false);
      }, 100);
  }, [isVisible]);

  return isModalVisible
    ? createPortal(
        <S.Modal $isOpen={isVisible} onClick={close}>
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
      )
    : null;
};

export default Modal;
