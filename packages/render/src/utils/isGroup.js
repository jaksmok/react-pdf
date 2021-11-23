import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isGroup = R.propEq('type', P.G);

export default isGroup;
