import React, { useState, useEffect } from 'react';
import { useRemark } from 'react-remark';
import { defineMessages, useIntl, FormattedMessage } from 'react-intl';
import { fetchPatchNotes } from '../../helpers';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { Toolbar } from '@plone/volto/components';
import { useLocation } from 'react-router-dom';
import { Portal } from 'react-portal';

import config from '@plone/volto/registry';

const PatchNotesPanel = () => {
  const location = useLocation();
  const { url, isInternal, internalPath, authentication } = config?.settings?.[
    'volto-patchnotes'
  ]?.options;
  const [isClient, setIsClient] = useState(false);
  const [markdownContent, setMarkdownSource] = useRemark();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    fetchPatchNotes(isInternal, url, internalPath).then((response) => {
      setError(response?.error);
      console.log(response?.data);
      setMarkdownSource(response?.data);
      setLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(markdownContent);
  return (
    <>
      <Container
        id="page-customer-satisfaction"
        className="controlpanel-customer-satisfaction"
      >
        <h1>Patch notes</h1>
        <Dimmer active={loading} inverted>
          <Loader indeterminate size="small">
            <FormattedMessage id="loading" defaultMessage="Loading" />
          </Loader>
        </Dimmer>
        {!loading && !error && markdownContent}
        {!loading && error && 'Error loading patch notes'}
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
