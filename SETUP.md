## Technical Interview

Technical Interview for a USA company, following the midu.dev direct on Twitch. Check [Readme](README.md#technical-interview) for more information.

Check [repository](https://github.com/midudev/aprendiendo-react/tree/master/projects/14-hacker-news-prueba-tecnica), [live demo](https://midu-react-14.surge.sh/) or [Twith stream](https://www.twitch.tv/videos/1834096985)

## Linter

```zsh
npm install ts-standard -D
```

## Style Components

Used:

- [vanilla-extract](https://vanilla-extract.style/)

Other examples:

- [styled components](https://styled-components.com/)
- [emotion styled components](https://emotion.sh/docs/styled)

## Routing

Usually, [React Router](https://reactrouter.com/en/main) is the main option, but this one comes with a lot of features that won't be used. So a lightweigth alternative is [wouter](https://github.com/molefrog/wouter) is a much smaller,

## Skeleton/Placeholder

Using [react content loader](https://www.npmjs.com/package/react-content-loader) using [skeletonreact](https://skeletonreact.com/).

## Library Size

Check [Package Phobia](https://packagephobia.com/) or [bundlephobia](https://bundlephobia.com/) to find the cost of adding a npm package

## Relative Time

Using [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat), since loading momentjs or dayjs is an overkill with a lot of space.
An alternative to momentjs in [Luxon](https://moment.github.io/luxon/), the newer version on [MomentJS](https://momentjs.com/)

Check [file](src/utils/getRelativeTime.ts) to see how its done
