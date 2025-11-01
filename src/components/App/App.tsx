import css from "../App/App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import type { Votes } from "../VoteOptions/VoteOptions";
import type { VoteType } from "../VoteOptions/VoteOptions";
import Voteoptions from "../VoteOptions/VoteOptions";
import { useState } from "react";
import VoteStatus from "../VoteStatus/VoteStatus";

export default function App() {
  const [clicks, setClicks] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function handleVote(type: VoteType) {
    setClicks((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  }
  const resetVotes = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };
  const canReset = Object.values(clicks).some((click) => click > 0);
  const totalVotes = clicks.good + clicks.neutral + clicks.bad;
  const positiveRate =
    totalVotes > 0 ? Math.round((clicks.good / totalVotes) * 100) : 0;
  return (
    <>
      <div className={css.app}>
        <CafeInfo />

        <Voteoptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={canReset}
        />
        {totalVotes > 0 && (
          <VoteStatus
            votes={clicks}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        )}
        {totalVotes === 0 && <Notification />}
      </div>
    </>
  );
}
