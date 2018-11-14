// shim over react-cache to make it take objects
import { unstable_createResource } from 'react-cache';

export const createResource = callback => {
  const Resource = unstable_createResource(callback);
  return {
    read(obj) {
      return Resource.read(JSON.stringify(obj));
    }
  };
};
