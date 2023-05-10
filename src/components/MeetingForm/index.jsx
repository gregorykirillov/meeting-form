import React from 'react'
import {
  FormLayout,
  Select,
  Button,
  Textarea,
  DatePicker,
  Panel,
  Title
} from '@vkontakte/vkui'

import { RequiredInputWrapper } from '../'
import useDate from './useDate'
import { TimeTypes, options, dateValues } from './consts'
import { TimeSelector } from '@/uikit'

import style from './style.module.scss'

const MeetingForm = () => {
  const {
    time,
    floor,
    tower,
    comment,
    roomNumber,
    handleSubmit,
    handleTimeChange,
    handleDateChange,
    handleTowerChange,
    handleFloorChange,
    handleCommentChange,
    handleRoomNumberChange
  } = useDate()

  return (
    <Panel>
      <div className={style.formContainer}>
        <Title>Форма бронирования переговорной</Title>
        <FormLayout onSubmit={handleSubmit} className={style.form}>
          <RequiredInputWrapper>
            <Select
              placeholder="Выберите башню"
              value={tower}
              onChange={handleTowerChange}
              options={options.towersOptions}
            />
          </RequiredInputWrapper>
          <RequiredInputWrapper>
            <Select
              placeholder="Выберите этаж"
              value={floor}
              onChange={handleFloorChange}
              options={options.floorsOptions}
            />
          </RequiredInputWrapper>
          <RequiredInputWrapper>
            <Select
              placeholder="Выберите номер комнаты"
              value={roomNumber}
              onChange={handleRoomNumberChange}
              options={options.roomsOptions}
            />
          </RequiredInputWrapper>
          <DatePicker
            onDateChange={handleDateChange}
            min={dateValues.min}
            max={dateValues.max}
            defaultValue={dateValues.default}
          />
          <div className={style.timeWrapper}>
            <TimeSelector
              value={time[TimeTypes.Start]}
              onTimeChange={(time) => handleTimeChange(time, TimeTypes.Start)}
              required
            />
            <TimeSelector
              value={time[TimeTypes.End]}
              onTimeChange={(time) => handleTimeChange(time, TimeTypes.End)}
              required
            />
          </div>
          <Textarea
            value={comment}
            placeholder="Комментарий"
            onChange={handleCommentChange}
          />
          <Button type="submit">Отправить</Button>
        </FormLayout>
      </div>
    </Panel>
  )
}

export default MeetingForm
