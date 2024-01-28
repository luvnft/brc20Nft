import classNames from 'classnames';
import { Box } from '@material-ui/core';
import twiterPng from 'assets/img/public/Twiter.png';
import discordPng from 'assets/img/public/Discord.png';
import telegramPng from 'assets/img/public/Telegram.png';
import { useAppLinkStyles } from './AppLinkStyles';
export const routers = [
  {
    link: 'https://twitter.com/',
    img: twiterPng,
    title: 'twiter',
  },
  {
    link: 'https://discord.com/',
    img: discordPng,
    title: 'discord',
  },
  {
    link: 'https://telegram.org/',
    img: telegramPng,
    title: 'telegram',
  },
];
export const Applink = () => {
  const classes = useAppLinkStyles();
  return (
    <Box className={classNames(classes.root)}>
        {
          routers.map(d => {
            return (
              <img key={ d.title } src={d.img} alt={d.title} className={'img'} onClick={() => {
                window.open(d.link)
              }}/>
            );
          })
        }
      </Box>
  );
};
