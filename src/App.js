import {Component, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import {useState} from 'react'
//hook usestate
//pure func -> gives same result when given same arguments EVERYTIME called because it solely dependent on the props passed
//impure function -> can give different results even after same  argument (ex: dependent on external variable)
//side effect: creates affect outside of scope 
// in react -> impure func
const App = ()=>{
  //its encapssilating individual values not object 
  //pass initial values
  const [monsters, setMonsters]=useState([]);
  const [searchField, setSearchField]= useState(''); // [value, setValue ]
  const [filteredMonsters, setFilterMonsters]= useState(monsters)
  //change only if array changes
  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    //return of response.json is passed to users 
    //set state rerenders the page 
    .then((users) => setMonsters(users));
  }, []);
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField); //returns boolean 
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange= (event)=> { 
    const searchFieldString= event.target.value.toLocaleLowerCase();        //best practice -> for modifying a array create a new one
    setSearchField(searchFieldString);
  }  
  


  return (
    <div className="App">      
    <h1 className="app-title"> Kitty Roladex </h1>
    
    <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
     <CardList monsters={filteredMonsters} />
      
     </div>
     )
}

/*
class App extends Component {
  //rendering top down 
  constructor(){
    super();
   //instantiate the state
   // state is always a json object 
   //whenever a variable/props changes-> it rerenders
   this.state= {
    //1st render 
    monsters:[],
    searchField: ''
  } ;
}
//lifecycle method 
componentDidMount(){
  //2nd render -> as it fetches data and state changes 
  //mounting is first time react gets the data from api
  // happens once  in one lifecycle until unmounted 
  
}
  onSearchChange= (event)=> { 
    const searchField= event.target.value.toLocaleLowerCase();        //best practice -> for modifying a array create a new one
    this.setState(()=>{
      return {searchField}
    })
  }  
  render(){

    const {monsters, searchField}= this.state;  
    const {onSearchChange}=this;

   

    
        {/*filteredMonsters.map((monster)=>{
        // invokes every element in array monster and take the names every itera tion 
           return  (
        //ensure highest element has the id 
            <div key={monster.id}> 
              <h1 > {monster.name}</h1> 
            </div>
          );
        })}
        
    </div>
  );
  }
}
*/

export default App;

  {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I am  {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
        </p> 
       <button onClick={()=> 
          //ideal way to use thhe setstate function 
          this.setState(() => {
            return{
            //shallow merge 
              name:{name: {firstName: "Invis", lastName: "ible"},
            },
          };
        },
          //callback function only after the state is updated 
          //totally optional 
          ()=>{
            console.log(this.state)
          } 
        )}>
        Change name
       </button>
        
      </header>
        */} 