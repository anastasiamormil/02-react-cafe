import css from "../VoteOptions/VoteOptions.module.css";
export type Votes = {
  good: number;
  neutral: number;
  bad: number;
};
export type VoteType = "good" | "neutral" | "bad";
export interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function Voteoptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
