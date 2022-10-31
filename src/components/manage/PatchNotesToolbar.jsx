import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Icon } from '@plone/volto/components';
import { Plug } from '@plone/volto/components/manage/Pluggable';
import bookSVG from '@plone/volto/icons/book.svg';

const messages = defineMessages({
  patchNotes: {
    id: 'Patch notes panel',
    defaultMessage: 'Patch notes panel',
  },
});

export const PatchNotesToolbar = () => {
  const intl = useIntl();
  const token = useSelector((state) => state.userSession?.token);
  return token ? (
    <Plug pluggable="main.toolbar.bottom" id="patch-notes-toolbar">
      <Link
        to="/patch-notes"
        aria-label={intl.formatMessage(messages.patchNotes)}
        tabIndex={0}
        className="deleteBlocks"
        id="toolbar-patch-notes"
      >
        <Icon name={bookSVG} size="30px" />
      </Link>
    </Plug>
  ) : null;
};

export default PatchNotesToolbar;
