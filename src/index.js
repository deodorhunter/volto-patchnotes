import bookSVG from '@plone/volto/icons/book.svg';
import { fetchPatchNotes } from './helpers';
import PatchNotesPanel from './components/manage/PatchNotesPanel';

export { fetchPatchNotes, PatchNotesPanel };

export default function applyConfig(config) {
  config.settings.nonContentRoutes = [
    ...config.settings.nonContentRoutes,
    '/patch-notes',
  ];

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
