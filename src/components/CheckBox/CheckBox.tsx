import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const CheckboxFalse = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #d1d1d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-sizing: border-box;
`;

const CheckboxTrue = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.BLUE_HEAVY};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <Container onClick={onChange}>
      {checked ? (
        <CheckboxTrue>
          <Image
            src="/icons/check.svg"
            alt="체크 아이콘"
            width={15}
            height={11}
          />
        </CheckboxTrue>
      ) : (
        <CheckboxFalse />
      )}
    </Container>
  );
};

export default Checkbox;
