// import {
//   fetchPatchNotes,
//   useMarkdown,
//   customRenderComponents,
// } from './helpers';
import { PatchNotesPanel, PatchNotesToolbar } from './components';

// export {
//   fetchPatchNotes,
//   PatchNotesPanel,
//   useMarkdown,
//   customRenderComponents,
// };

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

  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '',
      component: PatchNotesToolbar,
    },
  ];

  config.settings['volto-patchnotes'] = {
    options: {
      url: '',
      isInternal: false,
      internalPath: null,
      authentication: {
        headers: {},
      },
    },
  };

  return config;
}
