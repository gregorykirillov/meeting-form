import React, { useState } from 'react'
import {
  FormLayout,
  Select,
  Button,
  Div,
  Group,
  Textarea,
  DatePicker
} from '@vkontakte/vkui'

import style from './style.module.scss'

const MeetingForm = () => {
  const currentDate = new Date()
  const [tower, setTower] = useState()
  const [floor, setFloor] = useState()
  const [roomNumber, setRoomNumber] = useState()
  const [date, setDate] = useState(currentDate.toISOString().substring(0, 10))
  const [comment, setComment] = useState()

  const handleTowerChange = (e) => {
    setTower(e.target.value)
  }

  const handleFloorChange = (e) => {
    setFloor(parseInt(e.target.value, 10))
  }

  const handleRoomNumberChange = (e) => {
    setRoomNumber(parseInt(e.target.value, 10))
  }

  const handleDateChange = (value) => {
    console.log(value)
    setDate(value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      tower,
      floor,
      roomNumber,
      date,
      comment
    })
  }

  const TOWERS = ['Башня А', 'Башня Б']
  const towersOptions = TOWERS.map((tower) => ({ value: tower, label: tower }))

  const FLOORS = 25
  const floorsOptions = Array(FLOORS)
    .fill(0)
    .map((_, ind) => ({
      value: ind + 3,
      label: ind + 3
    }))

  const ROOMS = 10
  const roomsOptions = Array(ROOMS)
    .fill(0)
    .map((_, ind) => ({
      value: ind + 1,
      label: ind + 1
    }))

  return (
    <FormLayout onSubmit={handleSubmit} className={style.form}>
      <Select
        top="Башня"
        placeholder="Выберите башню"
        value={tower}
        onChange={handleTowerChange}
        options={towersOptions}
        status={tower ? 'valid' : 'error'}
        required
      />
      <Select
        top="Этаж"
        placeholder="Выберите этаж"
        value={floor}
        onChange={handleFloorChange}
        options={floorsOptions}
        status={floor ? 'valid' : 'error'}
        required
      />
      <Select
        top="Номер комнаты"
        placeholder="Выберите номер комнаты"
        value={roomNumber}
        onChange={handleRoomNumberChange}
        options={roomsOptions}
        status={roomNumber ? 'valid' : 'error'}
        required
      />
      <DatePicker
        onDateChange={handleDateChange}
        min={{
          day: currentDate.getDay(),
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear()
        }}
        max={{
          day: currentDate.getDay(),
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear() + 1
        }}
        defaultValue={{
          day: currentDate.getDate(),
          month: currentDate.getMonth() + 1,
          year: currentDate.getFullYear()
        }}
      />
      <Group top="Комментарий">
        <Div>
          <Textarea value={comment} onChange={handleCommentChange} />
        </Div>
      </Group>
      <Button size="xl" type="submit">
        Отправить
      </Button>
    </FormLayout>
  )
}

export default MeetingForm
