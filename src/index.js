import bookSVG from '@plone/volto/icons/book.svg';
import { patchNotesReducer } from './reducers/patchNotesReducer';
import { getPatchNotes } from './actions/getPatchNotesActions';
import { PatchNotesPanel } from './components/manage/PatchNotesPanel';

export { getPatchNotes, patchNotesReducer, PatchNotesPanel };

export default function applyConfig(config) {
  config.settings.nonContentRoutes = [
    ...config.settings.nonContentRoutes,
    '/patch-notes',
  ];
  config.widgets.id = {
    ...config.widgets.id,
  };

  config.addonReducers = {
    ...config.addonReducers,
    patchNotes: patchNotesReducer,
  };
  config.addonRoutes = [
    ...config.addonRoutes,
    {
      path: '/patch-notes',
      component: PatchNotesPanel,
    },
  ];

  config.settings['volto-patchnotes'] = {
    options: {
      url: '',
      isInternal: false,
      internalPath: null,
      authentication: {},
    },
  };
  config.settings.controlPanelsIcons['patch-notes'] = bookSVG;

  return config;
}
