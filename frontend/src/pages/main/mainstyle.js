import styled from "styled-components";

export const PlannerWrapper = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  background: #ffcccb;
  border-radius: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 8px;
  }
`;

export const ScheduleList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 10px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ScheduleColumn = styled.div`
  width: 18%;
  

  @media (max-width: 600px) {
    width: 18%;
    
  }
`;

export const ScheduleItem = styled.div`
  background: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  position: relative;

  div {
    margin-top: 3px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    color: #505050;
    @media (max-width: 600px) {
      font-size: 10px;

    }
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  color: rgba(255, 0, 0, 0.6);
  border: none;
  padding: 1px 1px;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Input = styled.input`
  width: 80%;
  font-size: 15px;
  padding: 5px;
  margin-top: 10px;

  @media (max-width: 600px) {
    width: 70%;
  }
`;
export const Select=styled.select`
  padding: 5px;
  margin-top: 10px;
  font-size: 15px;
  margin-right: 20px;

  @media (max-width: 600px) {
    width: 20%;
  }
`
export const AddButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const BtnWrapper=styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`

export const BtnWrapper2=styled.div`
  @media (max-width: 600px) {
    display: flex;
  }
`

export const CategorySelect = styled.select`
  margin-top: 10px;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  
`;

export const FlightInfoContainer = styled.div`
  background: #f8f9fa;
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

export const FlightInfo = styled.div`
  font-size: 16px;
  color: #333;
  font-family: monospace;
  font-weight: bold;
  strong {
    font-size: 18px;
    color: #000;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const MemoContainer = styled.div`
  background: #fff3cd;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }
`;

export const MemoInput = styled.textarea`
  width: 80%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

export const SaveMemoButton = styled.button`
  padding: 10px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 350px;
  margin-top: 20px;
  margin-bottom: -10px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Logo2 = styled.img`
  width: 350px;


  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const MemoItem = styled.div`
  display: flex;
  width: 85%;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 2px;
  border-bottom: 1px solid #a9a9a9;

`;

export const MemoDeleteButton = styled.button`
  background: transparent;
  color: rgba(255, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  font-size: 12px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  z-index: 3;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555;
  
  
`;

export const ModalInput = styled(Input)`
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

export const ModalSelect = styled(Select)`
  margin-top: 10px;
  padding: 5px;
  font-size: 15px;
  width: 80%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ModalButton = styled(AddButton)`
  flex: 1;
  padding: 10px;
  background-color: #ffc9e1;
  color: #764159;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #764159;
  }
`;
export const HImg=styled.img`
  width: 25px;
  margin-left: 10px;
`

export const ModalButton2 = styled(AddButton)`
  flex: 1;
  background-color: #ffe9f2;
  padding: 10px;
  color: #764159;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  
`;
