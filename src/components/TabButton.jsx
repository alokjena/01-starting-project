// export default function TabButton(props) {
//   return (
//     <li>
//         <button>{props.children}</button>
//     </li>
//   );
// }

//coponent coposition
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
