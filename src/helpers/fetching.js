import axios from 'axios';

/**
 * Get patch notes
 * @function fetchPatchNotes
 * @returns {Object}  Get patch notes
 */
export const fetchPatchNotes = async (
  isInternal,
  url,
  internalPath,
  authentication,
) => {
  if (!isInternal && url) {
    return await getRemotePatchNotes(url, authentication);
  } else if (isInternal && internalPath) {
    return await getInternalPatchNotes(internalPath);
  }
};

async function getRemotePatchNotes(url, authentication) {
  let results = {
    data: null,
    error: null,
    hasError: false,
  };
  try {
    const response = await axios(url, {
      headers: {
        ...authentication?.headers,
      },
    });
    return {
      ...results,
      data: response?.data,
    };
  } catch (e) {
    return {
      ...results,
      hasError: true,
      error: e,
    };
  }
}
async function getInternalPatchNotes(path) {
  let results = {
    data: null,
    error: null,
    hasError: false,
  };
  try {
    const response = await axios(path);
    return {
      ...results,
      data: response?.data,
    };
  } catch (e) {
    return {
      ...results,
      hasError: true,
      error: e,
    };
  }
}
