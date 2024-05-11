import React, { useState, useEffect } from 'react';
import './App.css';

interface StudentProps {
  name: string,
  age: number,
  isStudent: boolean
}

function Student(props: StudentProps) {
  const styles = {
    backgroundColor: props.isStudent ? "green" : "red",
    color: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    display: "block"
  }

  return (
    <div style={styles}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

// Same as studentprops interface
// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool
// }

interface UserGreetingProps {
  isLoggedIn: boolean,
  username: string
}

function UserGreeting(props: UserGreetingProps) {
  return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please login to continue</h2>);
}

function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "grape", calories: 25 },
    { id: 5, name: "pineapple", calories: 55 },
    { id: 6, name: "kiwi", calories: 75 }
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); // numeric
  // fruits.sort((a, b) => b.calories - a.calories); // reverse numeric

  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = fruits.map(fruit =>
    <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>
  );

  return (<ol>{listItems}</ol>);
}

function Button() {

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.currentTarget.textContent = "clicked bos";
  };

  return (<button onDoubleClick={(e) => handleclick(e)}>Click me 🥶</button>);
}

function Picture() {
  const imageUrl = '../public/vite.svg';

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => e.currentTarget.style.display = "none";
  return (<img src={imageUrl} onClick={(e) => handleClick(e)} />)
}

function MyComponent() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsemployed] = useState(false);

  const updateName = () => {
    setName("mattot");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsemployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

function MyComponent2() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction" />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="transfer">Transfer</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  // updater function
  function increment() {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

function MyComponentObjectUpdate() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Mercedes",
    model: "AMG Gtr",
  });

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar(c => ({ ...c, year: parseInt(e.target.value) }));
  }

  function handleMakeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar(c => ({ ...c, make: e.target.value }));
  }

  function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar(c => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>Car: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  )
}

function MyComponentArrayUpdate() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFood() {
    const newFood = (document.getElementById("foodInput") as HTMLInputElement).value;
    (document.getElementById("foodInput") as HTMLInputElement).value = "";

    setFoods(f => [...f, newFood]);
  }

  function handleRemoveFood(index: number) {
    setFoods(f => f.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

function MyComponentUseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} Color: ${color}`;

    return () => {
      // some cleanup code
    }
  }, [count, color]);

  function addCount() {
    setCount(c => c + 1);
  }

  function subtractCount() {
    setCount(c => c - 1);
  }

  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

function MyComponentWidthHeight() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  )
}

function App() {
  return (
    <>
      <h1>My React App</h1>
      <p>react testing</p>

      <Student name="Mattot" age={23} isStudent={true} />
      <Student name="John" age={25} isStudent={false} />
      <Student name="Jane" age={16} isStudent={true} />

      <UserGreeting isLoggedIn={true} username="mattot" />

      <List />

      <Button />

      <Picture />

      <MyComponent />
      <MyComponent2 />

      <Counter />

      <MyComponentObjectUpdate />

      <MyComponentArrayUpdate />

      <MyComponentUseEffect />

      <MyComponentWidthHeight />
    </>
  );
}

export default App
