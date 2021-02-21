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
  // console.log("MEDIA ELM", mediaElement)
  return (
    <figure
      className={item.video ? 'media-item video' : 'media-item img'}
    > 
      { item.video 
        ? <div className="loader-window">
            <div className="loader"></div>
          </div>
        : null 
      }
      { mediaElement }
    </figure>
  );
};

class MediaViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWindowWidth.bind(this));
  }

  componentDidUpdate(prevProps) {
    const { media, updateMediaSetting } = this.props;
    if (media !== prevProps.media) {
      updateMediaSetting(false);
      this.handleSetState();
    }
  }

  setWindowWidth() {
    this.setState(() => ({
      windowWidth: window.innerWidth
    }));
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
    const { count, windowWidth } = this.state;
    const newCount = count > media.length - 1 ? 0 : count;
    const settingLabel = mediaSetting ? '-' : '+';
    const currentMedia = media[newCount].mediaSrc;
    const vimeoSrc = `https://player.vimeo.com/video/${currentMedia}?autoplay=1&loop=1&autopause=0&background=1`;
    const imgSrc = media[newCount].local ? mapFiles(require.context('../../database/media', true, /\.(png|gif|ico|jpg|jpeg)$/), currentMedia) : currentMedia;
    const mediaElement = media[newCount].video ? <iframe src={vimeoSrc} title={media[newCount].caption} poster="https://i.vimeocdn.com/filter/overlay" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> : <img alt={media[newCount].caption} src={imgSrc} />;
    if (windowWidth < 650) {
      return (
        <section className="mediaViewer">
          <div
            className="click-scrim"
            role="button"
            tabIndex="0"
            onClick={this.handleClickCounter}
            onKeyDown={this.handleClickCounter}
          >
          </div>
          <figure
            className={media[newCount].class ? `img-container ${media[newCount].class}` : 'img-container'}
          >
            { media[newCount].video 
              ? <div className="loader-window">
                  <div className="loader"></div>
                </div>
              : null 
            }
            {mediaElement}
          </figure>
          <div className="img-ui">
            <div className="img-counter">
              {newCount + 1}/{media.length}
            </div>
          </div>
        </section>
      );
    }
    return (
      <section className="mediaViewer">
        <div
          className="media-window"
          role="button"
          tabIndex="0"
          onClick={this.handleClickExpander}
          onKeyDown={this.handleClickExpander}
        >
          <div className="media-items">
            {media.map((item) => (
              <MediaComponent item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="img-ui">
          <div className="scroll">
          { media.length > 1  ? 'SCROLL' : '' }
          </div>
          {/* <button
            type="button"
            className={media[newCount].class ? `img-expander ${media[newCount].class}` : 'img-expander'}
            tabIndex="0"
            onClick={this.handleClickExpander}
            onKeyDown={this.handleClickExpander}
          >
            {settingLabel}
          </button> */}
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
