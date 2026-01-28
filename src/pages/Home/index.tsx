import { useState } from "react"

export const Home = () => {
    
    const [counter, setCounter] = useState(0)

    const addOne = () => {
        setCounter((previousValue) => previousValue + 1)
    }

  return (
    <div>
        <p>Hello</p>
        <button type="button" onClick={addOne}>Button {counter}</button>
    </div>
  )
}
