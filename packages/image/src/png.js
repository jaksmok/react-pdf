import PNG from '@jakmsok-react-pdf/png-js';

PNG.isValid = function(data) {
  try {
    return !!new PNG(data);
  } catch (e) {
    return false;
  }
};

export default PNG;
