import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isTextInstance = R.propEq('type', P.TextInstance);

export default isTextInstance;
