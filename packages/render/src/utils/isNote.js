import * as R from 'ramda';
import * as P from '@jakmsok-react-pdf/primitives';

const isNote = R.propEq('type', P.Note);

export default isNote;
