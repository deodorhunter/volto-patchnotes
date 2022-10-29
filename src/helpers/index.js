import config from '@plone/volto/registry';
import axios from 'axios';

/**
 * Get patch notes
 * @function getPatchNotes
 * @returns {Object}  Get patch notes action
 */
export const fetchPatchNotes = async (isInternal, url, internalPath) => {
  let data;
  if (!isInternal && url) {
    data = await getRemotePatchNotes(url);
  } else {
    // Load from module, how to do this?
  }
  console.log(data?.data);
  return data;
};
async function getRemotePatchNotes(url) {
  let results = {
    data: null,
    error: false,
  };
  try {
    const response = await axios(url);
    return {
      ...results,
      data: response?.data,
    };
  } catch (e) {
    return {
      ...results,
      error: true,
    };
  }
}
