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
  color: red;
  border: none;
  padding: 2px 5px;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 600px) {
    padding: 1px;
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


  @media (max-width: 600px) {
    width: 20%;
  }
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

export const MemoItem = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 2px;
  border-bottom: 1px solid #a9a9a9;

`;

export const MemoDeleteButton = styled.button`
  background: transparent;
  color: red;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;
