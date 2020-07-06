import React from 'react';
import { Link } from 'react-router-dom';
import { pageView } from '../../util/analytics';
import PropTypes from 'prop-types';
import raagIndices from './raagIndices';
import { toAngURL } from '../../util';
import BreadCrumb from '../../components/Breadcrumb';
import { TEXTS } from '../../constants';

// Not using this currently to scroll automatically
const sanitizeHash = (...args) =>
  args.map((a) => a.replace(/ /gi, '')).join('-');

const GRANTH_NAMES = raagIndices.map(({ name }) => name);

export default class GranthIndex extends React.PureComponent {
  static propTypes = {
    location: PropTypes.shape({ hash: PropTypes.string }),
  };

  constructor(props) {
    super(props);
    this.state = {
      // Set the initial state to show the SGGS description
      selection: [GRANTH_NAMES[0]],
    };
  }

  componentDidMount() {
    this.scrollToHash();
    pageView('/index');
  }

  scrollToHash = () => {
    const { hash } = this.props.location;
    if (hash.includes('#')) {
      const $item = document.querySelector(`[id="${hash.replace('#', '')}"]`);
      if ($item) {
        requestAnimationFrame(() => window.scrollTo(0, $item.offsetTop));
      }
    }
  };

  // Helps check if a list item is selected to show subSets and description
  isSelected = (name) => {
    if (this.state.selection.includes(name)) {
      return true;
    }
  };

  // Called onClick to show description and subSets
  setSelection = (path) => {
    if (path.join() == this.state.selection.join()) {
      path.pop();
    }
    this.setState({ selection: path });
  };

  // Recursive function that keeps churning lists until no subSets are left
  // path is a list that helps keep the parents open when a child is clicked upon
  renderList = (subSets, source, path = []) => {
    return subSets.map(
      (
        { name, pages: [from, to], source: localSource, description, subSets },
        i
      ) => {
        if (localSource) {
          source = localSource;
        }

        return (
          <div key={name} style={{ marginLeft: '40px' }}>
            <li
              className="list--item"
              style={{
                animationDelay: i < 15 ? `${20 * i}ms` : 0,
              }}
              onClick={() => {
                this.setSelection(path.concat([name]));
              }}
            >
              <div className="index-list">
                <div className="index-list--header">
                  <p>{name}</p>
                  <p>
                    <Link
                      className="index-list--url"
                      to={toAngURL({ ang: from, localSource })}
                    >
                      {from}
                    </Link>{' '}
                    to{' '}
                    <Link
                      className="index-list--url"
                      to={toAngURL({ ang: to, localSource })}
                    >
                      {to}
                    </Link>
                  </p>
                </div>
                {this.isSelected(name) && (
                  <div className="index-list--description">{description}</div>
                )}
              </div>
            </li>
            {this.isSelected(name) && subSets && subSets.length > 0
              ? this.renderList(subSets, localSource, path.concat([name]))
              : null}
          </div>
        );
      }
    );
  };

  render() {
    return (
      <div className="row" id="content-root">
        <BreadCrumb links={[{ title: TEXTS.URIS.INDEX }]} />
        <div id="help">
          <main>{this.renderList(raagIndices)}</main>
        </div>
      </div>
    );
  }
}
