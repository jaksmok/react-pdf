import * as R from 'ramda';
import * as P from '@jaksmok-react-pdf/primitives';

const isPolygon = R.propEq('type', P.Polygon);

export default isPolygon;
