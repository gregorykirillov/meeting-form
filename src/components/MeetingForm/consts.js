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

export const options = { towersOptions, floorsOptions, roomsOptions }

export const TimeTypes = {
  Start: 'start',
  End: 'end'
}

export const defaultTime = { [TimeTypes.Start]: '', [TimeTypes.End]: '' }

const currentDate = new Date()
export const dateValues = {
  default: {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()
  },

  min: {
    day: currentDate.getDay(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()
  },

  max: {
    day: currentDate.getDay(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear() + 1
  }
}
