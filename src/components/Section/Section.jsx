import { useState, useEffect } from 'react'
import UserCard from '../UserCard/UserCard.jsx'
import './Section.css'

const Section = () => {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=4&skip=${count}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
      })
  }, [count])

  const handleNext = () => setCount(count + 1)
  const handlePrev = () => setCount(count > 1 ? count - 1 : 1)

  return (
    <>
      <div className="section-controls">
        <button onClick={handlePrev}>Atrás</button>
        <h2>{count}</h2>
        <button onClick={handleNext}>Siguiente</button>
      </div>

      <section>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </>
  )
}

export default Section
