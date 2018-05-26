import React from 'react';
import Style from './Spinner.css';

const spinner = ()=>(
<div className={Style.skcubegrid}>
  <div className={[Style.skcube,Style.skcube1].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube2].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube3].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube4].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube5].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube6].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube7].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube8].join(' ')}></div>
  <div className={[Style.skcube,Style.skcube9].join(' ')}></div>
</div>
);

export default spinner;