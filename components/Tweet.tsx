import { Tweet as ReactTweet } from "react-tweet";
import s from "../styles/tweet.module.scss";

export default async function Tweet({id}) {
  return (
    <div className={`${s.root} tweet`}>
      <ReactTweet id={id} />
    </div>
  );
};
