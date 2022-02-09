---
title: "Documentation Journey: Vercel Edition"
date: "2022-02-11"
---

Last week [Rizwana](https://twitter.com/rizbizkits) discovered a cute little [Co-working space](https://www.cobdenplace.co.uk/) in Nottingham. We had been on the lookout for a place where we could carry out some PF-related work, as well as potentially run some of our upcoming courses. At the time, I was making some upgrades to [PF Campus](https://projectfunction.io/how-we-teach), trying to enable deployments for students to be able to deploy their work to a portfolio as part of their submission process. With previous versions of Campus being on a dedicated server, we offered learners with the option to privately deploy (onto our infrastructure) or publicly via Netlify; however, now that it has moved onto a serverless model, it was time to revisit the options.

![Campus v1 Deployment to Netlify](/images/campus-deploy1.png)

As the great advocate that she is, she asked if there was a reason we weren't deploying on Vercel. After all, Campus v2 was already deployed on there, so it only made sense.

### Me vs. API: Round 1 💀

Early on in 2021, I had the exact same thought. However, after doing a deep dive, I realised that there was no available packages at the time that interfaced well with Vercel to allow us to programmatically manage projects and deployments the way we needed. And upon further venturing, I came to accept that (a) the available REST APIs was in too much of an early stage, and (b) developing a wrapper around it would be more work than I was able to put in given my day-to-day schedules, and the state of Vercel Documentation back then. In fact the latter was the exact reason that initially pushed me to use Netlify to deploy.

Now before anyone jumps onto the "but Daryl, they provide a CLI" - I know! But it was not convenient and using it programmatically in our setup felt like a hack (we weren't using a command-line interface). So it was best to avoid it. 🤷🏽‍♂️

### Me vs. API: Round 2 🥊

After a nudge to give the APIs a second consideration, I thought '*Well surely the REST APIs would have matured a little by now*', and it did ...kind of. While the APIs looked a lot more stable with [different versions](https://vercel.com/docs/rest-api#introduction/api-basics/versioning) to avoid breaking changes, it still felt a little overwhelming; it felt like a lot of work had to be done on my part to figure out how things work and what the processes were.

I decided to delve into it a bit more, explore the APIs and see if I could fill the gaps using the Vercel docs. I immediately fell in love with the addition of the `interaface` and `type` definitions for responses! It made the guesswork one-step less intense; and seeing as I was already using Typescript, it was mild case of copy-pasta 🍝.

![Sample response interface for the Aliases Endpoint](/images/vercel-docs-response-interface.png)

Seeing the interface and type definitions were very much a welcome change, and I was elated by the state of the documentation; however, that feeling was quickly followed by a sense of defeat once I realised the doc itself was very much incomplete and in some case useless. For example, 

- unknown types in endpoint doc
    - didnt know what `File` was meant to be for createDeployment endpoint
    - had to dive into github codesearch (cs.github.com) to find usages of that endpoint
- incorrect expected types
- acknowledge some of these might have cropped up in changelogs but as far as the docs went as a go-to for usage-knowledge it was a deadend