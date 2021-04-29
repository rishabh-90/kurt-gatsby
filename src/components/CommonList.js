import React from "react"

const CommonList = props => {
  return (
    <ul>
      {props.data.map((item, index) => (
        <li key={index}>
          <a href="!#">{item}</a>
        </li>
      ))}
    </ul>
  )
}
export default CommonList
