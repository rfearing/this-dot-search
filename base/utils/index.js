import omit from 'lodash/omit';

/**
 * Returns a query string to the GitHub API
 * Notes:
 * - "?" appears in the action call
 * - Remove "q" if it appears
 * - Replace "q" param to the beginning of the query to ensure proper search
 * @param {Object} params
 */
export const generateQueryString = (params) => {
  const advancedParams = omit(params, 'q');
  const advancedQuery = advancedParams
    ? Object.keys(advancedParams).map((key) => (
      advancedParams[key] && `${key}%3A${encodeURI(advancedParams[key])}`
    )).join('+')
    : '';

  return params.q
    ? `${encodeURI(params.q)}+${advancedQuery}`
    : advancedQuery;
};


/**
 * Returns a human readable string of what params will be passed to the API
 * @param {Object} params
 */
export const generateReadableQueryString = (params) => (
  Object.keys(params).map((key) => params[key] && `${key}:${params[key]}`).join(' + ')
);
