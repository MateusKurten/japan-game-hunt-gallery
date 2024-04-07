import Item from "./components/Item";
import { Button } from "flowbite-react";
import './App.css'
import { useState } from "react";

function App() {

  const dados = [
    {
      'id': "1",
      'item': 'Super Speed Racing',
      'img': 'super-speed-racing.png',
      'category': 'Game',
      'system': 'Dreamcast',
      'condition': 'Perfect',
      'price': '1650',
      'store': 'Hard Off',
      'location': 'Chiba'
    },
    {
      'id': "2",
      'item': 'Nintendo 3DS LL',
      'img': 'super-speed-racing.png',
      'price': '9000',
      'condition': 'Screen is strached',
      'category': 'System',
      'store': 'Gamers',
      'location': 'Akihabara'
    },
    {
      'id': "3",
      'item': 'Gamecube',
      'img': 'super-speed-racing.png',
      'price': '6000',
      'condition': 'Broken',
      'category': 'System',
      'store': 'Surugaya',
      'location': 'Nipponbashi, Osaka'
    },
  ]

  const [data, setData] = useState(dados);

  return (
    <>
      <div className="flex gap-2">
        {
          data.map(value =>
            <Item key={value.id} {...value}/>
          )
        }
      </div>
    </>
  )
}

export default App
