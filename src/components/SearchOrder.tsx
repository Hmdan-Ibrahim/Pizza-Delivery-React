import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        if(!search) return

        navigate(`/order/${search}`)
        setSearch('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Order By Id' 
            name='order'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}/>
    </form>
  )
}
