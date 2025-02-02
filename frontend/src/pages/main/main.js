import React, { useState, useEffect } from "react";
import {
    CategorySelect, AddButton, DeleteButton, Input,
    ScheduleItem, DateRow, ScheduleList, ScheduleColumn, PlannerWrapper,
    FlightInfoContainer, FlightInfo, MemoContainer, MemoInput, SaveMemoButton, Logo
} from './mainstyle';
import Awsome from '../../img/AWSOMEPOSSOME.png'

const WeeklyPlanner = () => {
    const [schedules, setSchedules] = useState({});
    const [memos, setMemos] = useState([]);
    const [newMemo, setNewMemo] = useState("");
    const [newTask, setNewTask] = useState("");
    const [selectedDate, setSelectedDate] = useState("24");
    const [selectedCategory, setSelectedCategory] = useState("기타");
    const [time, setTime] = useState("12:00");
    const [showForm, setShowForm] = useState(false);
    const dates = ["24", "25", "26", "27", "28"];
    const categories = ["항공", "관광", "아침", "점심", "저녁", "간식", "기타", "숙소"];

    useEffect(() => {
        fetch("http://localhost:8080/api/schedules")
            .then((res) => res.json())
            .then((data) => {
                const groupedSchedules = {};
                data.forEach(({ date, task, category, time }) => {
                    if (!groupedSchedules[date]) groupedSchedules[date] = [];
                    groupedSchedules[date].push({ task, category, time });
                });
                for (let date in groupedSchedules) {
                    groupedSchedules[date].sort((a, b) => a.time.localeCompare(b.time));
                }
                setSchedules(groupedSchedules);
            });

        fetch("http://localhost:8080/api/memo")
            .then((res) => res.json())
            .then((data) =>  setMemos(data));
    }, []);

    const addTask = async () => {
        if (newTask.trim() === "") return;
        await fetch("http://localhost:8080/api/schedules", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: selectedDate, task: newTask, category: selectedCategory, time })
        });
        setSchedules({
            ...schedules,
            [selectedDate]: [...(schedules[selectedDate] || []), { task: newTask, category: selectedCategory, time }].sort((a, b) => a.time.localeCompare(b.time))
        });
        setNewTask("");
        setTime("12:00");
        setSelectedCategory("기타");
        setShowForm(false);
    };

    const addMemo = async () => {
        if (newMemo.trim() === "") return;
        await fetch("http://localhost:8080/api/memo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ memo: newMemo })
        });
        setMemos([...memos, newMemo]);
        setNewMemo("");
    };

    return (
        <>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <Logo src={Awsome}></Logo>
            </div>
            <PlannerWrapper>
                <FlightInfoContainer>
                    <FlightInfo>
                        <div>✈️ TW221 | 김해국제공항 → 간사이국제공항 | 09:25 - 10:55</div>
                        <div>✈️ TW222 | 간사이국제공항 → 김해국제공항 | 18:40 - 20:15</div>
                    </FlightInfo>
                </FlightInfoContainer>
            </PlannerWrapper>
            <PlannerWrapper>
                <DateRow>
                    {dates.map((date) => (
                        <div key={date}>{date}</div>
                    ))}
                </DateRow>
                <ScheduleList>
                    {dates.map((date) => (
                        <ScheduleColumn key={date}>
                            {(schedules[date] || []).map((item, index) => (
                                <ScheduleItem key={index}>
                                    {item.time} <br/>
                                    {item.task}
                                    <DeleteButton>X</DeleteButton>
                                </ScheduleItem>
                            ))}
                        </ScheduleColumn>
                    ))}
                </ScheduleList>
                <AddButton onClick={() => setShowForm(!showForm)}>일정 추가</AddButton>
                {showForm && (
                    <div>
                        <Input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="일정 제목 입력..."
                        />
                        <CategorySelect onChange={(e) => setSelectedCategory(e.target.value)}>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </CategorySelect>
                        <Input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <select onChange={(e) => setSelectedDate(e.target.value)}>
                            {dates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                        <AddButton onClick={addTask}>추가</AddButton>
                    </div>
                )}
                <MemoContainer>
                    <h3>📌 메모</h3>
                    <ul>
                        {memos.map((memo, index) => (
                            <li key={index}>{memo.memo}</li>
                        ))}
                    </ul>
                    <MemoInput value={newMemo} onChange={(e) => setNewMemo(e.target.value)} />
                    <SaveMemoButton onClick={addMemo}>추가하기</SaveMemoButton>
                </MemoContainer>
            </PlannerWrapper>
        </>
    );
};

export default WeeklyPlanner;