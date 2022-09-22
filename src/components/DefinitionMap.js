import { useState } from "react";
import { DefinitionMapWrapper } from "styles/styledComponents/definitionMapWrapper";
import ActiveTab from "./ActiveTab";

const DefinitionMap = ({ initialDefinition }) => {
  const [activeTab, setActiveTab] = useState(initialDefinition[0]);

  const handleSetTab = (data) => {
    setActiveTab(data);
  };

  return (
    <DefinitionMapWrapper>
      <div className="tabs">
        {initialDefinition.map((partOfSpeech, i) => (
          <h5
            key={i}
            onClick={() => handleSetTab(partOfSpeech)}
            className={true ? "active" : ""}
          >
            {partOfSpeech.partOfSpeech}
          </h5>
        ))}
      </div>

      <ActiveTab partOfSpeech={activeTab} />
    </DefinitionMapWrapper>
  );
};

export default DefinitionMap;
