import { Item } from '../item/item';

import './list.css';

function List() {
  return (
    <ul className="list">
      <Item name={'Hero name'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, inventore.'} type="stone" />
      <Item name={'Hero name'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, inventore.'} type="fire" />
      <Item name={'Hero name'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, inventore.'} type="water" />
      <Item name={'Hero name'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, inventore.'} type="air" />
    </ul>
  );
}

export { List };
