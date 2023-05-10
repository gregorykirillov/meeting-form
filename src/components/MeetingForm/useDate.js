import { useState } from 'react'
import { TimeTypes, defaultTime, dateValues } from './consts'

const useDate = () => {
  const [tower, setTower] = useState('')
  const [floor, setFloor] = useState('')
  const [comment, setComment] = useState('')
  const [roomNumber, setRoomNumber] = useState('')
  const [date, setDate] = useState(dateValues.default)
  const [time, setTime] = useState(defaultTime)

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
    setDate(value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const resetForm = () => {
    setTower('')
    setFloor('')
    setComment('')
    setRoomNumber('')
    setDate(dateValues.default)
    setTime(defaultTime)
  }

  const handleTimeChange = (selectedTime, type) => {
    if (type === TimeTypes.Start) {
      setTime({ ...time, [TimeTypes.Start]: selectedTime })
    } else if (type === TimeTypes.End) {
      setTime({ ...time, [TimeTypes.End]: selectedTime })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      tower,
      floor,
      roomNumber,
      date: new Date(date.year, date.month, date.day)
        .toISOString()
        .slice(0, 10),
      comment,
      time: {
        [TimeTypes.Start]: time[TimeTypes.Start],
        [TimeTypes.End]: time[TimeTypes.End]
      }
    })

    resetForm()
  }

  return {
    time,
    date,
    tower,
    floor,
    comment,
    roomNumber,
    handleSubmit,
    handleDateChange,
    handleTimeChange,
    handleTowerChange,
    handleFloorChange,
    handleCommentChange,
    handleRoomNumberChange
  }
}

export default useDate
