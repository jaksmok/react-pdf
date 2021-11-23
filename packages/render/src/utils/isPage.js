import * as R from 'ramda';
import * as P from '@jaksmok-react-pdf/primitives';

const isPage = R.propEq('type', P.Page);

export default isPage;
