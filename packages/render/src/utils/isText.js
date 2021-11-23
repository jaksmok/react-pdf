import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isText = R.propEq('type', P.Text);

export default isText;
