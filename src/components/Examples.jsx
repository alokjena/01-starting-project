import { EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //returns array of 2 elements, first is current state value, second is function to update state value
  let tabContent = "Please select a content";
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //tabContent = `You have selected ${selectedButton} tab`;
    console.log(selectedTopic);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <div id="tab-content">{tabContent}</div>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      )}
    </Section>
  );
}
