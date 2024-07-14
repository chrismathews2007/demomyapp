import * as React from "react"
import { IoIosArrowDown } from "react-icons/io"

interface LanguageOptionProps {
  language: string
  alt?: string
}

const LanguageOption: React.FC<LanguageOptionProps> = ({ language }) => {
  return (
    <div className="flex gap-1.5">
      <div className="my-auto">{language}</div>
      <IoIosArrowDown />
    </div>
  )
}

export default LanguageOption
