import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { defineMessages, useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { getPatchNotes } from '../../actions/getPatchNotesActions';
import {
  Container,
  Segment,
  Checkbox,
  Button,
  Table,
  Loader,
  Form,
  Input,
  Message,
} from 'semantic-ui-react';
import { Pagination, Toolbar, Unauthorized } from '@plone/volto/components';
import { Helmet, flattenToAppURL } from '@plone/volto/helpers';
import { useLocation } from 'react-router-dom';
import { Portal } from 'react-portal';

import config from '@plone/volto/registry';

const PatchNotesPanel = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { url, isInternal, internalPath, authentication } = config?.settings?.[
    'volto-patchnotes'
  ]?.options;
  const [isClient, setIsClient] = useState(false);
  const patchNotes = useSelector((state) => state.getPatchNotes);
  const { error, hasError, results, loading } = patchNotes;
  console.log(results);
  useEffect(() => {
    if (!isInternal && url) dispatch(getPatchNotes());
    else {
      // Load from module, how to do this?
    }
    setIsClient(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container
        id="page-customer-satisfaction"
        className="controlpanel-customer-satisfaction"
      >
        <Helmet title={'Patch Notes'} />
        {!error && !loading && <ReactMarkdown children={results ?? ''} />}
        {!error && loading && 'Caricamento ...'}
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
