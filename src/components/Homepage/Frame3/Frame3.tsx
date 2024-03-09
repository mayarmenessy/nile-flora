import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame2 } from '../Frame2/Frame2';
import classes from './Frame3.module.css';

interface Props {
  className?: string;
  classes?: {
    frame3?: string;
    root?: string;
  };
  hide?: {
    joinUs?: boolean;
    clock?: boolean;
  };
}
/* @figmaId 27:138 */
export const Frame3: FC<Props> = memo(function Frame3(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Frame2
        className={`${props.classes?.frame3 || ''} ${classes.frame3}`}
        hide={{
          joinUs: true,
          clock: true,
        }}
      />
    </div>
  );
});
