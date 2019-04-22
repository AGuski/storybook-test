import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { centered } from '@storybook/addon-centered/angular';


import { boolean, number, text, select, radios, withKnobs, optionsKnob as options } from '@storybook/addon-knobs';

import { Welcome, Button } from '@storybook/angular/demo';
import { BannerComponent } from 'src/app/shared/banner.component';
import { AppComponent } from 'src/app/app.component';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

const inputsGroupId = 'Inputs';
const contentGroupId = 'Content';

function getBannerTypeOptions() {
  return options(
    'type', {
      ALERT: 'ALERT',
      WARNING: 'WARNING',
      INFO: 'INFO',
    },
    'ALERT', {
      display: 'inline-radio'
    },
    inputsGroupId
  );
}
  

storiesOf('Info|Banner', module)
  .addParameters({
    componentClassName: 'BannerComponent'
  })
  .addDecorator(withKnobs)
  .add('Banner with text', () => ({
    component: BannerComponent,
    props: {
      type: getBannerTypeOptions(),
      text: text('text', 'This is an alert text.', inputsGroupId)
    }
  }));

storiesOf('Info|Banner', module)
  .addParameters({
    componentClassName: 'BannerComponent'
  })
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Banner with content projection', () => ({
    component: BannerComponent,
    moduleMetadata: {
      declarations: [BannerComponent],
    },
    template: `
      <banner
        [type]="type"
      ><div [innerHTML]="htmlTemplate"></div></banner>
    `,
    props: {
      type: getBannerTypeOptions(),
      htmlTemplate: text('htmlTemplate', '<p>This is a content projected text.</p>', contentGroupId)
    }
  }), {
    knobs: {
      escapeHTML: false
    }
  });

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
