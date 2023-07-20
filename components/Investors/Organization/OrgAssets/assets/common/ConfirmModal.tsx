import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../Icons";
import { GenButton } from "../buttons";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  width: 600px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 2px 2px 4px 0px rgba(160, 170, 186, 0.15);
  padding: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: var(--black-80, #324a64);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.4px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #aaa;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  color: var(--black-70, #43566a);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 150% */
  letter-spacing: -0.4px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  gap: 20px;
`;

const TextButton = styled.button`
  background: #fff;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: var(--blue-90, #3798ff);
  border: 0;
  cursor: pointer;
  cursor: pointer;
`;

const ModalComponent = ({
  isOpen,
  title,
  content,
  onClose,
  onConfirm,
  onCancel,
}: ModalProps) => {
  if (!isOpen) return null; // Don't render anything if the modal is closed

  return (
    <ModalBackdrop>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          <TextButton onClick={onCancel}>Cancel</TextButton>
          <GenButton onClick={onConfirm}>Confirm</GenButton>
        </ModalFooter>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default ModalComponent;
