import * as R from 'ramda';
import * as P from '@jaksmok-react-pdf/primitives';

const isTspan = R.propEq('type', P.Tspan);

export default isTspan;
