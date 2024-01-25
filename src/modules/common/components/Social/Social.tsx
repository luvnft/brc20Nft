import { IconButton } from '@material-ui/core';
import { Discord } from 'modules/common/components/Icons/Discord';
import { Instagram } from 'modules/common/components/Icons/Instagram';
import { Twitter } from 'modules/common/components/Icons/Twitter';
import { Website } from 'modules/common/components/Icons/Website';
import { t } from 'modules/i18n/utils/intl';
import { uid } from 'react-uid';
import { useSocialStyles } from './useSocialStyles';

interface ISocialProps {
  className?: string;
  twitter?: string;
  instagram?: string;
  discord?: string;
  website?: string;
}

export const Social = ({
  className,
  twitter,
  instagram,
  discord,
  website,
}: ISocialProps) => {
  const classes = useSocialStyles();

  const items = [
    {
      title: t('social.instagram'),
      href: instagram,
      icon: Instagram,
    },
    {
      title: t('social.twitter'),
      href: twitter,
      icon: Twitter,
    },
    {
      title: t('social.facebook'),
      href: discord,
      icon: Discord,
    },
    {
      title: t('social.website'),
      href: website,
      icon: Website,
    },
  ].filter(item => item.href);

  return (
    <div className={className}>
      <ul className={classes.list}>
        {items.map(({ title, href, icon: Icon }, i) => (
          <li className={classes.item} key={uid(i)}>
            <IconButton
              href={href as string}
              target="_blank"
              title={title}
              className={classes.icon}
            >
              <Icon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
