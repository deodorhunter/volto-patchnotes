import React, { useState, useEffect } from 'react';

import { defineMessages, useIntl, FormattedMessage } from 'react-intl';
import { fetchPatchNotes, useMarkdown } from '../../helpers';
import { Container, Loader } from 'semantic-ui-react';
import { Toolbar } from '@plone/volto/components';
import { useLocation } from 'react-router-dom';
import { Portal } from 'react-portal';
import './index.scss';

import config from '@plone/volto/registry';

const messages = defineMessages({
  patchNotesTitle: {
    id: 'PatchNotesTitle',
    defaultMessage: 'Patch notes',
  },
  patchNotesDescription: {
    id: 'PatchNotesDescription',
    defaultMessage:
      'Qui sotto potrai leggere le ultime note sulle patch e gli aggiornamenti al sito.',
  },
});

const PatchNotesPanel = () => {
  const intl = useIntl();
  const location = useLocation();
  const { url, isInternal, internalPath, authentication } = config?.settings?.[
    'volto-patchnotes'
  ]?.options;
  const [isClient, setIsClient] = useState(false);
  const [markdownContent, setMarkdownSource] = useMarkdown();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    fetchPatchNotes(isInternal, url, internalPath, authentication).then(
      (response) => {
        if (response?.hasError) setError(response?.error);
        setMarkdownSource(response?.data);
        setLoading(false);
      },
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container id="page-patch-notes" className="patch-notes">
        <h1>{intl.formatMessage(messages.patchNotesTitle)}</h1>
        <p>{intl.formatMessage(messages.patchNotesDescription)}</p>
        <div className="patch-notes-container">
          <Loader active={loading} size="small" inline="centered">
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </Loader>

          {!loading && !error && markdownContent}
          {!loading && error && error}
        </div>
      </Container>
      {isClient && (
        <Portal node={document.getElementById('toolbar')}>
          <Toolbar pathname={location?.pathname ?? ''} inner={<span />} />
        </Portal>
      )}
    </>
  );
};

export default PatchNotesPanel;
