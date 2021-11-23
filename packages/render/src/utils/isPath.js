import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isPath = R.propEq('type', P.Path);

export default isPath;
