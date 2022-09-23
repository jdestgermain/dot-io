import React, {ReactElement} from "react";
import RefreshIcon from "./RefreshIcon";
import ForwardIcon from "./ForwardIcon";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useTabIndex } from 'react-tabindex';


function NextTestButton(): ReactElement {

  const tabIndex = useTabIndex();
    const wordTestNumber = useStoreState((store : any) => store.wordTestNumber,);
  const currentTrainingScenario = useStoreState((store : any) => store.currentTrainingScenario,);
  const beginTraining = useStoreActions((store: any) => store.beginTrainingMode);
  const payload = [currentTrainingScenario, wordTestNumber];
  const setRestartTestMode = useStoreActions((store) => store.setRestartTestMode,);



return(
<button
tabIndex={tabIndex}
className="p-2 bg-[#333] flex w-10 rounded mt-4 m-2 cursor-pointer hover:bg-[#444] active:bg-[#222]"
onClick={() => {
    sessionStorage.removeItem("tempTestDeIncrement");
    setRestartTestMode(false);
    beginTraining(payload);
  }}>
<ForwardIcon />
</button>
)
}

export default NextTestButton;