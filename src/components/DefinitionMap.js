import { useEffect, useState } from "react";
import { DefinitionMapWrapper } from "styles/styledComponents/definitionMapWrapper";
import ActiveTab from "./ActiveTab";

const DefinitionMap = ({ initialDefinition }) => {
  const [activeTab, setActiveTab] = useState(initialDefinition[0]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setActiveTab(initialDefinition[0]);
    setTab(0);
  }, [initialDefinition]);

  const handleSetTab = (data, number) => {
    setActiveTab(data);
    setTab(number);
  };

  return (
    <DefinitionMapWrapper>
      <div className="tabs">
        {initialDefinition.map((partOfSpeech, i) => (
          <h5
            key={i}
            onClick={() => handleSetTab(partOfSpeech, i)}
            className={tab === i ? "active" : ""}
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
