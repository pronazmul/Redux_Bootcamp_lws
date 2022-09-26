import React from 'react'
import { useDrop } from 'react-dnd'
import { ITEM_TYPE } from '../../utils/config'

const DrugWrapper = ({ onDrop, children, status }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      onDrop(item, monitor, status)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  const bgColor = isOver ? 'bg-red-200' : 'bg-light'

  return (
    <div
      ref={drop}
      className={`flex flex-col pb-2 overflow-auto  scrollbar-thin scrollbar-thumb-indigo-300 h-4/5 rounded-lg ${bgColor}`}
    >
      {children}
    </div>
  )
}

export default DrugWrapper
