import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { useEffect , useState } from "react"
import { callAPI } from '../utils/CallAPI';
import { useNavigate , createSearchParams } from 'react-router-dom'

const Search = () => {
  const [suggestions,setSuggestions] = useState(null);
  const [searchTerm , setSearchTerm ] = useState('');
  const [list,setList] = useState(null);
  const [category , setCategory] = useState('All');

  let navigate = useNavigate();

  const getSuggestions = ()=>{
               callAPI('data/suggestions.json')
               .then(suggestionslist=>{
                 setSuggestions(suggestionslist);
               })
  }
// console.log("suggestions",suggestions);
    useEffect(()=>{
    getSuggestions();
  },[])

  useEffect(()=>{
    const filteredSuggestions = searchTerm 
    ? suggestions.filter((item) => {
        const currentSearchTerm = searchTerm.toLowerCase();
        const title = item.title.toLowerCase();
        return title.includes(currentSearchTerm) && title !== currentSearchTerm;
      })
    : [];
    
    setList(filteredSuggestions);
  },[searchTerm]);

  const onsearchHandler = (e)=>{
          e.preventDefault();
          navigate({
            pathname:"search",
            search:`${
              createSearchParams({
                category:`${category}`,
                searchTerm:`${searchTerm}`
              })
            }`
          })

          setCategory('All')
          setSearchTerm('');

  }


  


  return (
    <div className='w-[100%]'>
        <div className="flex items-center h-10 rounded bg-amazonclone-yellow">
            <select className=' p-2 bg-gray-300 text-black border text-xs xl:text-sm' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home </option>
                <option>Mobiles</option>
            </select>
            <input type="text" className='flex grow h-[100%] items-center rounded-l text-black' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button className='w-[47px]' onClick={(e)=>onsearchHandler(e)}>
               <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-950'/>
            </button>                     
        </div>        
        <div className='absolute bg-white text-black z-40'>
      {list && list.map((item) => (
        <div key={item.id} onClick={()=>setSearchTerm(item.title)}>
          {/* You can customize the display of each suggestion here */}
          {item.title}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Search