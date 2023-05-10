import { useState } from 'react'
import { TimeTypes, defaultTime } from './consts'

const useDate = () => {
  const [tower, setTower] = useState('')
  const [floor, setFloor] = useState('')
  const [comment, setComment] = useState('')
  const [roomNumber, setRoomNumber] = useState('')
  const [date, setDate] = useState()
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

  const handleDateChange = (date) => {
    date ? setDate(date) : setDate()
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const resetForm = () => {
    setTower('')
    setFloor('')
    setComment('')
    setRoomNumber('')
    setDate()
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
      date: new Date(date)
        .toLocaleString()
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
