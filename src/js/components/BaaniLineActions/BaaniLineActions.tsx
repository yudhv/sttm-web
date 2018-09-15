import React from 'react';
import { Link } from 'react-router-dom';
import { ACTIONS, clickEvent } from '@/util/analytics';
import { toShabadURL } from '@/util';
import TwitterIcon from '@/components/Icons/Twitter';
import ClipboardIcon from '@/components/Icons/Clipboard';
import ExternalLinkIcon from '@/components/Icons/ExternalLink';

export const supportedActions = ['openShabad', 'copy', 'tweet'];

const openShabad = () =>
  clickEvent({
    action: ACTIONS.LINE_SHARER,
    label: ' open-shabad',
  });

type ActionsProps = {
  shabad: Shabad;
  disabledActions: string[];
  onCopyClick: (e: MouseEvent) => void;
  onTweetClick: (e: MouseEvent) => void;
};

export default class Actions extends React.PureComponent<ActionsProps> {
  public static defaultProps = {
    disabledActions: [],
  };

  public render() {
    const { shabad, disabledActions, onCopyClick, onTweetClick } = this.props;
    const actions = {
      openShabad: (
        <Link
          key={0}
          role="button"
          aria-label="Go to shabad"
          title="Go to shabad"
          onClick={openShabad}
          to={toShabadURL({ shabad })}
        >
          <ExternalLinkIcon />
        </Link>
      ),
      copy: (
        <a
          key={1}
          className="copy"
          onClick={onCopyClick}
          role="button"
          aria-label="Copy to clipboard"
          title="Copy to clipboard"
        >
          <ClipboardIcon />
        </a>
      ),
      tweet: (
        <a
          key={3}
          className="twitter"
          onClick={onTweetClick}
          role="button"
          aria-label="Tweet this line"
          title="Tweet this line"
        >
          <TwitterIcon />
        </a>
      ),
    };
    return (
      <div className="share">
        {supportedActions
          .filter(e => !disabledActions.includes(e))
          .map(action => actions[action])}
      </div>
    );
  }
}
