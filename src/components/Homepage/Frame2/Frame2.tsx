import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame2.module.css';

interface Props {
  className?: string;
  classes?: {
    clock?: string;
    root?: string;
  };
  hide?: {
    clock?: boolean;
    joinUs?: boolean;
  };
}
/* @figmaId 2:12 */
export const Frame2: FC<Props> = memo(function Frame2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.joinUs && <div className={classes.joinUs}>Join Us</div>}
      {!props.hide?.clock && <div className={`${props.classes?.clock || ''} ${classes.clock}`}></div>}
    </div>
  );
});
