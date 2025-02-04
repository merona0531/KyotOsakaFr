import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import {
    CategorySelect,
    AddButton,
    DeleteButton,
    Input,
    ScheduleItem,
    DateRow,
    ScheduleList,
    ScheduleColumn,
    PlannerWrapper,
    FlightInfoContainer,
    FlightInfo,
    MemoContainer,
    MemoInput,
    SaveMemoButton,
    Logo,
    BtnWrapper,
    BtnWrapper2,
    Select,
    MemoDeleteButton,
    MemoItem,
    ModalButtonWrapper,
    ModalWrapper,
    ModalLabel, ModalInput, ModalSelect, ModalButton, ModalButton2, Logo2, HImg
} from './mainstyle';
import Awsome from '../../img/awesomepawsome.png';
import Heart from '../../img/heart.png';

const pastelColors = {
    "항공": "#d6f8ff",
    "이동": "#ffe9f6",
    "관광": "#f1d5ff",
    "아침": "#ffe1c9",
    "점심": "rgba(160,204,255,0.66)",
    "저녁": "#ffccee",
    "간식": "#ffffcc",
    "기타": "#ffffff",
    "숙소": "#ceffe5"
};

const WeeklyPlanner = () => {
    const [schedules, setSchedules] = useState({});
    const [memos, setMemos] = useState([]);
    const [newMemo, setNewMemo] = useState("");
    const [newTask, setNewTask] = useState("");
    const [selectedDate, setSelectedDate] = useState("24");
    const [selectedCategory, setSelectedCategory] = useState("항공");
    const [time, setTime] = useState("12:00");
    const [showForm, setShowForm] = useState(false);
    const [editingSchedule, setEditingSchedule] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const dates = ["24", "25", "26", "27", "28"];
    const categories = ["항공", "이동", "관광", "아침", "점심", "저녁", "간식", "기타", "숙소"];

    useEffect(() => {
        fetch("https://kyotosaka.up.railway.app/api/schedules")
            .then((res) => res.json())
            .then((data) => {
                const groupedSchedules = {};
                data.forEach(({ id, date, task, category, time }) => { // id 포함
                    if (!groupedSchedules[date]) groupedSchedules[date] = [];
                    groupedSchedules[date].push({ id, task, category, time, date }); // id 저장
                });
                for (let date in groupedSchedules) {
                    groupedSchedules[date].sort((a, b) => a.time.localeCompare(b.time));
                }
                setSchedules(groupedSchedules);
            });

        fetch("https://kyotosaka.up.railway.app/api/memo")
            .then((res) => res.json())
            .then((data) =>  setMemos(data));
    }, []);

    const addTask = async () => {
        if (newTask.trim() === "") return;
        const response = await fetch("https://kyotosaka.up.railway.app/api/schedules", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: selectedDate, task: newTask, category: selectedCategory, time })
        });
        const newSchedule = await response.json(); // 서버에서 ID 포함된 데이터 받기

        setSchedules(prevSchedules => {
            const updatedSchedules = { ...prevSchedules };
            if (!updatedSchedules[selectedDate]) updatedSchedules[selectedDate] = [];
            updatedSchedules[selectedDate] = [...updatedSchedules[selectedDate], newSchedule]
                .sort((a, b) => a.time.localeCompare(b.time));
            return updatedSchedules;
        });

        setNewTask("");
        setTime("12:00");
        setSelectedCategory("기타");
        setShowForm(false);
    };


    const deleteTask = async (date, index, id) => {
        if (!id) {
            console.error("삭제할 일정의 ID가 없습니다.");
            return;
        }

        await fetch(`https://kyotosaka.up.railway.app/api/schedules/${id}`, {
        method: "DELETE",
    });

    setSchedules((prevSchedules) => {
        const updatedSchedules = { ...prevSchedules };
        updatedSchedules[date] = updatedSchedules[date].filter((_, i) => i !== index);
        return updatedSchedules;
        });
    };

    const addMemo = async () => {
        if (newMemo.trim() === "") return;
        await fetch(`https://kyotosaka.up.railway.app/api/memo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ memo: newMemo })
        });
        setMemos([...memos, { memo: newMemo }]);
        setNewMemo("");
    };

    const deleteMemo = async (id) => {
        await fetch(`https://kyotosaka.up.railway.app/api/memo/${id}`, {
        method: "DELETE",
    });

    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));};

    const handleEditSchedule = (schedule) => {
        console.log("받아온 일정 데이터:", schedule); // ✅ 데이터 확인

        setEditingSchedule({
            id: schedule.id || null,
            task: schedule.task || '',
            category: schedule.category || '기타',
            time: schedule.time || '12:00',
            date: schedule.date || '',  // ✅ 기존 날짜 유지
            originalDate: schedule.date || '',  // ✅ 원래 날짜 저장
        });

        console.log("모달 열림 - 원래 날짜:", schedule.date); // ✅ 콘솔 확인
        setShowModal(true);
    };


    const handleUpdateSchedule = async () => {
        if (!editingSchedule || !editingSchedule.id) {
            console.error("수정할 일정 정보가 없습니다.");
            return;
        }

        await fetch(`https://kyotosaka.up.railway.app/api/schedules/${editingSchedule.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingSchedule),
        });

        setSchedules(prevSchedules => {
            const updatedSchedules = { ...prevSchedules };

            if (editingSchedule.date !== editingSchedule.originalDate) {
                updatedSchedules[editingSchedule.originalDate] =
                    updatedSchedules[editingSchedule.originalDate]?.filter(task => task.id !== editingSchedule.id) || [];
                if (!updatedSchedules[editingSchedule.date]) updatedSchedules[editingSchedule.date] = [];
                updatedSchedules[editingSchedule.date].push(editingSchedule);
            } else {
                updatedSchedules[editingSchedule.date] = updatedSchedules[editingSchedule.date].map(task =>
                    task.id === editingSchedule.id ? editingSchedule : task
                );
            }

            // 시간 기준 정렬 적용
            for (let date in updatedSchedules) {
                updatedSchedules[date].sort((a, b) => a.time.localeCompare(b.time));
            }

            return updatedSchedules;
        });

        setShowModal(false);
        setEditingSchedule(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingSchedule((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Logo src={Awsome}></Logo>
            </div>
            <PlannerWrapper>
                <FlightInfoContainer>
                    <FlightInfo>
                        <div>✈️ TW221 | PUS → KIX | 09:25 - 10:55</div>
                        <div>✈️ TW222 | KIX → PUS | 18:40 - 20:15</div>
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
                                <ScheduleItem
                                    key={index}
                                    style={{ backgroundColor: pastelColors[item.category] }}
                                    onClick={() => handleEditSchedule(item)}
                                >
                                    {item.time} <br />
                                    <span>{item.category}</span>
                                    <div>{item.task}</div>
                                    <DeleteButton onClick={(e) => {
                                        e.stopPropagation();  // 클릭 이벤트 전파 방지
                                        deleteTask(date, index, item.id);
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </DeleteButton>
                                </ScheduleItem>
                            ))}
                        </ScheduleColumn>
                    ))}
                </ScheduleList>
                <AddButton onClick={() => setShowForm(!showForm)}>일정 추가</AddButton>
                {showForm && (
                    <div>
                        <BtnWrapper>
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
                        </BtnWrapper>
                        <BtnWrapper2>
                            <Select onChange={(e) => setSelectedDate(e.target.value)}>
                                {dates.map((date) => (
                                    <option key={date} value={date}>{date}일</option>
                                ))}
                            </Select>
                            <Input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </BtnWrapper2>
                        <AddButton onClick={addTask}>추가</AddButton>
                    </div>
                )}
            </PlannerWrapper>

            {/* 수정 모달 */}
            <ReactModal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="일정 수정"
                ariaHideApp={false}
                style={{
                    content: {
                        width: window.innerWidth < 600 ? '85%' : '400px',
                        maxWidth:'400px',
                        margin: 'auto',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '10px',
                        padding: '20px',
                        backgroundColor: '#ffe9f2'
                },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }
                }}
            >
                <ModalWrapper>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Logo2 src={Awsome}></Logo2>
                    </div>
                    <div>
                        <ModalLabel>일정 제목:</ModalLabel>
                        <br/>
                        <ModalInput
                            type="text"
                            name="task"
                            value={editingSchedule?.task || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <ModalLabel>시간:</ModalLabel>
                        <br/>
                        <ModalInput
                            type="time"
                            name="time"
                            value={editingSchedule?.time || '12:00'}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{display:'flex'}}>
                        <div >
                            <ModalLabel>날짜:</ModalLabel>
                            <br/>
                            <ModalSelect
                                name="date"
                                value={editingSchedule?.date || selectedDate}
                                onChange={handleChange}
                            >
                                {dates.map((date) => (
                                    <option key={date} value={date}>{date}일</option>
                                ))}
                            </ModalSelect>
                        </div>
                        <div >
                            <ModalLabel>카테고리:</ModalLabel>
                            <br/>
                            <CategorySelect
                                name="category"
                                value={editingSchedule?.category || '기타'}
                                onChange={handleChange}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </CategorySelect>
                        </div>
                    </div>
                    <ModalButtonWrapper>
                        <ModalButton2 onClick={() => setShowModal(false)}>취소</ModalButton2>
                        <ModalButton onClick={handleUpdateSchedule}>
                            완료
                            <HImg src={Heart}/>
                        </ModalButton>
                    </ModalButtonWrapper>
                </ModalWrapper>

            </ReactModal>
            <MemoContainer>
                <h3>📌 메모</h3>
                <ul>
                    {memos.map((memo, index) => (
                        <MemoItem key={index}>
                            <li>
                                {memo.memo}
                            </li>
                            <MemoDeleteButton onClick={() => deleteMemo(memo.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </MemoDeleteButton>
                        </MemoItem>
                    ))}
                </ul>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '88%', display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <MemoInput value={newMemo} onChange={(e) => setNewMemo(e.target.value)} />
                        <SaveMemoButton onClick={addMemo}>추가</SaveMemoButton>
                    </div>
                </div>
            </MemoContainer>
        </>
    );
};

export default WeeklyPlanner;