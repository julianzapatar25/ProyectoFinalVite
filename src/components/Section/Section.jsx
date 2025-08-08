const frutas = ['Manzana', 'Pera', 'Naranja'];
const Section = () => {
  return (
    <ul>
        {
        frutas.map(fruta=> {
            return <li key={fruta}> {fruta}</li>
        })
        }
    </ul>
    
  )
}

export default Section