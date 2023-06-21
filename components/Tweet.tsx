"use client";

import { TweetSkeleton, EmbeddedTweet } from 'react-tweet';
import s from '../styles/tweet.module.scss';
import { getTweet } from 'react-tweet/api';
import { useEffect, useState } from "react";

const Tweet = ({ id }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    
    getTweet(id).then(tweet => {
      setData(tweet);
    });
    
  }, [id]);
  
  return (
    <div className={s.root}>
      {!data ? <TweetSkeleton /> : <EmbeddedTweet tweet={data} />}
    </div>
  )
}

export default Tweet