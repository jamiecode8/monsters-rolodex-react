import { useState, useEffect } from 'react';

// import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [ searchField, setSearchField ] = useState(''); // [ value, setFunction ]
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilterMonsters ] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users));
  }, [] );

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilterMonsters(newFilteredMonsters)
  },[monsters, searchField])
  

  const onSeachChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">

        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler = { onSeachChange }
          placeholder = 'search monsters' 
        />
         {/*<CardList 
          monsters={ filteredMonsters }
        /> */}
      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField:''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((user) => this.setState(() => {
//         return {monsters:user}
//       }
//       ));
//   }

//   onSeachChange = (event)=>{
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return { searchField }
//     })
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSeachChange } = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">

//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className = 'monsters-search-box'
//           onChangeHandler = { onSeachChange }
//           placeholder = 'search monsters' 
//         />
//         <CardList 
//           monsters={ filteredMonsters }
//         />
//       </div>
//     );
//   }
// }

export default App;
