import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isRadialGradient = R.propEq('type', P.RadialGradient);

export default isRadialGradient;
