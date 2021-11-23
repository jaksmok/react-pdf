import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isCanvas = R.propEq('type', P.Canvas);

export default isCanvas;
