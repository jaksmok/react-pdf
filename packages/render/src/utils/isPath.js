import * as R from 'ramda';
import * as P from '@jaksmok-react-pdf/primitives';

const isPath = R.propEq('type', P.Path);

export default isPath;
