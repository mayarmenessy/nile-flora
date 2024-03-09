import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame3 } from '../Frame3/Frame3';
import classes from './Component1.module.css';

interface Props {
  className?: string;
  hide?: {
    joinUs?: boolean;
    clock?: boolean;
  };
}
/* @figmaId 51:15 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Frame3 className={classes.frame32} classes={{ frame3: classes.frame3 }} />
      <div className={classes.knowledgeSharing}></div>
      <div className={classes.knowMore}>Know more</div>
    </div>
  );
});
