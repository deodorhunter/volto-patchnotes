/**
 * Patch notes action.
 * @module volto-patches/actions/getPatchNotes
 */
import config from '@plone/volto/registry';

export const GET_PATCH_NOTES = 'GET_PATCH_NOTES';

/**
 * Get patch notes
 * @function getPatchNotes
 * @returns {Object}  Get patch notes action
 */
export function getPatchNotes() {
  return {
    type: GET_PATCH_NOTES,
    op: 'get',
    path: config?.settings?.['volto-patchnotes']?.options?.url ?? '',
  };
}
