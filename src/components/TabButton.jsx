// export default function TabButton(props) {
//   return (
//     <li>
//         <button>{props.children}</button>
//     </li>
//   );
// }

//coponent coposition
export default function TabButton({children, onSelect, isSelected}) {
    console.log('TabButton component executed');
  return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li> 
  );
}