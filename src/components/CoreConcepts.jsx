//Object destructuring way of using CoreConcepts component
export default function CoreConcepts({image, title, description}) {
  return (
   <li>
    <img src={image} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
   </li>
  );
};

//Props way of using CoreConcepts component
export function CoreConceptsPropsWay(props) {
  return (
   <li>
    <img src={props.image} alt="..." />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
   </li>
  );
};



//Core concept single prop way of using CoreConcepts component
export function CoreConceptsSingleProp({concept}) {
     // Use concept.title, concept.description etc.
   // Or destructure the concept object: const { title, description, image } = concept;
  return (
   <li>
    <img src={concept.image} alt="..." />
    <h3>{concept.title}</h3>
    <p>{concept.description}</p>
   </li>
  );
};