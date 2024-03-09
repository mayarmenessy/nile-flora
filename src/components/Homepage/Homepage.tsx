import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import { Frame2 } from './Frame2/Frame2';
import classes from './Homepage.module.css';

interface Props {
  className?: string;
  hide?: {
    clock?: boolean;
  };
}
/* @figmaId 43:16 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.image1}></div>
        <Frame2 className={classes.frame2} classes={{ clock: classes.clock }} />
        <Frame2
          className={classes.frame3}
          hide={{
            clock: true,
          }}
        />
        <div className={classes.welcomeToNileFlora}>Welcome to Nile Flora </div>
        <div className={classes.contactUs}>Contact Us</div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.ourAimIsToMitigateTheEnvironme}>
        Our aim is to mitigate the environmental issue of water hyacinth overgrowth in the Nile by converting it into
        sustainable animal feed, offering a solution that aligns with the UN&#39;s SDGs.
      </div>
      <div className={classes.ourFeedYourSolutionToAGreenerH}>
        <div className={classes.textBlock}> Our feed, your solution to a greener, healthier tomorrow!&quot;</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <Component1 />
      <div className={classes.deWatermark1}></div>
      <div className={classes.spaFlower}></div>
      <div className={classes.spaFlower2}></div>
    </div>
  );
});
