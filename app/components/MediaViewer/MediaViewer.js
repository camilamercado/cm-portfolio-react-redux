import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function mapFiles(context, currentMedia) {
  const keys = context.keys();
  const values = keys.map(context);
  const arr = keys.reduce((accumulator, key, index) => ({
    ...accumulator,
    [key.substring(2)]: values[index],
  }), {});

  return arr[currentMedia];
}

const MediaComponent = (currentItem) => {
  const { item } = currentItem;
  const currentMedia = item.mediaSrc;
  const vimeoSrc = `https://player.vimeo.com/video/${item.mediaSrc}?autoplay=1&loop=1&autopause=0&background=1`;
  const imgSrc = item.local ? mapFiles(require.context('../../database/media', true, /\.(png|gif|ico|jpg|jpeg)$/), currentMedia) : currentMedia;
  const mediaElement = item.video ? <iframe src={vimeoSrc} title={item.caption} poster="https://i.vimeocdn.com/filter/overlay" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> : <img alt={item.caption} src={imgSrc} />;
  return (
    <figure
      key={item.mediaSrc}
      className={item.class ? `media-item ${item.class}` : 'media-item'}
    >
      { mediaElement }
    </figure>
  );
};

class MediaViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate(prevProps) {
    const { media, updateMediaSetting } = this.props;
    if (media !== prevProps.media) {
      updateMediaSetting(false);
      this.handleSetState();
    }
  }

  handleSetState = () => {
    this.setState(() => ({
      count: 0
    }));
  }

  handleClickCounter = () => {
    const { media } = this.props;
    const { count } = this.state;
    const newCount = count === media.length - 1 ? 0 : count + 1;
    this.setState(() => ({
      count: newCount
    }));
  };

  handleClickExpander = () => {
    const { mediaSetting, updateMediaSetting } = this.props;
    updateMediaSetting(!mediaSetting);
  };

  render() {
    const { media, mediaSetting } = this.props;
    const { count } = this.state;
    const newCount = count > media.length - 1 ? 0 : count;
    const settingLabel = mediaSetting ? 'Reduce' : 'Expand';

    return (
      <section className="mediaViewer">
        <div className="loader-window">
          <div className="loader"></div>
        </div>
        <div className="media-window">
          {/* <div
            className="click-scrim"
            role="button"
            tabIndex="0"
            onClick={this.handleClickCounter}
            onKeyDown={this.handleClickCounter}
          >
          </div> */}
          <div className="media-items">
            {media.map((item) => (
              <MediaComponent item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="img-ui">
          <button
            type="button"
            className={media[newCount].class ? `img-expander ${media[newCount].class}` : 'img-expander'}
            tabIndex="0"
            onClick={this.handleClickExpander}
            onKeyDown={this.handleClickExpander}
          >
            {settingLabel}
          </button>
        </div>
      </section>
    );
  }
}

MediaViewer.propTypes = {
  media: PropTypes.array,
  mediaSetting: PropTypes.bool,
  updateMediaSetting: PropTypes.func,
};

export default MediaViewer;
