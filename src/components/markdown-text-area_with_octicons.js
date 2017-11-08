import React from 'react';
import octicons from 'octicons';

import MarkdownTextarea, {
  actions,
  insert,
  classNames,
} from './markdown-text-area';

const renderIcon = (name, options = { class: 'MarkdownTextarea-icon' }) => (
  <span dangerouslySetInnerHTML={{ __html: octicons[name].toSVG(options) }} />
);

const actionsWithOcticons = []
  .concat([{ ...actions[0] }])
  .concat([{ ...actions[1], content: renderIcon('bold') }])
  .concat([{ ...actions[2], content: renderIcon('italic') }])
  .concat([{ ...actions[3], content: renderIcon('quote') }])
  .concat([{ ...actions[4], content: renderIcon('link') }])
  .concat([{ ...actions[5], content: renderIcon('code') }])
  .concat([{ ...actions[6], content: renderIcon('file-media') }])
  .concat([{ ...actions[7], content: renderIcon('list-unordered') }])
  .concat([{ ...actions[8], content: renderIcon('list-ordered') }]);

const helpWithOcticons = {
  link: 'http://commonmark.org/help/',
  content: (
    <span>
      {renderIcon('markdown', { class: 'MarkdownTextarea-help-icon' })}
      Markdown styling is supported
    </span>
  ),
};

export default MarkdownTextarea;

export {
  insert,
  renderIcon,
  actionsWithOcticons as actions,
  helpWithOcticons as help,
  classNames,
};
