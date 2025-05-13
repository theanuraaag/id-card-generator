import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700  font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            {title}
          </button>
  )
}

export default Button