import type { Votes } from "../VoteOptions/VoteOptions";
import css from "../VoteStatus/VoteStatus.module.css";
export interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}
export default function VoteStatus({
  votes,
  totalVotes = 0,
  positiveRate = 0,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
