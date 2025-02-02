import styled from "styled-components";

export const PlannerWrapper = styled.div`
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  background: #ffcccb;
  border-radius: 8px;
`;

export const ScheduleList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 10px;
`;

export const ScheduleColumn = styled.div`
  width: 18%;
`;

export const ScheduleItem = styled.div`
  background: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  position: relative;
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
`;

export const Input = styled.input`
  width: 80%;
  padding: 5px;
  margin-top: 10px;
`;

export const AddButton = styled.button`
  margin-top: 5px;
  padding: 5px;
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

export const CategorySelect = styled.select`
  margin-top: 10px;
  padding: 5px;
`;

export const FlightInfoContainer = styled.div`
    background: #f8f9fa;
    padding: 10px 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

export const FlightInfo = styled.div`
    font-size: 16px;
    color: #333;
    strong {
        font-size: 18px;
        color: #000;
    }
`;

export const MemoContainer = styled.div`
    background: #fff3cd;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    
`;

export const MemoInput = styled.textarea`
    width: 90%;
    height: 80px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
`;

export const SaveMemoButton = styled.button`
    margin-top: 10px;
    padding: 8px 12px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;
export const Logo =styled.img`
    width: 350px;
    margin-top: 20px;

`
