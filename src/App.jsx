import {useState} from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CoreConceptsPropsWay, CoreConceptsSingleProp } from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  //we cannot update UI content , because component function deos not execute again
  //UI update can be handled by state management
  //all functions start with use are react hooks, they are technicall regular functions only  be called inside react component function or other react hooks
  //must be called top level of component function, not inside conditions or loops, or nested functions

  const [selectedTopic, setSelectedTopic] = useState(); //returns array of 2 elements, first is current state value, second is function to update state value
  let tabContent = 'Please select a content';
  function handleSelect(selectedButton) {
    
    setSelectedTopic(selectedButton);
    //tabContent = `You have selected ${selectedButton} tab`;
    console.log(selectedTopic);
  }

  console.log('App component executed');
  return (
    <div>
      <Header />  
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcepts key={conceptItem.title} {...conceptItem} />
              ))
            }

            {/* <CoreConcepts title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConceptsSingleProp concept={CORE_CONCEPTS[2]} />
            <CoreConceptsPropsWay {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>  
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <div id="tab-content">{tabContent}</div>}
          {selectedTopic &&   ( <div id="tab-content">
           <h3>{EXAMPLES[selectedTopic].title}</h3>
           <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>{EXAMPLES[selectedTopic].code}</pre>
          </div>)}
        
        </section>
      </main>
    </div>
  );
}

export default App;
