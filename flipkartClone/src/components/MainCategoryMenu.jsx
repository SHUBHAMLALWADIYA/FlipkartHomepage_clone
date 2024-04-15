import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'; 
import "./maincate.css"
const MainCategoryMenu = () => {
  return ( 
    <>
    <div id='griddata' style={{ zIndex: -1 }}>
        <div><img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" /><h3 className="category">Grocery</h3></div>
        <div><img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" /><p className="category">Mobiles</p></div>
        <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkHK0LgWLD8IpFKXnQue41l5q_NiOFDnMUfMSMoEU0kgh7-AvK" alt="" /><Menu islazy>
        <MenuButton>Fashion</MenuButton>
  <MenuList>

    <MenuItem>New Window</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
          </Menu></div>
        <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJa3ivJSjm5Lee8BI__4B91DzSS4rlUpGgQxO0-I6-sznjQamC" alt="" /><p className="category">Electronics</p></div>
        <div><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgw7tqqnAUIBz8iWyiL6dNCYeLi67bL1jIbcaJvpJBvGo0KNar" alt="" /><p className="category">Home & Funiture</p></div>
        <div><img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" /><p className="category">Applinances</p></div>
        <div><img src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" /><p className="category">Travel</p></div>
        <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdzdOtqNLxHJunET1KQeKlYHzNwC98GAXZhcGUrReTTH4i6RUE" alt="" /><p className="category">Beauty,Toys & more</p></div>
        <div><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgBxNUsLca2YuF7Zb_GNKwd-DcJvWMPPJR_069HsS81luXftsL" alt="" /><p className="category">Two WHeelers</p></div>
    </div>
    </>
  );
};

export default MainCategoryMenu;
